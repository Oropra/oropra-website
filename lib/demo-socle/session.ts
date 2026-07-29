// ============================================================================
//  SESSION — génération et persistance du session_id pour Delco
//  ---------------------------------------------------------------------------
//  Chaque visiteur reçoit un session_id unique, persisté en sessionStorage.
//  Ce session_id est envoyé à agent-orchestrator pour tracer le quota (5 questions).
//  Réinitialisé automatiquement à chaque nouvel onglet / rafraîchissement.
// ============================================================================

const SESSION_KEY = "od_demo_session_id";

export function getSessionId(): string {
  try {
    let sid = sessionStorage.getItem(SESSION_KEY);
    if (!sid) {
      sid = generateSessionId();
      sessionStorage.setItem(SESSION_KEY, sid);
    }
    return sid;
  } catch (_e) {
    // sessionStorage indisponible → session éphémère en mémoire
    return generateSessionId();
  }
}

function generateSessionId(): string {
  // 16 bytes de randomness → chaîne base36 lisible
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function clearSessionId(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch (_e) {}
}
