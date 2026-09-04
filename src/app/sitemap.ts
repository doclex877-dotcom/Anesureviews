import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/reviews",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/affiliate-disclosure",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const articlePages = articles.map((a) => ({
    url: `${site.url}/reviews/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticPages, ...articlePages];
}
