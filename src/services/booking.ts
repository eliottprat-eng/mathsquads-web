// Envoi des demandes de réservation vers la boîte mail MathSquads via
// FormSubmit (https://formsubmit.co) : pas de backend ni de clé API requis.
// ⚠️ Premier envoi en prod : FormSubmit envoie un mail d'activation à
// lamathsquad@gmail.com, il faut cliquer le lien une fois pour activer.

export interface BookingRequest {
  prenom: string;
  telephone: string;
  email: string;
  niveau: string;
  objectifs: string;
}

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/lamathsquad@gmail.com";
const TIMEOUT_MS = 10_000;

export async function sendBookingRequest(data: BookingRequest): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        _subject: `Nouvelle demande de cours — ${data.prenom} (${data.niveau})`,
        _template: "table",
        _captcha: "false",
        Prénom: data.prenom,
        Téléphone: data.telephone,
        Email: data.email,
        Niveau: data.niveau,
        Objectifs: data.objectifs || "Non précisé",
      }),
    });

    if (!res.ok) {
      throw new Error(`FormSubmit a répondu ${res.status}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}
