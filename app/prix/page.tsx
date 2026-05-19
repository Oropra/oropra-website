"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const plans = [
  {
    name: "Essentiel",
    subtitle: "Pour 1 à 2 concessions",
    price: "À partir de 69 € HT / utilisateur / mois",
    priceNote: "Engagement annuel",
    desc: "L'offre pour démarrer proprement, avec tout ce qu'il faut pour une concession indépendante ou un petit groupe.",
    features: [
      "Référentiel clients",
      "Prospects et opportunités",
      "Stock VO et VN",
      "Communications unifiées (VOIP, WhatsApp, SMS, email)",
      "Devis et BDC",
      "Tableaux de bord standards",
      "Formation 14 jours incluse",
      "Support email et chat",
      "Hébergement, sauvegardes, mises à jour",
    ],
    cta: "Demander un devis", topColor: "bg-service-blue",
  },
  {
    name: "Standard",
    subtitle: "Pour 3 à 10 concessions",
    price: "À partir de 99 € HT / utilisateur / mois",
    priceNote: "Engagement annuel",
    desc: "Pour les groupes en croissance qui veulent garder la main sur leur outil.",
    features: [
      "Tout ce qui est dans Essentiel",
      "Adaptation de l'outil sous 24h par votre responsable commercial Oropra (80 % des demandes)",
      "Tableaux de bord consolidés multi-sites",
      "Support prioritaire (téléphone, SLA)",
      "Espace client web pour vos acheteurs (suivi de commande, documents)",
    ],
    cta: "Demander un devis", topColor: "bg-service-green",
  },
  {
    name: "Groupe",
    subtitle: "Pour les groupes multi-sites et multi-marques",
    price: "Sur devis, à partir de 119 € HT / utilisateur / mois",
    priceNote: "Selon volume",
    desc: "Pour les structures où l'harmonisation entre sites et entre marques est critique (10+ sites).",
    features: [
      "Tout ce qui est dans Standard",
      "Tableaux de bord groupe (consolidation, comparaison inter-sites)",
      "Modèles de documents personnalisés par marque",
      "Accompagnement dédié (référent One Data assigné)",
      "Intégrations sur mesure (DMS, outils internes)",
    ],
    cta: "Nous contacter", topColor: "bg-service-orange",
  },
];

export default function PrixPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-[100px] px-4 bg-[#3a6bbb] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>
        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 pt-1.5 pb-1 rounded-full">
              Tarifs
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Des prix simples. Affichés. Sans piège.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
              On affiche nos tarifs. Pas de &quot;nous consulter&quot; sur la page d&apos;accueil. Vous pouvez calculer ce que ça va vous coûter avant même de prendre rendez-vous.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text-emphasis text-center mb-10">
            Trois formules. Une par taille de structure.
          </motion.h2>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className="rounded-[14px] p-7 border border-border-light bg-white shadow-[var(--shadow-default)] flex flex-col relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${plan.topColor}`} />
                <h3 className="text-xl font-bold mb-1 text-text-emphasis">{plan.name}</h3>
                <p className="text-xs text-text-faint mb-3">{plan.subtitle}</p>
                <p className="text-base font-bold text-accent-default mb-0.5">{plan.price}</p>
                <p className="text-xs text-text-faint mb-4">{plan.priceNote}</p>
                <p className="text-sm leading-relaxed mb-6 text-text-subtle">{plan.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-default" />
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="primary"
                  size="md"
                  href="mailto:bienvenue@oropra.com"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="max-w-2xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text-emphasis mb-3">À ajouter selon vos besoins.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Marketing prédictif : identification des clients à fort potentiel de renouvellement — à partir de 250 €/mois",
              "Reporting avancé : tableaux de bord sur mesure, exports automatisés — à partir de 150 €/mois",
              "Export comptable : FEC, formats spécifiques (Sage, Cegid…) — à partir de 50 €/mois",
              "Connecteurs DMS : selon la marque et l'éditeur DMS — sur devis",
            ].map((opt) => (
              <motion.div key={opt} variants={fadeUp} className="bg-bg-base rounded-xl px-5 py-4 border border-border-light flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-light shrink-0 mt-1.5" />
                <span className="text-sm text-text-primary">{opt}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-emphasis mb-4">Pas de surprise. Pas de coûts cachés.</h2>
          <p className="text-text-subtle leading-relaxed mb-4">
            Beaucoup d&apos;éditeurs facturent la formation, le support, les mises à jour ou l&apos;hébergement en option. Pas nous.
          </p>
          <p className="text-text-subtle leading-relaxed mb-4">
            <strong>Inclus dans tous les plans</strong> : formation 14 jours pour toute l&apos;équipe, support, hébergement en Europe, sauvegardes quotidiennes, mises à jour continues, conformité RGPD.
          </p>
          <p className="text-text-subtle leading-relaxed mb-8">
            <strong>Facturé en plus, seulement si vous en avez besoin</strong> : les options ci-dessus, les migrations de données complexes au-delà de l&apos;essentiel, le développement de connecteurs spécifiques.
          </p>
          <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">Demander un devis</Button>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
