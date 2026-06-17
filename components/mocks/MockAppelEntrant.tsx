import { Phone, Check, X } from "lucide-react";

/** Pop-up appel entrant flottante (VOIP). */
export default function MockAppelEntrant() {
  return (
    <div className="mockup-card mc-call">
      <div className="mc-call-header">
        <div className="mc-call-icon">
          <Phone size={16} />
        </div>
        <div>
          <div className="mc-call-title">Appel entrant</div>
          <div className="mc-call-name">Martin Dubois</div>
        </div>
      </div>
      <div className="mc-call-info">
        <div className="mc-call-info-row">
          <span className="mc-field-label">Statut</span>
          <span className="mc-field-value">Client · 3 ans</span>
        </div>
        <div className="mc-call-info-row">
          <span className="mc-field-label">Vendeur</span>
          <span className="mc-field-value">Antoine D.</span>
        </div>
        <div className="mc-call-info-row">
          <span className="mc-field-label">Opportunité</span>
          <span className="mc-field-value">Devis envoyé</span>
        </div>
      </div>
      <div className="mc-call-actions">
        <span className="mc-call-btn reject">
          <X size={14} style={{ display: "inline", verticalAlign: "-2px" }} /> Refuser
        </span>
        <span className="mc-call-btn accept">
          <Check size={14} style={{ display: "inline", verticalAlign: "-2px" }} /> Répondre
        </span>
      </div>
    </div>
  );
}
