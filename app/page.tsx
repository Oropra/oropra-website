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
      <section className="relative pt-[140px] pb-[100px] px-4 bg-[#091525] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_-5%,rgba(50,175,164,0.14)_0%,rgba(37,87,161,0.22)_45%,transparent_70%)] pointer-events-none" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none"
        >
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>

        {/* D — floating module pills */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
          {[
            { label: "Fiche client", x: "6%", y: "22%", delay: "0s", rot: "-3deg", op: "0.45" },
            { label: "Stock VO/VN", x: "78%", y: "18%", delay: "1.2s", rot: "2deg", op: "0.40" },
            { label: "Appels VOIP", x: "4%", y: "62%", delay: "2.1s", rot: "-2deg", op: "0.38" },
            { label: "WhatsApp", x: "80%", y: "58%", delay: "0.7s", rot: "3deg", op: "0.42" },
            { label: "Opportunités", x: "10%", y: "82%", delay: "1.6s", rot: "-1deg", op: "0.35" },
            { label: "Delco IA", x: "75%", y: "78%", delay: "0.4s", rot: "2deg", op: "0.45" },
          ].map((pill) => (
            <span
              key={pill.label}
              className="absolute text-[11px] font-semibold text-white/80 border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full"
              style={{
                left: pill.x,
                top: pill.y,
                animationName: "float-gentle",
                animationDuration: "4s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: pill.delay,
                ["--float-rot" as string]: pill.rot,
                ["--float-op" as string]: pill.op,
              }}
            >
              {pill.label}
            </span>
          ))}
        </div>

        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold text-service-green uppercase tracking-[1.2px] bg-service-green/15 inline-block px-3.5 pt-1.5 pb-1 rounded-full"
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
              className="text-[17px] text-white/65 leading-[1.58] max-w-[660px]"
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

      {/* STATS STRIP */}
      <section className="bg-[#060e18] border-b border-white/5 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { value: "80 %", label: "des demandes traitées en moins de 24h" },
            { value: "14 jours", label: "pour former toute l'équipe" },
            { value: "J+15", label: "l'outil est utilisé, pas juste installé" },
            { value: "7", label: "modules, tous inclus, tous connectés" },
          ].map((stat) => (
            <div key={stat.value} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-white/45 leading-snug max-w-[140px]">{stat.label}</span>
            </div>
          ))}
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

          <motion.div variants={fadeUp} className="flex items-center justify-center" aria-hidden="true">
            <svg viewBox="0 0 420 330" className="w-full max-w-[420px]" role="img" aria-label="Constellation des 7 modules One Data">
              <defs>
                <style>{`
                  .dash-line { stroke-dasharray: 5 7; animation: dash-flow 2.4s linear infinite; }
                  .dash-line-slow { stroke-dasharray: 5 7; animation: dash-flow 3.2s linear infinite; }
                  .dash-line-med { stroke-dasharray: 5 7; animation: dash-flow 2.8s linear infinite; }
                  .hub-ring { animation: pulse-ring 2.4s ease-out infinite; }
                `}</style>
              </defs>

              {/* connecting lines */}
              <line x1="210" y1="165" x2="325" y2="165" className="dash-line" stroke="#2557a1" strokeWidth="1.5" strokeOpacity="0.35" />
              <line x1="210" y1="165" x2="267" y2="258" className="dash-line-med" stroke="#32afa4" strokeWidth="1.5" strokeOpacity="0.35" />
              <line x1="210" y1="165" x2="153" y2="258" className="dash-line-slow" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" />
              <line x1="210" y1="165" x2="95" y2="165" className="dash-line" stroke="#5882c4" strokeWidth="1.5" strokeOpacity="0.35" />
              <line x1="210" y1="165" x2="153" y2="72" className="dash-line-med" stroke="#2557a1" strokeWidth="1.5" strokeOpacity="0.35" />
              <line x1="210" y1="165" x2="267" y2="72" className="dash-line-slow" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.35" />

              {/* hub pulse ring */}
              <circle cx="210" cy="165" r="28" fill="none" stroke="#2557a1" strokeWidth="1" strokeOpacity="0.25" className="hub-ring" />

              {/* center hub — Référentiel client */}
              <circle cx="210" cy="165" r="38" fill="#2557a1" fillOpacity="0.12" stroke="#2557a1" strokeWidth="1.5" />
              <circle cx="210" cy="165" r="26" fill="#2557a1" />
              <text x="210" y="162" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" dy="0">Référentiel</text>
              <text x="210" y="175" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">client</text>

              {/* satellite 1 — right — Opportunités */}
              <circle cx="325" cy="165" r="30" fill="#32afa4" fillOpacity="0.12" stroke="#32afa4" strokeWidth="1.5" />
              <circle cx="325" cy="165" r="20" fill="#32afa4" />
              <text x="325" y="200" textAnchor="middle" fill="#1c3a5c" fontSize="9.5" fontWeight="600">Opportunités</text>
              <text x="325" y="211" textAnchor="middle" fill="#4a6e90" fontSize="9" fontWeight="500">&amp; Relances</text>
              <text x="325" y="165" textAnchor="middle" fill="white" fontSize="14" dy="4">🎯</text>

              {/* satellite 2 — bottom-right — Communications */}
              <circle cx="267" cy="258" r="30" fill="#32afa4" fillOpacity="0.10" stroke="#32afa4" strokeWidth="1.5" />
              <circle cx="267" cy="258" r="20" fill="#32afa4" fillOpacity="0.85" />
              <text x="267" y="293" textAnchor="middle" fill="#1c3a5c" fontSize="9.5" fontWeight="600">Communi-</text>
              <text x="267" y="304" textAnchor="middle" fill="#4a6e90" fontSize="9" fontWeight="500">cations</text>
              <text x="267" y="258" textAnchor="middle" fill="white" fontSize="14" dy="4">💬</text>

              {/* satellite 3 — bottom-left — Stock */}
              <circle cx="153" cy="258" r="30" fill="#f59e0b" fillOpacity="0.10" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="153" cy="258" r="20" fill="#f59e0b" />
              <text x="153" y="293" textAnchor="middle" fill="#1c3a5c" fontSize="9.5" fontWeight="600">Stock</text>
              <text x="153" y="304" textAnchor="middle" fill="#4a6e90" fontSize="9" fontWeight="500">VO / VN</text>
              <text x="153" y="258" textAnchor="middle" fill="white" fontSize="14" dy="4">🚗</text>

              {/* satellite 4 — left — Tableaux de bord */}
              <circle cx="95" cy="165" r="30" fill="#5882c4" fillOpacity="0.10" stroke="#5882c4" strokeWidth="1.5" />
              <circle cx="95" cy="165" r="20" fill="#5882c4" />
              <text x="95" y="200" textAnchor="middle" fill="#1c3a5c" fontSize="9.5" fontWeight="600">Tableaux</text>
              <text x="95" y="211" textAnchor="middle" fill="#4a6e90" fontSize="9" fontWeight="500">de bord</text>
              <text x="95" y="165" textAnchor="middle" fill="white" fontSize="14" dy="4">📊</text>

              {/* satellite 5 — top-left — Devis & BDC */}
              <circle cx="153" cy="72" r="30" fill="#2557a1" fillOpacity="0.10" stroke="#2557a1" strokeWidth="1.5" />
              <circle cx="153" cy="72" r="20" fill="#2557a1" fillOpacity="0.8" />
              <text x="153" y="37" textAnchor="middle" fill="#1c3a5c" fontSize="9.5" fontWeight="600">Devis</text>
              <text x="153" y="48" textAnchor="middle" fill="#4a6e90" fontSize="9" fontWeight="500">&amp; BDC</text>
              <text x="153" y="72" textAnchor="middle" fill="white" fontSize="14" dy="4">📄</text>

              {/* satellite 6 — top-right — Delco IA */}
              <circle cx="267" cy="72" r="30" fill="#8b5cf6" fillOpacity="0.12" stroke="#8b5cf6" strokeWidth="1.5" />
              <circle cx="267" cy="72" r="20" fill="#8b5cf6" />
              <text x="267" y="37" textAnchor="middle" fill="#1c3a5c" fontSize="9.5" fontWeight="600">Delco IA</text>
              <text x="267" y="48" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontWeight="600">Intelligence</text>
              <text x="267" y="72" textAnchor="middle" fill="white" fontSize="14" dy="4">🤖</text>
            </svg>
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

          <motion.div variants={stagger} className="relative pl-8">
            <div className="absolute left-3 top-4 bottom-4 w-px bg-border-default" aria-hidden="true" />
            {[
              { step: "S1", label: "Semaine 1", desc: "Prise en main de l'outil sur vos données réelles. Fiche client, stock, premières opportunités.", color: "bg-service-blue", textColor: "text-service-blue" },
              { step: "S2-3", label: "Semaines 2–3", desc: "Routines quotidiennes : relances, RPV, communications centralisées. Chacun dans son rôle.", color: "bg-service-green", textColor: "text-service-green" },
              { step: "S4", label: "Semaine 4", desc: "Tableaux de bord, reporting direction. Point d'ajustement avec votre référent Oropra.", color: "bg-service-orange", textColor: "text-service-orange" },
              { step: "J+15", label: "J+15 — L'outil est naturel", desc: "Pas testé. Pas en cours d'adoption. Utilisé.", color: "bg-accent-default", textColor: "text-accent-default", highlight: true },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="relative mb-6 last:mb-0">
                <div className={`absolute -left-8 w-6 h-6 rounded-full ${item.color} flex items-center justify-center shrink-0 ring-4 ring-bg-white`}>
                  <span className="text-[9px] font-bold text-white leading-none">{item.step.length > 2 ? "✓" : item.step}</span>
                </div>
                <div className={`rounded-[12px] px-5 py-4 border ${item.highlight ? "border-accent-border bg-accent-subtle" : "border-border-light bg-bg-base"}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${item.textColor}`}>{item.label}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
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
