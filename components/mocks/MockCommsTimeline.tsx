import { Phone, MessageCircle, Mail, Smartphone } from "lucide-react";

const items = [
  {
    icon: "voip",
    el: <Phone size={14} />,
    title: "Appel sortant — 4 min 12",
    time: "16:42",
    msg: "Antoine D. • Confirmation rendez-vous essai",
  },
  {
    icon: "wa",
    el: <MessageCircle size={14} />,
    title: "WhatsApp — photo reprise",
    time: "14:08",
    msg: "Voici la photo de mon véhicule comme convenu",
  },
  {
    icon: "mail",
    el: <Mail size={14} />,
    title: "Devis envoyé — Peugeot 308 GT",
    time: "Lundi",
    msg: "Bonjour Martin, suite à notre échange…",
  },
  {
    icon: "sms",
    el: <Smartphone size={14} />,
    title: "SMS — relance essai",
    time: "Lundi",
    msg: "RDV confirmé pour mardi 14h au showroom",
  },
];

const tabs = ["Tout", "Appels", "WhatsApp", "Email"];

/** Timeline communications unifiées (appel + WhatsApp + SMS + email). */
export default function MockCommsTimeline() {
  return (
    <div className="mock-comms">
      <div className="mock-comms-card">
        <div className="mock-comms-head">
          <div className="mock-comms-tabs">
            {tabs.map((t, i) => (
              <span key={t} className={`mock-comms-tab${i === 0 ? " active" : ""}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mock-comms-list">
          {items.map((it) => (
            <div className="mock-comms-item" key={it.title}>
              <div className={`mock-comms-icon ${it.icon}`}>{it.el}</div>
              <div className="mock-comms-body">
                <div className="mock-comms-title">
                  {it.title}
                  <span className="mock-comms-time">{it.time}</span>
                </div>
                <div className="mock-comms-msg">{it.msg}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
