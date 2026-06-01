"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const roles = [
  {
    icon: "🌟", title: "Pour la Direction",
    desc: "Vous voulez savoir comment tournent vos sites sans appeler le chef des ventes tous les jours. One Data vous donne la vue d'ensemble : leads entrants, transformation, marge, activité des vendeurs, stock à risque.",
    points: [
      "Tableaux de bord groupe et par site, mis à jour en temps réel",
      "Comparaison entre sites, entre marques, entre vendeurs",
      "Suivi de la performance commerciale sans relancer personne pour avoir les chiffres",
      "Données fiables (parce que tout le monde utilise le même outil)",
      "Avec le plan Intelligence : brief du matin par Delco, détection de signaux faibles inter-sites, comparaison réseau en une question",
    ],
  },
  {
    icon: "🚗", title: "Pour les Responsables VO/VN",
    desc: "Votre stock est votre fonds de roulement. Un VO qui dort 90 jours, c'est de l'argent qui dort. One Data vous donne la vision exacte de ce que vous avez, à quel prix, depuis combien de temps, et avec quelle marge.",
    points: [
      "Vue stock unifiée par site, par marque, par modèle",
      "Alertes stock dormant à 30 / 60 / 90 jours",
      "Marge prévisionnelle et marge réalisée par véhicule",
      "Suivi de la remise en état (entrée → mise en ligne)",
      "Pilotage de l'activité commerciale de l'équipe : RPV, opportunités, transformation",
      "Avec le plan Intelligence : Delco vous remonte le coaching équipe (\"Sandra convertit à 75 %, l'équipe à 94 %\") et les opportunités à prioriser",
    ],
  },
  {
    icon: "🤝", title: "Pour les Vendeurs",
    desc: "Soyons honnêtes : la plupart des vendeurs détestent leur CRM. Ils trouvent que ça ralentit, que ça ne sert qu'à la direction, qu'ils perdent du temps à saisir. One Data est construit pour leur faire gagner du temps, pas pour les surveiller.",
    points: [
      "Vos relances du jour en une page d'accueil",
      "Un appel se passe → la fiche client s'ouvre toute seule",
      "Un message WhatsApp arrive → vous y répondez depuis l'outil, pas depuis votre perso",
      "Un devis se génère en 3 clics depuis l'opportunité",
      "Votre activité est tracée, vous n'avez plus à faire des comptes-rendus à la main",
      "Avec le plan Intelligence : Delco vous signale en priorité les leads sans action, les propales qui dorment, et vous suggère votre prochaine action",
    ],
  },
  {
    icon: "📣", title: "Pour le Marketing",
    desc: "Si vos données clients sont propres, vous pouvez faire des choses utiles. Si elles sont éparpillées entre 4 outils, vous faites du mailing à l'aveugle. One Data centralise les données et vous laisse construire vos segments sans nous attendre.",
    points: [
      "Segmentation par achat, par marque, par ancienneté, par véhicule détenu, par source de lead",
      "Campagnes SMS et email depuis l'outil, avec suivi",
      "Mesure du retour des campagnes sur la transformation",
      "Visibilité sur l'efficacité de chaque source de leads (site, La Centrale, AutoScout, salons)",
    ],
  },
  {
    icon: "🗂", title: "Pour l'Accueil et les Secrétaires Commerciales",
    desc: "Vous êtes la première voix qu'entend le client quand il appelle. Avec One Data, quand un client appelle, sa fiche s'ouvre. Vous savez qui il est, ce qu'il a acheté, qui est son vendeur, et où en est son dossier.",
    points: [
      "Identification automatique de l'appelant (VOIP)",
      "Accès rapide à l'historique complet du client",
      "Affectation des leads entrants au bon vendeur, en un clic",
      "Suivi des dossiers en cours sans demander à 4 personnes différentes",
    ],
  },
  {
    icon: "🖥", title: "Pour le service Informatique",
    desc: "One Data est un outil SaaS. Pas de serveur à installer, pas de mises à jour à pousser. La maintenance, c'est nous. Et quand vos équipes métier ont besoin d'un nouveau champ, elles ne passent pas par vous : elles le demandent à leur responsable commercial Oropra, qui le met en prod sous 24h. Vous gagnez la fonctionnalité sans hériter du ticket.",
    points: [
      "Hébergement en Europe, sauvegardes quotidiennes",
      "Conformité RGPD (registre, anonymisation, export, suppression)",
      "Gestion des rôles et permissions fines",
      "API REST documentée pour vos intégrations internes",
      "Logs d'activité et audit trail",
    ],
  },
];

export default function EquipePage() {
  return (
    <>
      <section className="relative pt-[140px] pb-[100px] px-4 bg-[#32AFA4] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>
        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 pt-1.5 pb-1 rounded-full">
              Pour l&apos;équipe
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Un CRM auto, ça doit servir à six métiers différents.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
              Une concession, ce n&apos;est pas un seul rôle. La direction, les responsables VO/VN, les vendeurs, l&apos;accueil, le marketing et l&apos;IT n&apos;ont pas les mêmes besoins. One Data ne leur montre pas la même interface. Chacun voit ce qui le concerne.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-5">
          {roles.map((role) => (
            <motion.div
              key={role.title}
              variants={fadeUp}
              className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)] grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
            >
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{role.icon}</span>
                  <h2 className="text-xl font-bold text-text-emphasis">{role.title}</h2>
                </div>
                <p className="text-text-subtle leading-relaxed">{role.desc}</p>
              </div>
              <ul className="space-y-2">
                {role.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-default shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <section className="py-24 px-4 bg-text-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Un seul outil pour six métiers, c&apos;est ce qui fait la différence.</h2>
          <Button variant="secondary" size="lg" href="mailto:bienvenue@oropra.com" className="bg-white text-text-primary border-white hover:bg-white/90">
            Demander une démo
          </Button>
        </div>
      </section>
    </>
  );
}
