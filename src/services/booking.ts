// Envoi des demandes du site (réservation élève et candidature prof) vers la
// boîte mail MathSquads via FormSubmit (https://formsubmit.co), sans backend
// ni clé API.
//
// Pièges vérifiés en conditions réelles, à ne pas réintroduire :
//
// 1. FormSubmit répond HTTP 200 même quand l'envoi échoue. Le seul signal
//    fiable est le champ "success" du corps JSON. Tester uniquement res.ok
//    affiche un faux « Demande envoyée ! » et perd la demande en silence.
//
// 2. L'appel doit partir du NAVIGATEUR du visiteur. Relayé par une route
//    serveur, il part d'une IP Vercel que FormSubmit rejette en 403.
//
// 3. Resend a été écarté : il exige un MX sur un sous-domaine, or le DNS de
//    mathsquads.com est chez Wix, qui ne gère les MX que sur le domaine
//    racine. Y revenir supposerait de migrer le DNS (Cloudflare/Vercel).

import { site } from "@/lib/site";

export const CONTACT_EMAIL = "lamathsquad@gmail.com";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const TIMEOUT_MS = 15_000;

export interface BookingRequest {
  prenom: string;
  telephone: string;
  email: string;
  niveau: string;
  ville: string;
  format: string;
  objectifs: string;
}

export interface TeacherApplication {
  prenom: string;
  nom: string;
  email: string;
  ecole: string;
  niveaux: string;
  motivation: string;
}

async function sendContact(
  subject: string,
  fields: Record<string, string>,
  replyTo: string,
  autoResponse?: string
): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        _subject: subject,
        _template: "table",
        _captcha: "false",
        // Répondre au mail reçu répond directement à l'élève.
        _replyto: replyTo,
        // Accusé de réception envoyé au visiteur par FormSubmit. Il ne part que
        // si le formulaire contient un champ nommé exactement « email », en
        // minuscules : d'où la clé `email` dans sendBookingRequest.
        ...(autoResponse ? { _autoresponse: autoResponse } : {}),
        ...fields,
      }),
    });

    const data = (await res.json().catch(() => null)) as
      | { success?: string; message?: string }
      | null;

    if (!res.ok || String(data?.success) !== "true") {
      throw new Error(data?.message ?? `FormSubmit a répondu ${res.status}.`);
    }
  } finally {
    clearTimeout(timeout);
  }
}

// Texte brut : FormSubmit n'interprète pas le HTML dans une réponse automatique.
// Court, et une seule demande à la fin pour que l'élève réponde avec ses dispos.
function bookingAutoResponse(prenom: string): string {
  return [
    `Bonjour ${prenom},`,
    "",
    "Merci d'avoir choisi MathSquads. Ta demande est bien arrivée, et ta première heure de cours est offerte, sans engagement.",
    "",
    "Pour la programmer, réponds simplement à ce message en nous disant quand tu es disponible (jours et créneaux qui t'arrangent). On te confirme sous 24 h l'horaire et le prof le plus adapté à ton niveau.",
    "",
    `Tu préfères qu'on en parle de vive voix ? Appelle-nous au ${site.phoneDisplay}.`,
    "",
    "À très vite,",
    "L'équipe MathSquads",
  ].join("\n");
}

export function sendBookingRequest(data: BookingRequest): Promise<void> {
  return sendContact(
    `Nouvelle demande de cours : ${data.prenom} (${data.niveau}, ${data.ville}, ${data.format})`,
    {
      Prénom: data.prenom,
      Téléphone: data.telephone,
      email: data.email,
      Niveau: data.niveau,
      Ville: data.ville,
      Format: data.format,
      Objectifs: data.objectifs || "Non précisé",
    },
    data.email,
    bookingAutoResponse(data.prenom)
  );
}

export function sendTeacherApplication(data: TeacherApplication): Promise<void> {
  return sendContact(
    `Candidature prof : ${data.prenom} ${data.nom} (${data.ecole})`,
    {
      Prénom: data.prenom,
      Nom: data.nom,
      Email: data.email,
      École: data.ecole,
      "Niveaux enseignés": data.niveaux,
      Motivation: data.motivation || "Non précisé",
    },
    data.email
  );
}
