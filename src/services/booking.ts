// Envoi des demandes du site vers la boîte mail MathSquads via FormSubmit
// (https://formsubmit.co) : pas de backend ni de clé API requis.
// ⚠️ Premier envoi en prod : FormSubmit envoie un mail d'activation à
// l'adresse ci-dessous, il faut cliquer le lien une fois pour activer.

export const CONTACT_EMAIL = "lamathsquad@gmail.com";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const TIMEOUT_MS = 10_000;

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

async function postToFormSubmit(subject: string, fields: Record<string, string>): Promise<void> {
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

    if (!res.ok) {
      throw new Error(`FormSubmit a répondu ${res.status}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}

export function sendBookingRequest(data: BookingRequest): Promise<void> {
  return postToFormSubmit(`Nouvelle demande de cours : ${data.prenom} (${data.niveau})`, {
    Prénom: data.prenom,
    Téléphone: data.telephone,
    Email: data.email,
    Niveau: data.niveau,
    Objectifs: data.objectifs || "Non précisé",
  });
}

export function sendTeacherApplication(data: TeacherApplication): Promise<void> {
  return postToFormSubmit(`Candidature prof : ${data.prenom} ${data.nom} (${data.ecole})`, {
    Prénom: data.prenom,
    Nom: data.nom,
    Email: data.email,
    École: data.ecole,
    "Niveaux enseignés": data.niveaux,
    Motivation: data.motivation || "Non précisé",
  });
}
