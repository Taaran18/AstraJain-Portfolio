"use client";

import dynamic from "next/dynamic";

const CosmicBackground = dynamic(() => import("./CosmicBackground"), {
  ssr: false,
  loading: () => null,
});

export default function CosmicBackgroundClient() {
  return <CosmicBackground />;
}
