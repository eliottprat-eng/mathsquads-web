import { ImageResponse } from "next/og";

export const alt = "MathSquads — Les maths accessibles à tous, dès 20€/h";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          backgroundImage:
            "radial-gradient(circle at 15% 80%, rgba(91,141,239,0.18) 0%, rgba(15,23,42,0) 50%), radial-gradient(circle at 85% 20%, rgba(255,187,10,0.12) 0%, rgba(15,23,42,0) 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginBottom: 44,
          }}
        >
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 28,
              background: "linear-gradient(135deg, #82AEFF 0%, #5B8DEF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 52,
              fontWeight: 800,
            }}
          >
            M²
          </div>
          <div style={{ display: "flex", color: "#FFFFFF", fontSize: 84, fontWeight: 800 }}>
            MathSquads
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#E2E8F0",
            fontSize: 38,
            fontWeight: 500,
            marginBottom: 18,
          }}
        >
          Les maths accessibles à tous — dès 20€/h
        </div>
        <div style={{ display: "flex", color: "#94A3B8", fontSize: 26 }}>
          Lyon · Lille · Paris &amp; toute la France en visio — 1ère heure gratuite
        </div>
      </div>
    ),
    { ...size }
  );
}
