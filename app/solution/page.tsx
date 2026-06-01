"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceTag from "@/components/ui/ServiceTag";

const modules = [
  { title: "Référentiel client", desc: "Une fiche par client, partagée entre tous les services. Achats, contacts, véhicules, passages atelier, opportunités en cours : tout est là.", icon: "👤", topColor: "bg-service-blue" },
  { title: "Prospects & opportunités", desc: "Du premier lead (site web, La Centrale, AutoScout24, appel entrant) jusqu'au BDC signé. Avec les étapes, les relances et les motifs de perte.", icon: "🎯", topColor: "bg-service-green" },
  { title: "Stock VO & VN", desc: "Vue centralisée par site, par marque, par modèle. Délais constructeur pour le VN, âge du stock et marge pour le VO.", icon: "🚗", topColor: "bg-service-orange" },
  { title: "Communications unifiées", desc: "Appel VOIP, WhatsApp, SMS, email. Tous les échanges sont rattachés à la fiche client, automatiquement. Plus de \"il m'a appelé sur mon perso, je sais plus quand\".", icon: "💬", topColor: "bg-accent-light" },
  { title: "Devis & BDC", desc: "Génération depuis la fiche opportunité, modèles personnalisables par marque, signature électronique, suivi du cycle de vie du document.", icon: "📄", topColor: "bg-service-green" },
  { title: "Tableaux de bord", desc: "Marge VO, taux de transformation par vendeur, stock dormant à plus de 60 jours, leads non traités à J+1. Pour la direction comme pour les chefs des ventes.", icon: "📊", topColor: "bg-service-blue" },
  { title: "Delco, le copilote IA", desc: "Un agent IA qui surveille votre activité, vous suggère vos prochaines actions et répond à vos questions en langage naturel. Adapté à votre rôle. Disponible avec le plan Intelligence.", icon: "🤖", topColor: "bg-[#2a5ea9]", badge: "Plan Intelligence" },
];

export default function SolutionPage() {
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
              La Solution
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              One Data, en une page.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-white/65 leading-[1.58] max-w-[660px]">
              One Data est un CRM construit pour les concessions automobiles. Il couvre le client (référentiel et historique), le commerce (prospects, opportunités, devis, BDC), le stock (VO et VN), la communication (VOIP, WhatsApp, SMS, email) et le pilotage (tableaux de bord). Il s&apos;adapte à votre organisation, pas l&apos;inverse.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary-dark" size="lg" href="mailto:bienvenue@oropra.com">
                Demander une démo
              </Button>
              <Button variant="secondary-dark" size="lg" href="/fonctionnalites">
                Voir les fonctionnalités <ArrowRight size={16} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-text-emphasis mb-3">
              Sept modules. Connectés entre eux. Couvrant tout le métier.
            </h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)] hover:shadow-[var(--shadow-strong)] transition-shadow relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${m.topColor}`} />
                <span className="text-3xl mb-4 block">{m.icon}</span>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="font-bold text-text-emphasis">{m.title}</h3>
                  {"badge" in m && m.badge && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[rgba(42,94,169,0.1)] text-[#2a5ea9]">{m.badge}</span>
                  )}
                </div>
                <p className="text-sm text-text-subtle leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* COMMUNICATION UNIFIÉE — ZOOM */}
      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold text-text-emphasis mb-6">
              La fonctionnalité que personne d&apos;autre ne fait correctement.
            </h2>
            <p className="text-text-subtle leading-relaxed mb-4">
              Dans 90 % des concessions, les vendeurs utilisent leur téléphone personnel pour appeler les clients, leur compte WhatsApp perso pour échanger des photos, leur boîte mail perso pour envoyer des devis. Quand un vendeur part, l&apos;historique part avec lui. Quand un client rappelle, personne ne sait ce qui a été dit.
            </p>
            <p className="text-text-subtle leading-relaxed mb-6">One Data centralise tout :</p>
            <ul className="space-y-3 mb-6">
              {[
                "VOIP intégrée : les appels sortants et entrants sont enregistrés (si vous le souhaitez) et rattachés à la fiche client.",
                "WhatsApp Business : un seul numéro pour la concession, vu par tous les vendeurs autorisés. Les messages arrivent dans la fiche client. Les photos de reprise envoyées par le client sont stockées avec l'opportunité.",
                "SMS : campagnes de relance et messages individuels, depuis l'outil.",
                "Email : envoi depuis la fiche, suivi des ouvertures, modèles partagés.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-default mt-0.5 shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-text-emphasis">
              Quand un vendeur part, l&apos;historique reste. Quand un client rappelle, la fiche s&apos;ouvre.
            </p>
          </motion.div>

          {/* B — Comm flow diagram */}
          <motion.div variants={fadeUp} className="flex items-center justify-center" aria-hidden="true">
            <svg viewBox="0 0 320 280" className="w-full max-w-[320px]" role="img" aria-label="Schéma de convergence des canaux de communication vers la fiche client">
              <defs>
                <style>{`
                  .comm-line { stroke-dasharray: 5 6; animation: dash-flow 2s linear infinite; }
                  .comm-line-2 { stroke-dasharray: 5 6; animation: dash-flow 2.5s linear infinite; }
                  .comm-line-3 { stroke-dasharray: 5 6; animation: dash-flow 1.8s linear infinite; }
                  .comm-line-4 { stroke-dasharray: 5 6; animation: dash-flow 2.3s linear infinite; }
                `}</style>
                <linearGradient id="ficheGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2557a1" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#2557a1" stopOpacity="0.04" />
                </linearGradient>
              </defs>

              {/* channel nodes (left side) */}
              {[
                { y: 44,  label: "VOIP", icon: "📞", color: "#2557a1", lineClass: "comm-line" },
                { y: 108, label: "WhatsApp", icon: "💬", color: "#25d366", lineClass: "comm-line-2" },
                { y: 172, label: "SMS", icon: "📱", color: "#f59e0b", lineClass: "comm-line-3" },
                { y: 236, label: "Email", icon: "✉️", color: "#5882c4", lineClass: "comm-line-4" },
              ].map((ch) => (
                <g key={ch.label}>
                  <rect x="8" y={ch.y - 22} width="88" height="44" rx="10" fill="white" stroke={ch.color} strokeWidth="1.5" strokeOpacity="0.5" />
                  <text x="52" y={ch.y - 4} textAnchor="middle" fontSize="14">{ch.icon}</text>
                  <text x="52" y={ch.y + 12} textAnchor="middle" fill="#1c3a5c" fontSize="10" fontWeight="600">{ch.label}</text>
                  {/* converging line to midpoint */}
                  <line x1="96" y1={ch.y} x2="188" y2="140" className={ch.lineClass} stroke={ch.color} strokeWidth="1.5" strokeOpacity="0.5" />
                </g>
              ))}

              {/* Fiche client card (right) */}
              <rect x="188" y="88" width="120" height="104" rx="12" fill="url(#ficheGrad)" stroke="#2557a1" strokeWidth="2" />
              <rect x="188" y="88" width="120" height="28" rx="12" fill="#2557a1" />
              <rect x="188" y="104" width="120" height="12" rx="0" fill="#2557a1" />
              <text x="248" y="107" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">Fiche client</text>

              {/* card content rows */}
              <rect x="202" y="128" width="92" height="7" rx="3.5" fill="#dfe6f0" />
              <rect x="202" y="141" width="68" height="7" rx="3.5" fill="#dfe6f0" />
              <rect x="202" y="154" width="80" height="7" rx="3.5" fill="#dfe6f0" />
              <rect x="202" y="167" width="54" height="7" rx="3.5" fill="#eef3fc" />
            </svg>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* DELCO ZOOM */}
      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <h2 className="text-3xl font-bold text-text-emphasis">
                Et au-dessus de tout ça, une IA qui vous fait gagner les heures de tableur.
              </h2>
            </div>
            <p className="text-sm text-text-faint italic mb-4">Disponible avec le plan Intelligence.</p>
            <p className="text-text-subtle leading-relaxed mb-6">
              Delco est un agent IA branché sur l&apos;ensemble de votre activité One Data. Il surveille, il analyse, il vous remonte ce qui mérite votre attention. Sa particularité : il s&apos;adapte à votre rôle. Le vendeur, le chef des ventes et le directeur ne voient pas la même chose. Même agent, trois intelligences.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { label: "Surveillance en continu", body: "signaux actionnables remontés par rôle (leads sans action, propales qui dorment, sites qui décrochent)" },
                { label: "Recherche conversationnelle", body: "\"Combien de VO de plus de 180 jours ?\" — réponse immédiate" },
                { label: "Pilotage à la demande", body: "brief du matin, synthèse pipeline, comparaison de sites" },
                { label: "Exports PDF / Excel", body: "tout résultat de Delco s'exporte en un clic, prêt à partager" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2a5ea9] shrink-0 mt-1.5" />
                  <span className="text-text-secondary"><strong>{item.label}</strong> : {item.body}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-text-emphasis">
              Une heure de comité de direction préparée en 30 secondes.
            </p>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <ServiceTag service="deploiement" className="mb-5" />
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-5">
              Vous n&apos;allez plus attendre 6 mois pour un champ supplémentaire. Ni 6 jours.
            </h2>
            <p className="text-text-subtle leading-relaxed mb-4">
              Vous ne modifierez pas l&apos;outil vous-même. Et c&apos;est tant mieux : vous avez mieux à faire que de configurer un CRM. C&apos;est votre responsable commercial Oropra qui s&apos;en charge — et il est formé à WeWeb, la techno qui propulse One Data.
            </p>
            <p className="text-text-subtle leading-relaxed mb-8">
              Vous lui exposez votre besoin en langage métier (&quot;on aimerait un champ pour suivre les reprises avec malus écologique&quot;). Il traduit, il configure, et c&apos;est en prod. 80 % des demandes en moins de 24 heures. Pas de ticket à ouvrir. Pas de support de niveau 1 / niveau 2 / niveau 3. Pas de devis pour un champ.
            </p>
            <ul className="space-y-3">
              {[
                "80 % des demandes en prod sous 24 heures, ouvré",
                "Un seul interlocuteur : votre responsable commercial Oropra, qui connaît votre concession",
                "Une demande en langage métier, pas un cahier des charges technique",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-accent-default shrink-0" />
                  <span className="text-text-secondary">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-bg-base rounded-[14px] p-8 border border-border-default">
            <p className="text-sm text-text-faint uppercase tracking-widest mb-5 font-semibold">No-code</p>
            <div className="space-y-3">
              {["Champs personnalisables", "Formulaires adaptables", "Écrans modifiables", "Sans développeur"].map((f) => (
                <div key={f} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-border-light">
                  <div className="w-2 h-2 rounded-full bg-service-green shrink-0" />
                  <span className="text-sm text-text-primary">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <ServiceTag service="formation" className="mb-5" />
            <h2 className="text-3xl font-bold text-text-emphasis mb-4">
              De la signature à l&apos;utilisation quotidienne : 3 à 4 semaines.
            </h2>
            <p className="text-text-subtle leading-relaxed">
              <strong>Semaine 1</strong> : reprise de vos données existantes (clients, stock, opportunités en cours), paramétrage de vos marques, de vos sites et de vos rôles.<br />
              <strong>Semaines 2 et 3</strong> : formation 14 jours, une heure par jour, par utilisateur. Sur vos vraies données.<br />
              <strong>Semaine 4</strong> : ajustements, support rapproché, démarrage en autonomie.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Dès le premier jour", desc: "On commence l'accompagnement dès la mise en place." },
              { title: "1h par jour", desc: "Un rythme soutenable pour chaque utilisateur." },
              { title: "Toute l'équipe", desc: "Du directeur jusqu'à l'accueil, personne n'est laissé de côté." },
              { title: "Adoption garantie", desc: "L'outil devient naturellement un réflexe." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-white rounded-[14px] p-6 border border-border-light">
                <h3 className="font-bold text-text-emphasis mb-2">{item.title}</h3>
                <p className="text-sm text-text-subtle">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-text-emphasis mb-5">
            Un CRM qui n&apos;est pas utilisé, c&apos;est de l&apos;argent perdu.
          </h2>
          <p className="text-text-subtle leading-relaxed mb-8">
            Envie de voir One Data tourner sur vos données ? C&apos;est pour ça que la formation 14 jours est incluse dans tous les plans, sans exception. C&apos;est pour ça que votre responsable commercial Oropra adapte l&apos;outil à vos besoins en moins de 24 heures, sans ticket. On ne mesure pas notre succès au nombre de licences vendues. On le mesure au nombre d&apos;utilisateurs actifs hebdomadaires.
          </p>
          <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">
            Demander une démo
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
