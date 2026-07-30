// ============================================================================
//  FETCH PATCH — injection des garde-fous démo dans les appels Delco
//  ---------------------------------------------------------------------------
//  Le module delco-chat appelle directement fetch(agent-orchestrator) avec un
//  body { prompt, thread_id }. En mode démo publique, l'Edge Function exige en
//  plus `session_id` et (à la 1re question) `turnstile_token`.
//
//  Plutôt que de forker delco-chat, on patche window.fetch : tout POST vers
//  /functions/v1/agent-orchestrator voit son body JSON enrichi automatiquement.
//  Les modules restent inchangés (compatibles prod).
// ============================================================================

export interface FetchPatchOptions {
  sessionId: string;
  getTurnstileToken: () => Promise<string | null>;
}

export function installFetchPatch(opts: FetchPatchOptions): () => void {
  const { sessionId, getTurnstileToken } = opts;
  const originalFetch = window.fetch.bind(window);

  const patched: typeof window.fetch = async (input, init) => {
    try {
      const url =
        typeof input === "string"
          ? input
          : input instanceof URL
            ? input.href
            : (input as Request).url;

      const isAgentCall =
        url && url.includes("/functions/v1/agent-orchestrator");

      if (isAgentCall && init?.body && typeof init.body === "string") {
        // Enrichir le body JSON avec session_id + turnstile_token
        let parsed: Record<string, unknown> = {};
        try {
          parsed = JSON.parse(init.body);
        } catch (_e) {
          return originalFetch(input, init);
        }

        parsed.session_id = sessionId;
        // Attendre activement le token (le widget peut mettre un instant à le produire)
        const token = await getTurnstileToken();
        if (token) parsed.turnstile_token = token;

        const newInit: RequestInit = {
          ...init,
          body: JSON.stringify(parsed),
        };
        return originalFetch(input, newInit);
      }
    } catch (_e) {
      // en cas de souci, on laisse passer l'appel original
    }
    return originalFetch(input, init);
  };

  window.fetch = patched;

  // Retourne une fonction de restauration
  return () => {
    window.fetch = originalFetch;
  };
}
