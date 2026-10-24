"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { primaryPhone } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(JSON.stringify({ event: "page.error", digest: error.digest }));
  }, [error]);

  return (
    <section className="section">
      <div className="container-site max-w-2xl text-center">
        <p className="eyebrow">Something Went Wrong</p>
        <h1 className="text-display-lg">This Page Did Not Load Properly</h1>
        <p className="mt-4 text-lg text-fg-muted">
          A temporary problem stopped this page from loading. Try again, and if it keeps happening,
          call us on {primaryPhone.display} to book directly.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={reset}>
            <RotateCcw size={16} aria-hidden="true" /> Try Again
          </Button>
          <ButtonLink href={`tel:${primaryPhone.tel}`} variant="secondary">
            Call {primaryPhone.display}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
