import { Phone, Check, X } from "lucide-react";

/** Maquette smartphone Android — One-Data Phone, brief client en appel entrant. */
export default function MockPhone() {
  return (
    <div className="mock-phone">
      <div className="mock-phone-screen">
        <div className="mock-phone-call">
          <div className="mock-phone-icon">
            <Phone size={32} />
          </div>
          <div className="mock-phone-label">Appel entrant</div>
          <div className="mock-phone-name">Martin Dubois</div>
          <div className="mock-phone-brief">
            <div className="mock-phone-brief-title">Brief client</div>
            <div className="mock-phone-brief-row">
              <span>Statut</span>
              <span>Client (3 ans)</span>
            </div>
            <div className="mock-phone-brief-row">
              <span>Vendeur</span>
              <span>Antoine D.</span>
            </div>
            <div className="mock-phone-brief-row">
              <span>Véhicule</span>
              <span>Peugeot 3008</span>
            </div>
            <div className="mock-phone-brief-row">
              <span>Opportunité</span>
              <span>Devis envoyé</span>
            </div>
            <div className="mock-phone-brief-row">
              <span>Dernier contact</span>
              <span>Hier 16:42</span>
            </div>
          </div>
          <div className="mock-phone-actions">
            <div className="mock-phone-btn reject">
              <X size={20} />
            </div>
            <div className="mock-phone-btn accept">
              <Check size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
