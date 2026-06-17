import { ArrowRight } from "lucide-react";
import MockShowme from "@/components/mocks/MockShowme";

const features = [
  "Disponible sur chaque page, à chaque étape",
  "Mises à jour quand l'outil évolue",
  "Compatibles desktop et mobile",
  "Construites avec votre référent Oropra pour vos process",
];

/** Grosse card "Montre-moi" mise en avant, texte + mockup de visite guidée. */
export default function ShowmeFeature() {
  return (
    <div className="adoption-showme" id="montre-moi">
      <div className="adoption-showme-text">
        <div className="adoption-card-icon purple">
          <ArrowRight size={18} />
        </div>
        <div>
          <div className="adoption-card-name">&quot;Montre-moi&quot; — visites guidées</div>
          <div className="adoption-card-title" style={{ fontSize: 28 }}>
            Une visite guidée dans l&apos;outil, pour chaque tâche.
          </div>
        </div>
        <p className="adoption-card-desc">
          Le vendeur ne sait pas comment générer un devis ? Il clique sur
          &quot;Montre-moi&quot;. L&apos;outil l&apos;accompagne pas à pas, dans son propre
          écran, avec ses données. Pas une vidéo à regarder ailleurs. Une visite guidée,
          dans l&apos;outil, en contexte.
        </p>
        <ul className="adoption-card-features">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      <div className="adoption-showme-mock">
        <MockShowme />
      </div>
    </div>
  );
}
