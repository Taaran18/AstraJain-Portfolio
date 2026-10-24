"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Dialog } from "@/components/ui/Dialog";
import { Button, ButtonLink } from "@/components/ui/Button";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

type Filter = "All" | GalleryCategory;

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter],
  );

  const openIndex = filtered.findIndex((g) => g.id === openId);
  const openItem = openIndex >= 0 ? filtered[openIndex] : null;

  const step = (dir: number) => {
    if (openIndex < 0) return;
    const next = (openIndex + dir + filtered.length) % filtered.length;
    setOpenId(filtered[next].id);
  };

  return (
    <>
      <div className="sticky top-[4.5rem] z-30 border-b border-line bg-paper/95 py-4 backdrop-blur-md lg:top-[5.5rem]">
        <div
          role="group"
          aria-label="Filter photos by topic"
          className="flex gap-2 overflow-x-auto pb-1"
        >
          {(["All", ...galleryCategories] as Filter[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={cn(
                "min-h-10 shrink-0 rounded-full px-4 text-sm font-semibold transition-colors",
                filter === cat
                  ? "bg-brand text-night"
                  : "border border-line-strong text-fg-muted hover:border-gold hover:text-gold",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "photo" : "photos"}
        {filter === "All" ? "" : ` in ${filter}`}
      </p>

      {filtered.length === 0 ? (
        <div className="card mt-8 p-10 text-center">
          <h2 className="text-display-sm">No Photos In This Topic Yet</h2>
          <p className="mx-auto mt-2 max-w-md text-fg-muted">
            We add new photos after consultations and events. Try another topic or view all photos.
          </p>
          <Button variant="secondary" className="mt-6" onClick={() => setFilter("All")}>
            Show All Photos
          </Button>
        </div>
      ) : (
        <m.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence initial={false}>
            {filtered.map((item) => (
              <m.li
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(item.id)}
                  className="card card-hover group flex h-full w-full flex-col overflow-hidden text-left"
                  aria-haspopup="dialog"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-tint">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 300px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-night/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-sans text-lg font-semibold tracking-normal">
                      {item.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-fg-muted">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                      <Maximize2 size={14} aria-hidden="true" /> View Photo
                    </span>
                  </div>
                </button>
              </m.li>
            ))}
          </AnimatePresence>
        </m.ul>
      )}

      <Dialog
        open={Boolean(openItem)}
        onClose={() => setOpenId(null)}
        title={openItem?.title ?? ""}
        description={
          openItem ? `${openItem.category} · ${openIndex + 1} of ${filtered.length}` : undefined
        }
        size="md"
        footer={
          openItem && (
            <>
              <div className="flex gap-2 sm:mr-auto">
                <Button
                  variant="secondary"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="flex-1 sm:flex-none"
                >
                  <ChevronLeft size={18} aria-hidden="true" /> Previous
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="flex-1 sm:flex-none"
                >
                  Next <ChevronRight size={18} aria-hidden="true" />
                </Button>
              </div>
              <ButtonLink href={openItem.href ?? "/contact#book"} onClick={() => setOpenId(null)}>
                {openItem.href?.startsWith("/services")
                  ? "Explore This Service"
                  : "Book A Consultation"}
                <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
            </>
          )
        }
      >
        {openItem && (
          <div>
            <div className="relative overflow-hidden rounded-2xl bg-tint">
              <Image
                src={openItem.src}
                alt={openItem.alt}
                width={openItem.width}
                height={openItem.height}
                sizes="(min-width: 768px) 560px, 100vw"
                className="mx-auto max-h-[55dvh] w-auto object-contain"
              />
            </div>
            <p className="mt-5 text-fg-muted">{openItem.description}</p>
            <p className="mt-3 text-sm text-fg-subtle">
              Have a question about this?{" "}
              <Link
                href="/contact#book"
                className="font-semibold text-gold hover:underline"
                onClick={() => setOpenId(null)}
              >
                Ask Sachin Jain directly
              </Link>
              .
            </p>
          </div>
        )}
      </Dialog>
    </>
  );
}
