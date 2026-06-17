import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";

const base = "https://onedata.fr";

const routes = [
  "",
  "/plateforme",
  "/donnee-propre",
  "/relation-client",
  "/management",
  "/delco",
  "/adoption",
  "/prix",
  "/ressources",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/cgv",
  "/rgpd",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/ressources/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));
  return [...staticRoutes, ...articleRoutes];
}
