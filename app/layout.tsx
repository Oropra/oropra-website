import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ConditionalNav, ConditionalFooter } from "@/components/layout/ConditionalChrome";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
});

const siteName = "One Data";
const baseDescription =
  "Le CRM des concessions auto, fait pour être utilisé tous les jours. Clients, stock, communications, management commercial et copilote IA Delco sur une seule donnée.";

export const metadata: Metadata = {
  metadataBase: new URL("https://onedata.fr"),
  title: {
    default: "One Data — Le CRM des concessions auto",
    template: "%s — One Data",
  },
  description: baseDescription,
  openGraph: {
    siteName,
    title: "One Data — Le CRM des concessions auto",
    description: baseDescription,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Data — Le CRM des concessions auto",
    description: baseDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon-oropra.png" />
      </head>
      <body>
        <ConditionalNav />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
