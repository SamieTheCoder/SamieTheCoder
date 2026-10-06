import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://readme.samsite.in.net/",
      lastModified: new Date("2026-08-31T20:10:00+05:30"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
