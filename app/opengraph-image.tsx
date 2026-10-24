import { ImageResponse } from "next/og";

export const alt = "AstroJain – Sachin Jain, Vedic astrologer in Jaipur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 88px",
        background: "radial-gradient(circle at 20% 10%, #232a78 0%, #0b0f2c 45%, #070a1c 100%)",
        color: "#fdf8ec",
        fontFamily: "serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e4bd64",
          }}
        >
          Vedic Astrology · Jaipur
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, marginTop: 18 }}>
          <span style={{ color: "#e4bd64" }}>ASTRO</span>
          <span>JAIN</span>
        </div>
        <div style={{ fontSize: 40, marginTop: 18, lineHeight: 1.25 }}>
          Sachin Jain, Vedic astrologer from Jaipur
        </div>
        <div style={{ fontSize: 28, marginTop: 28, color: "#c9c6e2" }}>
          Kundli Matching · Face Reading · Numerology · Vastu · Online Worldwide
        </div>
      </div>
      <div
        style={{
          width: 300,
          height: 300,
          borderRadius: 9999,
          border: "4px solid #d4a843",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 80px rgba(212,168,67,0.35)",
        }}
      >
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: 9999,
            border: "2px dashed rgba(212,168,67,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 120,
            color: "#e4bd64",
          }}
        >
          <svg width="120" height="120" viewBox="0 0 64 64">
            <path
              d="M32 4l6.6 21.4L60 32l-21.4 6.6L32 60l-6.6-21.4L4 32l21.4-6.6z"
              fill="#e4bd64"
            />
          </svg>
        </div>
      </div>
    </div>,
    size,
  );
}
