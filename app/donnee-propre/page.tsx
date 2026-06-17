import type { Metadata } from "next";
import { Database, Building2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import CtaFinal from "@/components/ui/CtaFinal";
import VideoBlock from "@/components/video/VideoBlock";
import MockDataGraph from "@/components/mocks/MockDataGraph";
import MockKanban from "@/components/mocks/MockKanban";
import RecapPlans from "@/components/pricing/RecapPlans";

export const metadata: Metadata = {
  title: "La donnée propre",
  description:
    "Référentiel client unifié, stock VO/VN avec marge live, propales et BDC automatisés, KYC SIRENE. Le socle de données d'une concession qui sait ce qu'elle vend.",
  alternates: { canonical: "/donnee-propre" },
};

export default function DonneePropre() {
  return (
    <>
      <PageHero
        eyebrow="Pilier 01 — La donnée propre"
        title="Une concession qui sait ce qu'elle vend, à qui, et avec quelle marge."
        subtitle="Un client = une fiche, partagée par tous les services. Stock vivant. Propales et BDC générés depuis l'opportunité, pas remplis à la main."
        primary={{ href: "/contact", label: "Demander une démo" }}
        secondary={{ href: "/prix", label: "Voir les prix" }}
        visual={
          <VideoBlock
            src="/videos/features/01-referentiel-client.mp4"
            poster="/videos/features/posters/01-referentiel-client.jpg"
            tag="Référentiel client"
            duration="0:60"
            label="Voir la fiche client en action"
          />
        }
      />

      <section className="section">
        <div className="container-tight">
          <Reveal className="constat">
            <div className="constat-label">Le constat</div>
            <p className="constat-text">
              Dans une concession, la donnée client est éclatée entre le DMS, un CRM à
              moitié rempli, des fichiers Excel, des boîtes mail et le téléphone perso des
              vendeurs. Personne n&apos;a la même information. Quand un vendeur part, une
              partie de la donnée part avec lui.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Référentiel client */}
      <section className="pillars" style={{ paddingTop: 0 }}>
        <div className="container">
          <article className="pillar-row">
            <div className="pillar-text">
              <div className="pillar-meta">Référentiel client unifié</div>
              <h2 className="pillar-title">Un client = une fiche. Partagée par toute la concession.</h2>
              <p className="pillar-desc">
                Coordonnées, véhicules détenus, opportunités en cours, documents,
                historique atelier, communications : tout est rattaché au même client.
                Vente, accueil, management et direction lisent la même donnée.
              </p>
              <ul className="pillar-features">
                <li>Fiche client unique et partagée</li>
                <li>Véhicules détenus et historique</li>
                <li>Opportunités rattachées</li>
                <li>Documents et passages atelier</li>
              </ul>
            </div>
            <div className="pillar-visual">
              <MockDataGraph />
            </div>
          </article>

          {/* Stock */}
          <article className="pillar-row reverse">
            <div className="pillar-text">
              <div className="pillar-meta">Stock VO et VN</div>
              <h2 className="pillar-title">Un stock vivant. Pas un export Excel du mardi.</h2>
              <p className="pillar-desc">
                Chaque véhicule avec son âge, sa marge, ses frais de remise en état et son
                statut, en un coup d&apos;œil. Alertes automatiques sur le stock dormant à
                30, 60 ou 90 jours. Filtres par marque, par site, par type.
              </p>
              <ul className="pillar-features">
                <li>Marge live par véhicule</li>
                <li>Alertes stock dormant</li>
                <li>Photos VO (cover, portails)</li>
                <li>Filtres marque / site / type</li>
              </ul>
            </div>
            <div className="pillar-visual with-video">
              <VideoBlock
                className="pillar-video"
                src="/videos/features/03-stock.mp4"
                poster="/videos/features/posters/03-stock.jpg"
                tag="Stock VO & VN"
                duration="0:55"
                label="Voir le stock en action"
              />
              <MockKanban />
            </div>
          </article>

          {/* Propales et BDC */}
          <article className="pillar-row">
            <div className="pillar-text">
              <div className="pillar-meta">Propales et BDC</div>
              <h2 className="pillar-title">Des documents propres. Du même format. Dans toute la concession.</h2>
              <p className="pillar-desc">
                Le devis se génère depuis l&apos;opportunité, sans re-saisie. Véhicule,
                reprise, financement : tout est calculé. Signature électronique intégrée.
                Vous voyez quand le client ouvre et quand il signe.
              </p>
              <ul className="pillar-features">
                <li>Devis généré depuis l&apos;opportunité</li>
                <li>Reprise et financement calculés</li>
                <li>Signature électronique</li>
                <li>Suivi Envoyé → Vu → Signé</li>
              </ul>
            </div>
            <div className="pillar-visual with-video">
              <VideoBlock
                className="pillar-video"
                src="/videos/features/05-devis-bdc.mp4"
                poster="/videos/features/posters/05-devis-bdc.jpg"
                tag="Devis & BDC"
                duration="0:60"
                label="Voir la génération d'un devis"
              />
            </div>
          </article>
        </div>
      </section>

      {/* KYC + DMS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <Reveal className="feature-card">
              <div className="feature-card-icon">
                <Building2 size={20} />
              </div>
              <div className="feature-card-title">KYC entreprises via SIRENE</div>
              <p className="feature-card-desc">
                Saisissez un SIRET, la fiche entreprise se remplit : raison sociale,
                dirigeants, établissements. Utile pour les ventes sociétés et la conformité.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="feature-card">
              <div className="feature-card-icon">
                <Database size={20} />
              </div>
              <div className="feature-card-title">
                Branchements DMS par marque
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    background: "var(--orange-soft)",
                    color: "#b8810b",
                    padding: "2px 7px",
                    borderRadius: 3,
                    marginLeft: 8,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    verticalAlign: "middle",
                  }}
                >
                  Roadmap
                </span>
              </div>
              <p className="feature-card-desc">
                Les connexions aux DMS dépendent des marques et des API disponibles. On
                étudie chaque branchement au cas par cas, sur devis. On n&apos;annonce pas un
                connecteur qui n&apos;existe pas.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Récap par plan */}
      <section className="plans">
        <div className="container">
          <SectionHead
            eyebrow="Inclusions par plan"
            title="Ce qui est inclus, plan par plan."
          />
          <div style={{ marginTop: 40 }}>
            <RecapPlans
              rows={[
                { feature: "Référentiel client unifié", performance: true, connect: true, intelligence: true },
                { feature: "Stock VO/VN, marge live", performance: true, connect: true, intelligence: true },
                { feature: "Propales et BDC", performance: true, connect: true, intelligence: true },
                { feature: "Photos VO (cover, portails)", performance: true, connect: true, intelligence: true },
                { feature: "KYC entreprises (SIRENE)", performance: true, connect: true, intelligence: true },
                { feature: "Branchement DMS", performance: "Sur devis", connect: "Sur devis", intelligence: "Sur devis" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
