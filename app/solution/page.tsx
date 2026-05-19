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
];

export default function SolutionPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-[100px] px-4 bg-accent-default overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>
        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 pt-1.5 pb-1 rounded-full">
              La Solution
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              One Data, en une page.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
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
              Six modules. Tous inclus. Tous connectés entre eux.
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
                <h3 className="font-bold text-text-emphasis mb-2">{m.title}</h3>
                <p className="text-sm text-text-subtle leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* COMMUNICATION UNIFIÉE — ZOOM */}
      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
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
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
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
