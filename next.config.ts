import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Anciennes URLs V1 → nouvelle sitemap V2 (308 permanent, SEO préservé)
      { source: "/solution", destination: "/plateforme", permanent: true },
      { source: "/fonctionnalites", destination: "/plateforme", permanent: true },
      { source: "/equipe", destination: "/a-propos", permanent: true },
      { source: "/support", destination: "/adoption", permanent: true },
    ];
  },
};

export default nextConfig;
