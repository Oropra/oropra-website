"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceTag from "@/components/ui/ServiceTag";

export default function AProposPage() {
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
              À propos
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              One Data est édité par Oropra.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-white/65 leading-[1.58] max-w-[660px]">
              Oropra construit des outils métier pour l&apos;automobile. Notre conviction est simple : les concessions n&apos;ont pas besoin d&apos;un CRM de plus, elles ont besoin d&apos;un outil que leurs équipes utilisent vraiment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold text-text-emphasis mb-5">Un outil né du terrain.</h2>
            <p className="text-text-subtle leading-relaxed mb-4">
              On a passé du temps en concession avant de coder une ligne. On a vu des vendeurs gérer leur portefeuille sur un carnet, des secrétaires faire la liaison entre 4 outils, des directions piloter à partir d&apos;exports Excel hebdomadaires.
            </p>
            <p className="text-text-subtle leading-relaxed mb-4">
              On a aussi vu des CRM auto installés à grand frais, jamais utilisés au bout de six mois. Toujours les mêmes raisons : trop rigide, formation expédiée en 2 jours, pas adapté au métier.
            </p>
            <p className="text-text-subtle leading-relaxed">
              On a construit One Data pour faire l&apos;inverse.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-white rounded-[14px] p-8 border border-border-light shadow-[var(--shadow-default)]">
            <p className="text-2xl font-bold text-text-emphasis mb-1">Oropra</p>
            <p className="text-text-faint text-sm mb-6">Conseil en architecture de la donnée, CRM no-code & intégration IA</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <a href="mailto:bienvenue@oropra.com" className="text-sm text-accent-default hover:underline">bienvenue@oropra.com</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-emphasis">Nos expertises</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { color: "border-t-service-blue", title: "DATA", points: ["Architecture centralisée", "Intégration données ERP client", "Fiabilisation", "Unification (RCU)"] },
              { color: "border-t-service-orange", title: "IA", points: ["Intégration des modèles dans les processus métiers", "Mémoire et Mesure", "Autonomiser les équipes"] },
              { color: "border-t-service-green", title: "CRM", points: ["Simplifier : No-code", "Connecter les outils", "Adapter au métier"] },
            ].map((exp) => (
              <motion.div key={exp.title} variants={fadeUp} className={`bg-bg-base rounded-[14px] p-7 border-t-2 ${exp.color}`}>
                <h3 className="text-xl font-bold text-text-emphasis mb-5">{exp.title}</h3>
                <ul className="space-y-2.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-border-strong mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-emphasis">Nos valeurs</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Métier d'abord.", desc: "Pas de fonctionnalité ajoutée parce qu'elle fait bien sur une démo. Chaque feature de One Data répond à un besoin terrain documenté." },
              { title: "Présents quand il faut.", desc: "Quand vous nous appelez, c'est quelqu'un qui connaît votre concession qui décroche." },
              { title: "Honnêtes sur ce qu'on fait.", desc: "Notre roadmap est publique. Si on ne fait pas quelque chose, on vous le dit. On ne fait pas semblant." },
            ].map((val) => (
              <motion.div key={val.title} variants={fadeUp} className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)]">
                <h3 className="text-xl font-bold text-text-emphasis mb-3">{val.title}</h3>
                <p className="text-text-subtle leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-default uppercase tracking-widest mb-3">Méthode CLAIRE</p>
            <h2 className="text-3xl font-bold text-text-emphasis mb-4">Concrètement, ça donne quoi ?</h2>
            <p className="text-text-subtle max-w-xl mx-auto">
              On commence par une démo sur vos données, pas une démo générique. Si on signe, on déploie en 3 à 4 semaines. On forme votre équipe pendant 14 jours, une heure par jour, par utilisateur. On ajuste l&apos;outil pendant le premier mois, sur la base de ce qu&apos;on observe. On reste joignables après. Vraiment.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { service: "diagnostic" as const, desc: "Cartographie des flux et processus existants." },
              { service: "design" as const, desc: "Définition des usages et outils adaptés." },
              { service: "deploiement" as const, desc: "Mise en place et intégration dans vos processus." },
              { service: "formation" as const, desc: "Montée en compétence et appropriation des outils." },
            ].map((step) => (
              <motion.div key={step.service} variants={fadeUp} className="bg-bg-base rounded-[14px] p-5 border border-border-light">
                <ServiceTag service={step.service} className="mb-3" />
                <p className="text-sm text-text-subtle">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="max-w-2xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text-emphasis mb-4">
            Un CRM qui n&apos;est pas utilisé, c&apos;est de l&apos;argent perdu.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-subtle leading-relaxed mb-8">
            C&apos;est pour ça que la formation 14 jours est incluse dans tous les plans, sans exception. C&apos;est pour ça que votre responsable commercial Oropra met l&apos;outil à votre main sous 24h, sans ticket. C&apos;est pour ça que notre support est composé des gens qui vous ont formés. On ne mesure pas notre succès au nombre de licences vendues. On le mesure au nombre d&apos;utilisateurs actifs hebdomadaires dans nos concessions clientes. Une question, une demande de démo, un projet : on répond dans la journée.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">Nous contacter</Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
