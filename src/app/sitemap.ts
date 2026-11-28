import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://user040131.github.io",
      lastModified: new Date("2026-08-13"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://user040131.github.io/en/",
      lastModified: new Date("2026-11-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
