// Envoi des demandes du site (réservation élève et candidature prof) vers la
// boîte mail MathSquads via FormSubmit (https://formsubmit.co), sans backend
// ni clé API.
//
// Deux pièges vérifiés en conditions réelles, à ne pas réintroduire :
//
// 1. FormSubmit répond HTTP 200 même quand l'envoi échoue. Le seul signal
//    fiable est le champ "success" du corps JSON. Tester uniquement res.ok
//    affiche un faux « Demande envoyée ! » et perd la demande en silence.
//
// 2. L'appel doit partir du NAVIGATEUR du visiteur. Relayé par une route
//    serveur, il part d'une IP Vercel que FormSubmit rejette en 403.

export const CONTACT_EMAIL = "lamathsquad@gmail.com";
export const CONTACT_PHONE_DISPLAY = "07 83 53 57 72";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const TIMEOUT_MS = 15_000;

export interface BookingRequest {
  prenom: string;
  telephone: string;
  email: string;
  niveau: string;
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

async function sendContact(subject: string, fields: Record<string, string>): Promise<void> {
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

export function sendBookingRequest(data: BookingRequest): Promise<void> {
  return sendContact(`Nouvelle demande de cours : ${data.prenom} (${data.niveau})`, {
    Prénom: data.prenom,
    Téléphone: data.telephone,
    Email: data.email,
    Niveau: data.niveau,
    Objectifs: data.objectifs || "Non précisé",
  });
}

export function sendTeacherApplication(data: TeacherApplication): Promise<void> {
  return sendContact(`Candidature prof : ${data.prenom} ${data.nom} (${data.ecole})`, {
    Prénom: data.prenom,
    Nom: data.nom,
    Email: data.email,
    École: data.ecole,
    "Niveaux enseignés": data.niveaux,
    Motivation: data.motivation || "Non précisé",
  });
}
