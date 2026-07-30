import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/site";

// Relais serveur vers FormSubmit. Passer par le serveur plutôt que par le
// navigateur évite deux causes de perte silencieuse de demandes :
//  - les bloqueurs de pub qui coupent les requêtes vers un tiers ;
//  - les rejets de FormSubmit liés à l'absence d'Origin/Referer.
// ⚠️ FormSubmit répond HTTP 200 même quand l'envoi échoue : le seul vrai
// signal est le champ "success" du JSON, testé plus bas.

const CONTACT_EMAIL = "lamathsquad@gmail.com";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const TIMEOUT_MS = 10_000;

type ContactPayload = {
  subject?: unknown;
  fields?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { subject, fields } = payload;
  const validFields =
    fields && typeof fields === "object" && !Array.isArray(fields)
      ? (fields as Record<string, unknown>)
      : null;

  if (typeof subject !== "string" || !subject.trim() || !validFields) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // FormSubmit rejette les requêtes sans provenance identifiable.
        Origin: SITE_URL,
        Referer: `${SITE_URL}/`,
      },
      signal: controller.signal,
      body: JSON.stringify({
        _subject: subject,
        _template: "table",
        _captcha: "false",
        ...validFields,
      }),
    });

    const data = (await res.json().catch(() => null)) as
      | { success?: string; message?: string }
      | null;

    // Le seul critère fiable : success === "true" dans le corps de la réponse.
    if (!res.ok || String(data?.success) !== "true") {
      console.warn(
        `[contact] Envoi refusé par FormSubmit (HTTP ${res.status}) : ${data?.message ?? "réponse illisible"}`
      );
      return NextResponse.json(
        { error: data?.message ?? `FormSubmit a répondu ${res.status}.` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const reason = err instanceof Error ? err.message : "erreur inconnue";
    console.warn(`[contact] Envoi impossible : ${reason}`);
    return NextResponse.json({ error: "Service d'envoi injoignable." }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
