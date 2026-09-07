import { NextResponse } from "next/server";

// Envoi des demandes du site par Resend (https://resend.com).
// Appel HTTP direct : le SDK `resend` n'apporte rien pour un seul POST.
//
// Variables d'environnement Vercel :
//   RESEND_API_KEY  (obligatoire) clé "re_..." créée sur resend.com
//   RESEND_FROM     (optionnel)   expéditeur, ex. "MathSquads <contact@mathsquads.com>"
//                                 défaut : le domaine de test de Resend, qui ne
//                                 peut écrire qu'à l'adresse du compte Resend.
//
// Sans RESEND_API_KEY la route répond 503 : le client bascule alors sur
// FormSubmit, pour qu'aucune demande ne se perde avant la configuration.

// CONTACT_TO permet de basculer le destinataire sans redéployer de code.
// Tant que le domaine n'est pas vérifié chez Resend, l'expéditeur de test
// (onboarding@resend.dev) ne peut écrire qu'à l'adresse du compte Resend.
const CONTACT_EMAIL = process.env.CONTACT_TO || "lamathsquad@gmail.com";
const DEFAULT_FROM = "MathSquads <onboarding@resend.dev>";
const TIMEOUT_MS = 10_000;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

function buildHtml(fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 14px;border:1px solid #e5e0d8;font-weight:600">${escapeHtml(
          key
        )}</td><td style="padding:8px 14px;border:1px solid #e5e0d8">${escapeHtml(value)}</td></tr>`
    )
    .join("");
  return `<table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">${rows}</table>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Resend non configuré." }, { status: 503 });
  }

  let payload: { subject?: unknown; fields?: unknown; replyTo?: unknown };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { subject, fields, replyTo } = payload;
  const validFields =
    fields && typeof fields === "object" && !Array.isArray(fields)
      ? (Object.fromEntries(
          Object.entries(fields as Record<string, unknown>).map(([k, v]) => [k, String(v)])
        ) as Record<string, string>)
      : null;

  if (typeof subject !== "string" || !subject.trim() || !validFields) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        from: process.env.RESEND_FROM || DEFAULT_FROM,
        to: [CONTACT_EMAIL],
        subject: subject.slice(0, 200),
        html: buildHtml(validFields),
        // Répondre au mail répond directement à l'élève.
        ...(typeof replyTo === "string" && replyTo.includes("@") ? { reply_to: replyTo } : {}),
      }),
    });

    if (!res.ok) {
      const detail = (await res.json().catch(() => null)) as { message?: string } | null;
      console.warn(`[contact] Resend a refusé l'envoi (HTTP ${res.status}) : ${detail?.message ?? "?"}`);
      return NextResponse.json(
        { error: detail?.message ?? `Resend a répondu ${res.status}.` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.warn(`[contact] Resend injoignable : ${err instanceof Error ? err.message : "?"}`);
    return NextResponse.json({ error: "Service d'envoi injoignable." }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
