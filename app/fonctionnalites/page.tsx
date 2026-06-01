"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureVideo from "@/components/ui/FeatureVideo";

const features = [
  {
    num: "01", label: "Référentiel Client Unique",
    title: "Une fiche client, partagée par tous les services.",
    desc: "La fiche regroupe tout ce que vous savez du client : coordonnées, véhicules détenus, achats passés (VO et VN), passages atelier, opportunités en cours et perdues, communications (appels, messages, mails), documents (devis, BDC, factures), notes des vendeurs.",
    points: [
      "Un client rappelle. Sa fiche s'ouvre toute seule grâce à la VOIP. Le vendeur voit son dernier passage et son opportunité en cours.",
      "Le service après-vente voit qu'une opportunité commerciale est ouverte → il prévient le vendeur.",
      "Le marketing crée une segmentation \"clients ayant acheté un VN il y a 36 mois\".",
    ],
    featureVideo: "/videos/features/01-referentiel-client.mp4",
    poster: "/videos/features/posters/01-referentiel-client.jpg",
  },
  {
    num: "02", label: "Opportunités",
    title: "Du lead entrant jusqu'au BDC signé.",
    desc: "Chaque prospect entre dans le pipe avec sa source (site, portail, salon, recommandation), son véhicule cible, son budget, son besoin de reprise. À chaque étape, le vendeur sait ce qui doit être fait : appel, essai, devis, relance.",
    points: [
      "Pipeline visuel par vendeur, par site, par marque",
      "Rapport vendeur (RPV) : la trace de chaque interaction commerciale",
      "Relances automatiques selon l'étape et l'ancienneté",
      "Motifs de perte structurés pour analyser ce qui ne se transforme pas",
    ],
    featureVideo: "/videos/features/02-opportunites.mp4",
    poster: "/videos/features/posters/02-opportunites.jpg",
  },
  {
    num: "03", label: "Stock",
    title: "Votre stock, à jour, exploitable.",
    desc: "Pour le VN : commandes en cours, dates de livraison constructeur, véhicules disponibles. Pour le VO : âge du stock, marge, frais de remise en état, prix d'affichage et historique des baisses. Alertes stock dormant à 30, 60 ou 90 jours.",
    points: ["Vue stock centralisée", "Fiches véhicules homogènes", "Mise à jour en temps réel"],
    featureVideo: "/videos/features/03-stock.mp4",
    poster: "/videos/features/posters/03-stock.jpg",
  },
  {
    num: "04", label: "Communications",
    title: "VOIP, WhatsApp, SMS, email. Sur la fiche client. Sans copier-coller.",
    desc: "Vos vendeurs n'ont plus besoin de leur téléphone personnel pour le boulot. Tout passe par One Data, tout est rattaché à la bonne fiche, tout reste dans la concession quand un vendeur part.",
    points: ["Appels et SMS centralisés", "WhatsApp et emails intégrés", "Historique de chaque échange"],
    featureVideo: "/videos/features/04-communications.mp4",
    poster: "/videos/features/posters/04-communications.jpg",
  },
  {
    num: "05", label: "Devis & BDC",
    title: "Des documents propres, du même format dans toute la concession.",
    desc: "Le devis est généré depuis l'opportunité. Le BDC suit le même modèle, validé par votre direction commerciale. Signature électronique en option. Suivi du cycle de vie : envoyé / vu / accepté / signé / facturé.",
    points: ["Modèles standardisés", "Suivi du statut en temps réel", "Partage facilité"],
    featureVideo: "/videos/features/05-devis-bdc.mp4",
    poster: "/videos/features/posters/05-devis-bdc.jpg",
  },
  {
    num: "06", label: "Tableaux de bord",
    title: "Les chiffres qu'on regarde tous les matins.",
    desc: "Pas un tableau de bord générique avec 200 indicateurs. Quelques chiffres clés, par rôle, mis à jour en temps réel : marge VO et VN, taux de transformation par vendeur, stock dormant, leads non traités, activité commerciale.",
    points: ["Indicateurs clés visibles", "Vue direction et vue équipe", "Données fiables et à jour"],
    featureVideo: "/videos/features/06-dashboards.mp4",
    poster: "/videos/features/posters/06-dashboards.jpg",
  },
  {
    num: "07", label: "Formation",
    title: "14 jours pour passer de \"on a un nouveau CRM\" à \"on l'utilise tous\".",
    desc: "Une heure par jour, par utilisateur, pendant 14 jours ouvrés. Sur vos vraies données. Avec un formateur One Data dédié, en présentiel ou en visio. Adapté au rôle de chaque personne (vendeur, accueil, chef des ventes, direction). Compris dans tous les plans.",
    points: ["1h par jour par utilisateur", "Adaptée à chaque rôle", "Adoption sereine et durable"],
    featureVideo: "/videos/features/07-formation.mp4",
    poster: "/videos/features/posters/07-formation.jpg",
  },
  {
    num: "08", label: "Delco — plan Intelligence",
    title: "Delco — le copilote IA qui surveille votre activité pour vous.",
    desc: "Un agent IA qui passe votre périmètre en revue en continu et vous dit quoi faire en priorité. Il s'adapte à votre rôle : un vendeur, un chef des ventes et un directeur ne voient pas la même chose. Même agent, trois intelligences.",
    points: [],
    pillars: [
      {
        title: "Le copilote qui surveille pour vous",
        body: "Delco scanne votre activité en continu et vous remonte des signaux actionnables, en langage naturel. Pour un vendeur : \"Tu as 17 leads sans action depuis 2 semaines\". Pour un chef des ventes : \"Sandra convertit à 75 %, l'équipe à 94 %\". Pour un directeur : \"3 155 véhicules dorment, 98,6 M€ immobilisés\".",
      },
      {
        title: "Posez vos questions en langage naturel",
        body: "Plus de filtres compliqués, plus de tableaux croisés. Posez vos questions comme vous les pensez : \"Combien de VO de plus de 180 jours en stock ?\", \"Quels véhicules pourraient correspondre à mes clients en cours d'opportunité ?\"",
      },
      {
        title: "Le pilotage en un mot",
        body: "Le brief du matin oral. La synthèse pipeline en une phrase. La comparaison entre vos sites. La détection des signaux faibles (un site qui ralentit, un pipeline qui stagne, une propale qui dort). Ce qui demandait des heures de tableur, en quelques secondes.",
      },
      {
        title: "Exports pro instantanés",
        body: "Tout ce que Delco vous répond s'exporte en PDF stylé ou Excel d'un clic. Pour un comité de direction, pour un mail à votre équipe, pour vous-même.",
      },
    ],
    transparency: [
      "Delco ne lit pas le contenu de vos conversations pour en faire une analyse de sentiment. Il travaille sur des signaux métier chiffrés, pas sur l'interprétation des mots.",
      "Delco ne rédige pas vos mails ou messages à votre place. C'est un copilote de pilotage, pas un assistant rédactionnel.",
      "Delco ne prédit pas combien acheter de tel modèle de VO le mois prochain. Il vous dit ce qui dort, pas ce qu'il faut acheter.",
    ],
  },
];

export default function FonctionnalitesPage() {
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
              Fonctionnalités
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Le détail de ce que One Data fait, fonctionnalité par fonctionnalité.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-white/65 leading-[1.58] max-w-[660px]">
              Pas de bullet point marketing. Pour chaque fonctionnalité, on vous dit ce que ça fait concrètement, à quel moment du quotidien ça sert, et qui s&apos;en sert.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-6">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              variants={fadeUp}
              className="flex flex-col gap-10 bg-white rounded-[14px] p-8 border border-border-light shadow-[var(--shadow-default)]"
            >
              {"pillars" in f ? (
                <>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl font-bold text-border-strong">{f.num}</span>
                    <span className="text-xs font-semibold text-text-faint uppercase tracking-wider">{f.label}</span>
                    <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[rgba(42,94,169,0.1)] text-[#2a5ea9]">Plan Intelligence</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-text-emphasis mb-3">{f.title}</h2>
                      <p className="text-text-subtle leading-relaxed">{f.desc}</p>
                    </div>
                    <div className="space-y-4">
                      {(f.pillars ?? []).map((p) => (
                        <div key={p.title} className="bg-bg-base rounded-xl px-4 py-4 border border-border-light">
                          <p className="font-semibold text-text-emphasis mb-1 text-sm">{p.title}</p>
                          <p className="text-sm text-text-subtle leading-relaxed">{p.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-bg-base rounded-xl px-5 py-4 border border-border-light">
                    <p className="text-xs font-semibold text-text-faint uppercase tracking-wider mb-3">Ce que Delco ne fait pas</p>
                    <ul className="space-y-2">
                      {(f.transparency ?? []).map((t) => (
                        <li key={t} className="flex items-start gap-2.5 text-sm text-text-subtle">
                          <span className="w-1.5 h-1.5 rounded-full bg-border-strong shrink-0 mt-1.5" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl font-bold text-border-strong">{f.num}</span>
                        <span className="text-xs font-semibold text-text-faint uppercase tracking-wider">{f.label}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-text-emphasis mb-3">{f.title}</h2>
                      <p className="text-text-subtle leading-relaxed">{f.desc}</p>
                    </div>
                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <FeatureVideo
                        src={f.featureVideo}
                        poster={f.poster}
                        className="w-full rounded-xl border border-border-light shadow-sm"
                      />
                    </div>
                  </div>
                  {f.points.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {f.points.map((p) => (
                        <div key={p} className="flex items-center gap-3 bg-bg-base rounded-xl px-4 py-3 border border-border-light">
                          <div className="w-2 h-2 rounded-full bg-accent-default shrink-0" />
                          <span className="text-sm text-text-primary">{p}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <section className="py-24 px-4 bg-text-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Prêt à simplifier votre quotidien ?</h2>
          <Button variant="secondary" size="lg" href="mailto:bienvenue@oropra.com" className="bg-white text-text-primary border-white hover:bg-white/90">
            Demander une démo
          </Button>
        </div>
      </section>
    </>
  );
}
