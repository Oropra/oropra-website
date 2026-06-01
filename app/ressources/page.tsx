"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const articles = [
  { title: "Pourquoi 70 % des CRM auto ne sont pas utilisés (et comment éviter ça)", tag: "Conseil", readTime: "5 min" },
  { title: "Le coût réel d'un VO qui dort 90 jours", tag: "Analyse", readTime: "4 min" },
  { title: "Comment harmoniser un process commercial entre 5 sites sans tout rigidifier", tag: "Méthode", readTime: "5 min" },
  { title: "WhatsApp en concession : pratiques, dérives, et comment cadrer sans casser la relation client", tag: "Pratique", readTime: "4 min" },
  { title: "Le rapport vendeur (RPV) : à quoi ça sert, pourquoi tout le monde le rate", tag: "Méthode", readTime: "3 min" },
  { title: "Lead entrant à 18h le vendredi : combien de fois il est rappelé le lundi matin ?", tag: "Analyse", readTime: "3 min" },
];

const guides = [
  "Le guide de la reprise du référentiel client — comment nettoyer, dédoublonner et migrer",
  "Embarquer une équipe sur un nouvel outil — méthode 14 jours, jour par jour",
  "Construire un pipeline commercial en concession — étapes, motifs de perte, indicateurs",
  "RGPD en concession — ce qu'il faut faire, ce qui est secondaire",
];

export default function RessourcesPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-[100px] px-4 bg-[#091525] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_-5%,rgba(50,175,164,0.14)_0%,rgba(37,87,161,0.22)_45%,transparent_70%)] pointer-events-none" />
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none">
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>
        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-service-green uppercase tracking-[1.2px] bg-service-green/15 inline-block px-3.5 pt-1.5 pb-1 rounded-full">
              Ressources
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Des contenus utiles pour le métier, pas des livres blancs de 80 pages.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-white/65 leading-[1.58] max-w-[660px]">
              On publie ce qu&apos;on apprend en travaillant avec des concessions. Méthodes, retours d&apos;expérience, exemples concrets. Lisible en 5 minutes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-2xl font-bold text-text-emphasis mb-2">Les articles du blog One Data</h2>
            <p className="text-sm text-text-faint">Blog</p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {articles.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-6 border border-border-light shadow-[var(--shadow-default)] hover:shadow-[var(--shadow-strong)] transition-shadow cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-accent-default bg-accent-subtle px-2.5 py-1 rounded-full">{a.tag}</span>
                  <span className="text-xs text-text-faint">{a.readTime} de lecture</span>
                </div>
                <h3 className="font-semibold text-text-emphasis leading-snug group-hover:text-accent-default transition-colors">{a.title}</h3>
                <div className="flex items-center gap-1 mt-4 text-xs text-accent-default font-semibold">
                  Lire <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text-emphasis mb-10">Des guides simples et concrets.</motion.h2>
          <motion.div variants={stagger} className="space-y-4">
            {guides.map((g) => (
              <motion.div
                key={g}
                variants={fadeUp}
                className="flex items-center justify-between bg-bg-base rounded-[14px] px-6 py-5 border border-border-light hover:border-border-strong transition-colors cursor-pointer group"
              >
                <span className="font-medium text-text-primary">{g}</span>
                <ArrowRight size={16} className="text-text-faint group-hover:text-accent-default transition-colors shrink-0" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text-emphasis mb-4">Bientôt : les retours des sites pilotes.</motion.h2>
          <motion.p variants={fadeUp} className="text-text-subtle leading-relaxed mb-8">
            Nos premières concessions partenaires utilisent One Data au quotidien depuis quelques semaines. Nous publierons ici leurs retours dans les prochains mois : volume de leads avant/après, taux de transformation, temps moyen de remise en état d&apos;un VO, gains de productivité côté vendeurs et accueil. Sans habillage marketing : ce qui marche, ce qui a pris du temps, ce qu&apos;ils auraient voulu savoir avant.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">Voir toutes les ressources</Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
