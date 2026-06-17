export interface Plan {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  period: string;
  popular?: boolean;
  inclTitle: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    name: "Performance",
    tagline: "Le socle métier : référentiel, stock, propales, BDC, activité vendeurs.",
    price: "69 €",
    unit: "HT / user",
    period: "Par mois — engagement annuel",
    inclTitle: "Inclus",
    features: [
      "Référentiel client unique",
      "Stock VO et VN, marge live",
      "Propales et BDC",
      "Rapport vendeur (RPV)",
      "Tableaux de bord standards",
      "Formation 14 jours",
    ],
  },
  {
    name: "Connect",
    tagline:
      "Performance + tous les canaux client (VOIP, WhatsApp, SMS, email) + lead management.",
    price: "89 €",
    unit: "HT / user",
    period: "Par mois — engagement annuel",
    popular: true,
    inclTitle: "Tout Performance, plus",
    features: [
      "Téléphonie VOIP intégrée",
      "WhatsApp Business connecté",
      "SMS et email (Gmail / Outlook)",
      "Lead management complet",
      "Module marketing",
      "Adaptation sous 24h",
    ],
  },
  {
    name: "Intelligence",
    tagline: "Connect + Delco, le copilote IA. Adapté à chaque rôle.",
    price: "109 €",
    unit: "HT / user",
    period: "Par mois — engagement annuel",
    inclTitle: "Tout Connect, plus",
    features: [
      "Delco — signaux par rôle",
      "Recherche conversationnelle",
      "Brief du matin oral",
      "Synthèse pipeline / sites",
      "Exports PDF / Excel",
      "Référent dédié Oropra",
    ],
  },
];
