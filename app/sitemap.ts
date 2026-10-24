import type { MetadataRoute } from "next";
import { servicePages } from "@/data/services";
import { absoluteUrl } from "@/lib/site";

const lastModified = new Date("2026-10-24");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    ...servicePages.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
  ];
  return pages.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
