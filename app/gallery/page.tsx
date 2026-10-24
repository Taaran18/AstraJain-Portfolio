import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { pageMetadata } from "@/lib/seo";

const path = "/gallery";

export const metadata: Metadata = pageMetadata({
  title: "Gallery | Sachin Jain, Astrologer In Jaipur",
  description:
    "Photos of Jaipur astrologer Sachin Jain at work and the practices behind every reading: kundli, palmistry and face reading.",
  path,
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Gallery", path }]}
        eyebrow="Gallery"
        title="Inside AstroJain"
        intro="See where your consultation happens, meet Sachin Jain, and explore the practices behind every reading. Tap any photo to see it larger."
      />
      <section className="section pt-0">
        <div className="container-site">
          <GalleryGrid />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
