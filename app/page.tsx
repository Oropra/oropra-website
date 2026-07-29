import type { Metadata } from "next";
import LandingNarrative from "./LandingNarrative";

export const metadata: Metadata = {
  title: "One Data — Le CRM des concessions auto",
  description:
    "Clients, stock, communications, management commercial et copilote IA Delco sur une seule donnée. Explorez le produit en démo interactive.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <LandingNarrative />;
}
