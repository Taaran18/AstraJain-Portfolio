import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-site max-w-2xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="text-display-lg">This Page Is Not In The Stars</h1>
        <p className="mt-4 text-lg text-fg-muted">
          The page you are looking for has moved or never existed. The links below will take you
          somewhere useful.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Go To The Homepage</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            See All Consultations
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
