"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const plans = [
  {
    name: "Performance",
    tagline: "Le socle métier d'une concession bien tenue.",
    price: "69 € HT",
    priceNote: "/ utilisateur / mois — engagement annuel",
    desc: "Le référentiel client unique, le stock, les propales et BDC, l'activité des vendeurs. Tout ce qu'il faut pour structurer le métier, sans le bruit.",
    features: [
      "Référentiel client unique",
      "Gestion du stock VO et VN",
      "Propositions commerciales et bons de commande",
      "Suivi de l'activité déclarée des vendeurs (RPV)",
      "Tableaux de bord standards",
      "Formation 14 jours incluse",
      "Support email et chat",
      "Hébergement, sauvegardes, mises à jour",
    ],
    cta: "Demander un devis",
    topColor: "bg-service-blue",
    featured: false,
  },
  {
    name: "Connect",
    tagline: "Toute la communication client, sur une seule fiche.",
    price: "89 € HT",
    priceNote: "/ utilisateur / mois — engagement annuel",
    desc: "Performance + l'intégralité de vos canaux de communication client (VOIP, WhatsApp, SMS, email) rattachés à la fiche, plus le lead management. C'est le plan que choisissent les concessions qui ont arrêté de jongler entre 4 outils.",
    features: [
      "Tout ce qui est dans Performance",
      "Téléphonie VOIP intégrée (appels entrants et sortants depuis la fiche)",
      "WhatsApp Business connecté (numéro unique de la concession)",
      "SMS et email envoyés depuis la fiche, tracés automatiquement",
      "Lead management complet (sources, affectation, scoring, relances)",
      "Module marketing (segmentation, campagnes SMS et email, mesure du retour)",
      "Adaptation de l'outil sous 24h par votre responsable commercial Oropra",
      "Support prioritaire (téléphone, SLA renforcé)",
    ],
    cta: "Demander un devis",
    topColor: "bg-service-green",
    featured: true,
  },
  {
    name: "Intelligence",
    tagline: "Connect + Delco, l'agent IA qui surveille votre activité pour vous.",
    price: "109 € HT",
    priceNote: "/ utilisateur / mois — engagement annuel",
    desc: "Connect + l'agent Delco. Une IA qui passe votre périmètre en revue en continu et vous dit quoi faire en priorité. Adaptée à votre rôle : un vendeur, un chef des ventes et un directeur ne voient pas la même chose.",
    features: [
      "Tout ce qui est dans Connect",
      "Delco — copilote IA : signaux actionnables, suggestions de prochaine action, adaptés au rôle de chaque utilisateur",
      "Recherche conversationnelle : interrogez vos clients, votre stock et votre activité en langage naturel",
      "Pilotage à la demande : brief du matin, synthèse pipeline, comparaison inter-sites, détection de signaux faibles",
      "Exports pro : tout résultat exportable en PDF stylé ou Excel d'un clic",
      "Accompagnement dédié (référent One Data assigné)",
    ],
    cta: "Demander un devis",
    topColor: "bg-[#2a5ea9]",
    featured: false,
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
          <motion.div variants={fadeUp} className="text-center mb-4">
            <h2 className="text-2xl font-bold text-text-emphasis mb-2">Trois plans. Une promesse différente à chaque fois.</h2>
            <p className="text-sm text-text-faint">Le prix est par utilisateur et par mois, identique quelle que soit la taille de votre structure. Remise volume sur devis.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className="rounded-[14px] p-7 border border-border-light bg-white shadow-[var(--shadow-default)] flex flex-col relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${plan.topColor}`} />
                {plan.featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-service-green/10 text-service-green">
                    Le plus populaire
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1 text-text-emphasis">{plan.name}</h3>
                <p className="text-xs text-text-faint mb-3">{plan.tagline}</p>
                <p className="text-2xl font-bold text-accent-default mb-0.5">{plan.price}</p>
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
                <Button variant="primary" size="md" href="mailto:bienvenue@oropra.com">
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="max-w-2xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-6">
            <h2 className="text-2xl font-bold text-text-emphasis mb-3">Les options à la carte.</h2>
            <p className="text-sm text-text-subtle leading-relaxed">
              Tout ce qui n&apos;est pas dans les plans est facturé séparément, parce que tout le monde n&apos;en a pas besoin. On préfère un prix de base honnête plutôt qu&apos;un plan gonflé.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              "Branchement DMS : selon votre marque et l'éditeur DMS (DCSnet/Reynolds, Stellantis, Renault Diapason, etc.) — sur devis",
              "Reporting avancé : tableaux de bord sur mesure, exports automatisés programmés — à partir de 150 €/mois",
              "Export comptable : FEC, formats spécifiques (Sage, Cegid, etc.) — à partir de 50 €/mois",
              "Migration de données : reprise de votre base client / stock existante au-delà du périmètre standard — sur devis",
              "Intégrations sur mesure : connecteurs spécifiques à vos outils internes — sur devis",
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
          <h2 className="text-2xl font-bold text-text-emphasis mb-4">Remise volume sur devis.</h2>
          <p className="text-text-subtle leading-relaxed mb-8">
            Le prix par utilisateur est identique quelle que soit la taille de votre structure. Au-delà d&apos;un certain volume de licences, nous appliquons une remise volume — discutée au cas par cas selon votre périmètre. Demandez un devis et on regarde ensemble.
          </p>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
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
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-emphasis mb-4">Vous voulez un chiffrage précis pour votre concession ?</h2>
          <p className="text-text-subtle leading-relaxed mb-8">
            Donnez-nous votre nombre d&apos;utilisateurs et de sites, on vous envoie un devis dans la journée.
          </p>
          <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">Demander un devis</Button>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
