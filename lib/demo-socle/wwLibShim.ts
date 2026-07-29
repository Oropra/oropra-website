// ============================================================================
//  wwLib SHIM — reproduit les APIs de WeWeb hors WeWeb
//  ---------------------------------------------------------------------------
//  Les modules `one-data-blocs` supposent l'existence de `window.wwLib` avec
//  quelques APIs. Ce shim les fournit pour tourner sur du Next.js pur.
//
//  APIs shimmées (inventaire des usages dans one-data-blocs) :
//    - getFrontWindow() → window                        (168 usages)
//    - getFrontDocument() → document                    (14 usages)
//    - wwVariable.getValue/updateValue                  (86 usages, avec store local)
//    - goTo(url) → history.pushState                    (37 usages)
//    - wwApp.goTo(uid) → throw (cascade vers goTo)      (27 usages)
//    - wwPlugins.supabase.instance → supabase client    (9 usages)
//    - wwAuth.getUser() → window.oropraUser             (2 usages, mais critique)
//    - wwLocation.goTo({pageId}) → cascade              (2 usages)
//
//  À monter AVANT tout chargement de module one-data-blocs.
// ============================================================================

import type { SupabaseClient } from "@supabase/supabase-js";

const SKEY_VARS = "od_demo_vars";

export interface WwLibShimOptions {
  supabase: SupabaseClient;
  onNavigate?: (url: string) => void;
  refVars?: Record<string, unknown>;
}

export function installWwLibShim(opts: WwLibShimOptions): void {
  const { supabase, onNavigate, refVars = {} } = opts;

  // Store des variables (survit à un reload via sessionStorage)
  const varsStore = new Map<string, unknown>();
  try {
    const raw = sessionStorage.getItem(SKEY_VARS);
    if (raw) {
      Object.entries(JSON.parse(raw)).forEach(([k, v]) => varsStore.set(k, v));
    }
  } catch (_e) {
    // sessionStorage indisponible — pas grave, on continue en mémoire
  }

  const persistVars = () => {
    try {
      sessionStorage.setItem(
        SKEY_VARS,
        JSON.stringify(Object.fromEntries(varsStore)),
      );
    } catch (_e) {}
  };

  // Injecte les référentiels universels dans le store (barème carte grise, etc.)
  Object.entries(refVars).forEach(([k, v]) => varsStore.set(k, v));
  persistVars();

  // Écouteurs pour la réactivité des variables (usage rare mais présent)
  const varListeners = new Map<string, Set<(v: unknown) => void>>();

  const wwLib = {
    // --- Fenêtre / Document (168 + 14 usages) --------------------------------
    getFrontWindow: () => window,
    getFrontDocument: () => document,

    // --- Variables globales (44 + 42 = 86 usages) ----------------------------
    wwVariable: {
      getValue: (id: string): unknown => varsStore.get(id),
      updateValue: (id: string, val: unknown): void => {
        varsStore.set(id, val);
        persistVars();
        // Notifier les listeners éventuels
        const listeners = varListeners.get(id);
        if (listeners) {
          listeners.forEach((fn) => {
            try {
              fn(val);
            } catch (_e) {}
          });
        }
      },
      // Signature de compatibilité avec le shim de socle.js
      __odShim: true,
    },

    // --- Navigation (37 + 27 + 2 = 66 usages) --------------------------------
    // Pattern courant : try { wwApp.goTo(uid); return; } catch (e) {}
    //                    try { goTo(url); return; } catch (e) {}
    // On fait échouer wwApp.goTo pour cascader vers goTo (URL propre).
    goTo: (url: string): void => {
      const path = String(url || "");
      // Cas UID WeWeb (16+ chars avec tirets) → on refuse, ce sera géré par le
      // fallback du module qui essaiera goTo avec un path propre
      if (path.length > 30 && /^[0-9a-f-]{36}$/i.test(path)) {
        throw new Error("UID navigation not supported in demo mode");
      }
      if (onNavigate) {
        onNavigate(path);
      } else {
        try {
          history.pushState({}, "", path);
          window.dispatchEvent(new PopStateEvent("popstate"));
        } catch (_e) {
          window.location.href = path;
        }
      }
    },

    wwApp: {
      goTo: (_uid: string): void => {
        // On fait échouer volontairement pour que le module cascade vers wwLib.goTo
        throw new Error("wwApp.goTo not available in demo mode");
      },
    },

    wwLocation: {
      goTo: (obj: { pageId?: string; path?: string }): void => {
        if (obj?.path) {
          wwLib.goTo(obj.path);
        } else {
          throw new Error("wwLocation.goTo requires a path in demo mode");
        }
      },
    },

    // --- Plugins (9 usages) --------------------------------------------------
    wwPlugins: {
      supabase: {
        instance: supabase,
      },
    },

    // --- Auth (2 usages, dont sms.js — désormais bypassé côté module) --------
    wwAuth: {
      getUser: (): { id: string } | null => {
        const u = (window as any).oropraUser;
        const user = Array.isArray(u) ? u[0] : u;
        if (!user) return null;
        return { id: user.auth_uid || user.id };
      },
    },
  };

  (window as any).wwLib = wwLib;
}
