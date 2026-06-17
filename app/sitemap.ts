import type { MetadataRoute } from "next";

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
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
