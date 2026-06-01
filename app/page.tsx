"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { CheckCircle2, Zap, Users, Sliders, ArrowRight, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceTag from "@/components/ui/ServiceTag";



export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-[140px] pb-[100px] px-4 bg-accent-default overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        >
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>

        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 pt-1.5 pb-1 rounded-full"
            >
              CRM no-code pour concessions
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]"
            >
              Le CRM des concessions auto, fait pour être utilisé tous les jours.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]"
            >
              One Data réunit clients, prospects, stock VO/VN et toutes les communications (appels, WhatsApp, SMS, emails) dans un seul outil. Vos équipes sont formées une heure par jour pendant 14 jours. Au bout de deux semaines, tout le monde s&apos;en sert.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button variant="primary-dark" size="lg" href="mailto:bienvenue@oropra.com">
                Demander une démo
              </Button>
              <Button variant="secondary-dark" size="lg" href="/solution">
                Voir les fonctionnalités
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LES ESSENTIELS */}
      <SectionWrapper bg="base">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-4">
              Trois choses que les autres CRM auto ne font pas.
            </h2>
            <p className="text-text-subtle leading-relaxed">
              On vous montre ci-dessous les trois différences qui comptent vraiment au quotidien.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap size={22} className="text-service-blue" />,
                iconBg: "bg-service-blue/10",
                title: "Toutes les communications client, au même endroit.",
                desc: "Appel VOIP, message WhatsApp, SMS, email : tout est rattaché automatiquement à la fiche du client. Plus de captures d'écran, plus de \"j'ai pas eu l'info\".",
              },
              {
                icon: <Users size={22} className="text-service-green" />,
                iconBg: "bg-service-green/10",
                title: "Adaptez l'outil à votre métier sans ouvrir un ticket.",
                desc: "Vous demandez un nouveau champ, un écran adapté, un formulaire revu ? Votre responsable commercial Oropra s'en charge. 80 % des demandes sont en prod sous 24h. Pas de support à passer.",
              },
              {
                icon: <Sliders size={22} className="text-service-orange" />,
                iconBg: "bg-service-orange/10",
                title: "Une équipe formée en 14 jours.",
                desc: "Une heure par jour, sur leur poste, avec leurs vraies données. Pas une démo générique. À J+15, l'outil est utilisé.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)] hover:shadow-[var(--shadow-strong)] transition-shadow duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-text-emphasis mb-2">{card.title}</h3>
                <p className="text-sm text-text-subtle leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* CE QUE VOUS POUVEZ FAIRE */}
      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-8">
              Une concession, c&apos;est une centaine de choses à suivre. One Data en prend en charge l&apos;essentiel.
            </h2>
            <ul className="space-y-4">
              {[
                "Vos clients et toute leur histoire avec la concession (achats, services, contacts)",
                "Vos prospects et vos opportunités, du premier contact jusqu'au BDC signé",
                "Votre stock VO et VN, avec les délais constructeur et le suivi de marge",
                "Vos relances : automatisées, planifiées, ou déclenchées à la main",
                "Vos appels, WhatsApp, SMS, emails — rattachés à la bonne fiche, automatiquement",
                "Vos devis et bons de commande, harmonisés et traçables",
                "Vos tableaux de bord : marge VO, taux de transformation, stock dormant, activité vendeur",
                "Avec Delco : une IA qui surveille votre activité et vous dit quoi faire en priorité",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-default mt-0.5 shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="primary" size="md" href="/fonctionnalites">
                Voir toutes les fonctionnalités
                <ArrowRight size={15} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-3">
            {[
              { label: "Clients & Historique", color: "bg-service-blue" },
              { label: "Opportunités & Relances", color: "bg-service-green" },
              { label: "Stock VO / VN", color: "bg-service-orange" },
              { label: "Communications unifiées", color: "bg-accent-light" },
              { label: "Tableaux de bord", color: "bg-service-green" },
            ].map((mod, i) => (
              <div
                key={mod.label}
                className="bg-white border border-border-default rounded-xl px-5 py-4 flex items-center gap-3 relative overflow-hidden"
              >
                <div className={`w-1.5 h-full absolute left-0 top-0 ${mod.color}`} />
                <span className="font-medium text-text-primary text-sm ml-2">{mod.label}</span>
                <span className="text-xs text-text-faint ml-auto">Module {i + 1}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* MÉTHODE CLAIRE */}
      <SectionWrapper bg="base">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-accent-default uppercase tracking-widest mb-3">
              Méthode CLAIRE
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-4">
              Une approche en 4 étapes pour rendre votre entreprise autonome.
            </h2>
            <p className="text-text-subtle leading-relaxed">
              Ne pas seulement livrer un outil, mais rendre l&apos;entreprise riche de l&apos;exploitation de ses données.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                service: "setup" as const,
                title: "Set up",
                desc: "Création de votre base One-Data branchée sur vos DMS, et paramétrage de l'outil.",
                step: "01",
                topColor: "bg-service-blue",
              },
              {
                service: "design" as const,
                title: "Design",
                desc: "Adaptation en quelques heures de l'outil à vos incontournables métiers.",
                step: "02",
                topColor: "bg-service-green",
              },
              {
                service: "deploiement" as const,
                title: "Déploiement",
                desc: "Embarquement pendant 14 jours de toutes les équipes. Objectif : oublier l'outil devenu naturel.",
                step: "03",
                topColor: "bg-service-orange",
              },
              {
                service: "evolution" as const,
                title: "Evolution",
                desc: "La technologie permet de traiter vos demandes d'évolutions en quelques heures. Fini les services supports débordés.",
                step: "04",
                topColor: "bg-accent-light",
              },
            ].map((step) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-6 border border-border-light shadow-[var(--shadow-default)] relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${step.topColor}`} />
                <span className="absolute top-4 right-5 text-4xl font-bold text-border-default select-none">
                  {step.step}
                </span>
                <div className="mb-4">
                  <ServiceTag service={step.service} />
                </div>
                <h3 className="font-bold text-text-emphasis mb-2">{step.title}</h3>
                <p className="text-sm text-text-subtle leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* POURQUOI C'EST DIFFÉRENT */}
      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis">
              Ce qui change par rapport à ce que vous connaissez.
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Un seul outil, pas un patchwork.",
                desc: "Vos vendeurs n'ont plus à jongler entre le CRM, leur téléphone perso, leur boîte mail et un tableur partagé. Tout passe par One Data, et tout est tracé.",
                borderColor: "border-accent-default",
              },
              {
                title: "Adieu les tickets, adieu les délais.",
                desc: "Votre interlocuteur Oropra connaît votre concession, vos vendeurs, vos process. Il est formé à WeWeb (la techno de l'outil). Vous lui demandez un changement métier — pas un ticket technique. 80 % des demandes traitées en moins de 24h.",
                borderColor: "border-service-green",
              },
              {
                title: "Une formation qui ne se termine pas en démo PowerPoint.",
                desc: "Pendant 14 jours, on est sur place ou en visio avec chaque utilisateur, une heure par jour. Vendeurs, accueil, direction. Tout le monde.",
                borderColor: "border-service-orange",
              },
            ].map((col) => (
              <motion.div
                key={col.title}
                variants={fadeUp}
                className={`bg-bg-base rounded-[14px] p-8 border-[3px] ${col.borderColor}`}
              >
                <h3 className="text-xl font-bold text-text-emphasis mb-3">{col.title}</h3>
                <p className="text-text-subtle leading-relaxed">{col.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* SITES PILOTES */}
      <SectionWrapper bg="base">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-3">
              Déjà déployé sur les premiers sites pilotes.
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Plusieurs concessions équipées en France, dans des configurations variées (indépendantes, multi-marques, groupes).",
                author: "Sites pilotes en activité",
                company: "Premières concessions partenaires",
                topColor: "bg-service-blue",
              },
              {
                quote: "Vendeurs, accueil, responsables VO/VN, direction : One Data est utilisé par l'ensemble des équipes dans les sites pilotes.",
                author: "Tous les rôles concernés",
                company: "Du vendeur à la direction",
                topColor: "bg-service-green",
              },
              {
                quote: "Les retours des sites pilotes alimentent directement nos évolutions hebdomadaires. Pas de feedback dans un agenda à 6 mois.",
                author: "Une roadmap nourrie par le terrain",
                company: "Évolutions continues",
                topColor: "bg-service-orange",
              },
            ].map((t) => (
              <motion.div
                key={t.quote}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)] relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${t.topColor}`} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-service-orange text-service-orange" />
                  ))}
                </div>
                <p className="text-text-primary font-medium leading-relaxed mb-5">
                  &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-text-emphasis">{t.author}</p>
                  <p className="text-xs text-text-faint">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* ACCOMPAGNEMENT */}
      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <ServiceTag service="formation" className="mb-5" />
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-5">
              14 jours pour qu&apos;un CRM devienne un réflexe.
            </h2>
            <p className="text-text-subtle leading-relaxed mb-8">
              Un CRM qui n&apos;est pas utilisé ne sert à rien. C&apos;est pour ça qu&apos;on accompagne chaque utilisateur, une heure par jour, pendant 14 jours. On forme sur leurs vraies données, dans leurs vrais cas. Vendeurs, accueil, responsables, direction : chacun apprend ce dont il a besoin, à son rythme.
            </p>
            <Button variant="primary" size="md" href="mailto:bienvenue@oropra.com">
              Demander une démo
            </Button>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {[
              { label: "1 heure par jour, par utilisateur", icon: "📈" },
              { label: "Formation sur leurs vraies données, pas sur un environnement de démo", icon: "⏱" },
              { label: "Présentiel ou visio, selon ce qui marche pour vous", icon: "🤝" },
              { label: "À J+15, l'outil est utilisé. Pas testé. Utilisé.", icon: "✅" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-bg-base rounded-[14px] p-5 border border-border-light text-center"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="text-sm font-semibold text-text-primary">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* CTA FINAL */}
      <section className="py-24 px-4 bg-text-primary">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-5"
          >
            Vous voulez voir ce que ça donne sur vos données ?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 mb-8 leading-relaxed">
            On installe une démo en 48h avec vos marques, vos sites et un échantillon de vos données.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button
              variant="secondary"
              size="lg"
              href="mailto:bienvenue@oropra.com"
              className="bg-white text-text-primary border-white hover:bg-white/90"
            >
              Demander une démo
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
