// Envoi des demandes du site (réservation élève et candidature prof) vers la
// boîte mail MathSquads. Le POST part sur notre propre route /api/contact, qui
// relaie vers FormSubmit côté serveur et vérifie que l'envoi a réellement
// abouti : FormSubmit répond HTTP 200 même en cas d'échec, donc un simple
// res.ok côté navigateur laisserait passer des demandes perdues.

export const CONTACT_EMAIL = "lamathsquad@gmail.com";

const CONTACT_ENDPOINT = "/api/contact";
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
    const res = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({ subject, fields }),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      throw new Error(data?.error ?? `La demande n'a pas pu être envoyée (${res.status}).`);
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
