import type { ReactNode } from "react";

export interface DelcoSignal {
  level?: "" | "alert" | "critical";
  title: ReactNode;
  meta?: string[];
  action?: string;
}

/** Card Delco avec en-tête sombre, salutation et signaux actionnables. */
export default function MockDelcoSignals({
  role = "Vendeur",
  greeting = "Bonjour Antoine. Voici ce qui mérite ton attention ce matin :",
  signals,
}: {
  role?: string;
  greeting?: string;
  signals: DelcoSignal[];
}) {
  return (
    <div className="mock-delco">
      <div className="mock-delco-card">
        <div className="mock-delco-head">
          <div className="mock-delco-title-grp">
            <div className="mock-delco-avatar">D</div>
            <div className="mock-delco-name">Delco</div>
          </div>
          <div className="mock-delco-role">{role}</div>
        </div>
        <div className="mock-delco-body">
          {greeting && <div className="mock-delco-greeting">{greeting}</div>}
          {signals.map((s, i) => (
            <div className={`mock-delco-signal ${s.level ?? ""}`.trim()} key={i}>
              <div className="mock-delco-sig-title">{s.title}</div>
              {s.meta && (
                <div className="mock-delco-sig-meta">
                  {s.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              )}
              {s.action && <div className="mock-delco-sig-action">{s.action}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
