import { Phone, MessageCircle, Mail, Wrench } from "lucide-react";

/** Fiche client (référentiel) — mockup principal du hero. */
export default function MockFicheClient() {
  return (
    <div className="mockup-card mc-fiche">
      <div className="mc-fiche-header">
        <div className="mc-tabs">
          <span className="mc-tab active">Fiche</span>
          <span className="mc-tab">Opportunités</span>
          <span className="mc-tab">Documents</span>
          <span className="mc-tab">Atelier</span>
        </div>
        <div className="mc-search">⌕ Rechercher un client…</div>
      </div>
      <div className="mc-body">
        <div>
          <div className="mc-avatar">MD</div>
          <div className="mc-client-name">Martin Dubois</div>
          <div className="mc-client-meta">06 12 34 56 78</div>
          <span className="mc-tag">Client · 3 ans</span>

          <div className="mc-section" style={{ marginTop: 18 }}>
            <div className="mc-section-title">Véhicules détenus</div>
            <div className="mc-field-row">
              <span className="mc-field-label">Peugeot 3008</span>
              <span className="mc-field-value">2021</span>
            </div>
            <div className="mc-field-row">
              <span className="mc-field-label">Citroën C3</span>
              <span className="mc-field-value">2018</span>
            </div>
          </div>
          <div className="mc-section">
            <div className="mc-section-title">Opportunité</div>
            <div className="mc-field-row">
              <span className="mc-field-label">Peugeot 308 GT</span>
              <span className="mc-field-value">Devis envoyé</span>
            </div>
          </div>
        </div>

        <div>
          <div className="mc-section-title">Historique des interactions</div>
          <div className="mc-timeline">
            <div className="mc-timeline-item">
              <span className="mc-timeline-icon">
                <Phone size={13} />
              </span>
              <div className="mc-timeline-content">
                <div className="mc-timeline-title">Appel sortant — 4 min 12</div>
                <div className="mc-timeline-meta">Antoine D. · Hier 16:42</div>
              </div>
            </div>
            <div className="mc-timeline-item">
              <span className="mc-timeline-icon wa">
                <MessageCircle size={13} />
              </span>
              <div className="mc-timeline-content">
                <div className="mc-timeline-title">WhatsApp — photo reprise</div>
                <div className="mc-timeline-meta">Reçu · 14:08</div>
              </div>
            </div>
            <div className="mc-timeline-item">
              <span className="mc-timeline-icon email">
                <Mail size={13} />
              </span>
              <div className="mc-timeline-content">
                <div className="mc-timeline-title">Devis envoyé — Peugeot 308 GT</div>
                <div className="mc-timeline-meta">Lundi 09:30</div>
              </div>
            </div>
            <div className="mc-timeline-item">
              <span className="mc-timeline-icon">
                <Wrench size={13} />
              </span>
              <div className="mc-timeline-content">
                <div className="mc-timeline-title">Passage atelier — révision</div>
                <div className="mc-timeline-meta">Il y a 3 semaines</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
