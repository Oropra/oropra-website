"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceTag from "@/components/ui/ServiceTag";

export default function SupportPage() {
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
              Support
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Le support, c&apos;est nous. Pas un centre d&apos;appel à l&apos;autre bout du monde.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-white/65 leading-[1.58] max-w-[660px]">
              Vous parlez à des gens qui connaissent votre concession, votre paramétrage, vos vendeurs. Le support One Data, c&apos;est l&apos;équipe qui vous a formés au démarrage. Pas un ticket dans une file d&apos;attente.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <ServiceTag service="formation" className="mb-5" />
            <h2 className="text-3xl font-bold text-text-emphasis mb-5">La méthode 14 jours, en détail</h2>
            <p className="text-text-subtle leading-relaxed">
              14 jours ouvrés. Une heure par jour. Par utilisateur. Sur vos vraies données. C&apos;est notre engagement le plus important, et c&apos;est ce qui fait que One Data est utilisé là où d&apos;autres CRM finissent à la poubelle au bout de 3 mois.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {[
              { label: "Formateur dédié", sub: "pendant 14 jours" },
              { label: "1h par session", sub: "présentiel ou visio" },
              { label: "Adapté", sub: "par rôle" },
              { label: "Données réelles", sub: "pas un environnement démo" },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="bg-white rounded-[14px] p-5 border border-border-light text-center shadow-[var(--shadow-default)]">
                <p className="font-bold text-text-emphasis">{item.label}</p>
                <p className="text-xs text-text-faint mt-1">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-emphasis mb-4">Une fois la formation finie, on ne vous lâche pas.</h2>
            <p className="text-text-subtle leading-relaxed">
              Le mois suivant la fin de la formation, un point hebdomadaire avec votre référent One Data. Ensuite, support par chat, email et téléphone (selon votre plan), avec des temps de réponse engagés.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "💬", title: "Performance", desc: "Chat et email — réponse en moins de 4h ouvrées." },
              { icon: "🤝", title: "Connect", desc: "Chat et email < 2h ouvrées. Téléphone 9h–18h." },
              { icon: "👁", title: "Intelligence", desc: "Chat et email < 1h ouvrée. Téléphone 8h–20h. 7j/7 sur incidents critiques." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-bg-base rounded-[14px] p-6 border border-border-light text-center">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-text-emphasis mb-2">{item.title}</h3>
                <p className="text-sm text-text-subtle">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="max-w-2xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text-emphasis mb-3">Centre d&apos;aide : tout est documenté.</h2>
          </motion.div>
          <motion.div variants={stagger} className="space-y-3">
            {[
              { icon: "🎬", label: "Vidéos d'usage courtes (1 à 3 minutes), par fonctionnalité" },
              { icon: "📋", label: "Guides étape par étape, avec captures" },
              { icon: "📚", label: "Articles de fond pour aller plus loin (paramétrage avancé, intégrations)" },
              { icon: "🔔", label: "Notes de version : ce qui change à chaque mise à jour" },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="bg-white rounded-xl px-5 py-4 border border-border-light flex items-center gap-4">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-text-primary">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 text-center">
            <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">Contacter le support</Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
