import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 35% 30%, #2a2f78 0%, #0b0f2c 80%)",
      }}
    >
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: 9999,
          border: "5px solid #d4a843",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e4bd64",
          fontSize: 90,
        }}
      >
        <svg width="84" height="84" viewBox="0 0 64 64">
          <path d="M32 4l6.6 21.4L60 32l-21.4 6.6L32 60l-6.6-21.4L4 32l21.4-6.6z" fill="#e4bd64" />
        </svg>
      </div>
    </div>,
    size,
  );
}
