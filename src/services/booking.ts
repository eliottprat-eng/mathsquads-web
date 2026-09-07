// Envoi des demandes du site (réservation élève et candidature prof).
//
// Deux chemins, dans cet ordre :
//   1. Resend via notre route /api/contact — service transactionnel, clé API
//      côté serveur, envoi depuis notre domaine. C'est le chemin normal.
//   2. FormSubmit directement depuis le navigateur — filet, utilisé seulement
//      si la route échoue (clé Resend absente, quota, panne).
//
// Pièges vérifiés en conditions réelles, à ne pas réintroduire :
//
// - FormSubmit répond HTTP 200 même quand l'envoi échoue. Le seul signal
//   fiable est le champ "success" du corps JSON. Tester uniquement res.ok
//   affiche un faux « Demande envoyée ! » et perd la demande en silence.
//
// - L'appel FormSubmit doit partir du NAVIGATEUR du visiteur : relayé par une
//   route serveur, il part d'une IP Vercel que FormSubmit rejette en 403.
//   Resend, lui, exige l'inverse (clé API, donc côté serveur uniquement).

export const CONTACT_EMAIL = "lamathsquad@gmail.com";

const RESEND_ROUTE = "/api/contact";
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

function withTimeout<T>(run: (signal: AbortSignal) => Promise<T>): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  return run(controller.signal).finally(() => clearTimeout(timeout));
}

async function sendViaResend(
  subject: string,
  fields: Record<string, string>,
  replyTo: string
): Promise<void> {
  await withTimeout(async (signal) => {
    const res = await fetch(RESEND_ROUTE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal,
      body: JSON.stringify({ subject, fields, replyTo }),
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      throw new Error(data?.error ?? `Route contact : ${res.status}`);
    }
  });
}

async function sendViaFormSubmit(
  subject: string,
  fields: Record<string, string>
): Promise<void> {
  await withTimeout(async (signal) => {
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal,
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
  });
}

async function sendContact(
  subject: string,
  fields: Record<string, string>,
  replyTo: string
): Promise<void> {
  try {
    await sendViaResend(subject, fields, replyTo);
  } catch {
    // Resend indisponible : on ne perd pas la demande, on repasse par FormSubmit.
    await sendViaFormSubmit(subject, fields);
  }
}

export function sendBookingRequest(data: BookingRequest): Promise<void> {
  return sendContact(
    `Nouvelle demande de cours : ${data.prenom} (${data.niveau}, ${data.ville}, ${data.format})`,
    {
      Prénom: data.prenom,
      Téléphone: data.telephone,
      Email: data.email,
      Niveau: data.niveau,
      Ville: data.ville,
      Format: data.format,
      Objectifs: data.objectifs || "Non précisé",
    },
    data.email
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
