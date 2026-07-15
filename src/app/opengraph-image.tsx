import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MathSquads — Cours particuliers de maths";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FBF7F0",
          color: "#1B2A44",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#E1613E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
              color: "white",
            }}
          >
            M²
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>MathSquads</div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          Cours particuliers de maths dès 20€/h
        </div>
        <div style={{ fontSize: 34, color: "#5A6B85", marginTop: 28 }}>
          Profs des grandes écoles · Lyon, Paris &amp; en ligne · 1ère heure offerte
        </div>
      </div>
    ),
    { ...size },
  );
}
