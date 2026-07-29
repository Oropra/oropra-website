"use client";

// ============================================================================
//  ConditionalChrome — affiche la Nav et le Footer du site marketing
//  SAUF sur les pages qui gèrent leur propre habillage :
//    - "/"      : la landing narrative (nav cinématique intégrée)
//    - "/demo"  : le playground One Data (topnav produit)
//  Toutes les autres pages (plateforme, adoption, prix, légal…) gardent
//  la nav et le footer classiques du site.
// ============================================================================

import { usePathname } from "next/navigation";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const BARE_ROUTES = ["/", "/demo"];

function isBare(pathname: string): boolean {
  // /demo et tout ce qui commence par /demo/ (sous-pages du playground)
  return BARE_ROUTES.includes(pathname) || pathname.startsWith("/demo/");
}

export function ConditionalNav() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return <Nav />;
}

export function ConditionalFooter() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return <Footer />;
}
