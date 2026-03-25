import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found – AstroJain",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cosmic-gradient px-4">
      <div className="text-center">
        <div className="font-cinzel text-8xl font-bold text-gold mb-4 opacity-60">
          404
        </div>
        <div className="text-5xl mb-6">✦</div>
        <h1 className="font-cinzel text-2xl text-white mb-4">
          This Star Has Moved
        </h1>
        <p className="font-cormorant text-lg text-cosmic-silver/65 mb-8 max-w-md mx-auto">
          The page you seek has shifted in the cosmic order. Let us guide you
          back to familiar stars.
        </p>
        <Link href="/" className="btn-gold inline-block py-3 px-8">
          Return Home
        </Link>
      </div>
    </div>
  );
}
