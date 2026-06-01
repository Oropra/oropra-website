import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "One Data — CRM pour concessions automobiles",
  description:
    "One Data réunit clients, opportunités, stock VO/VN et communications dans un seul CRM pour les concessions. Formez votre équipe en 14 jours. Adapté à votre métier sous 24h.",
  openGraph: {
    title: "One Data — CRM pour concessions automobiles",
    description:
      "One Data réunit clients, opportunités, stock VO/VN et communications dans un seul CRM pour les concessions. Formez votre équipe en 14 jours. Adapté à votre métier sous 24h.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${nunito.variable} ${nunito.className}`}>
      <head>
        <link rel="icon" href="/favicon-oropra.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
