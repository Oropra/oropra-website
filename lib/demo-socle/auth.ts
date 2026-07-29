// ============================================================================
//  AUTH — connexion automatique du visiteur + résolution du user
//  ---------------------------------------------------------------------------
//  Le visiteur est loggué silencieusement avec les credentials du user visiteur
//  demo-public (email/password). Après login, on récupère la ligne USER via RPC
//  get_current_user pour construire window.oropraUser (attendu par les modules).
// ============================================================================

import type { SupabaseClient } from "@supabase/supabase-js";

export interface DemoUser {
  ID_User: number;
  auth_uid: string;
  id: string;
  prenom: string;
  nom: string;
  nomComplet?: string;
  ID_Role?: number;
  [key: string]: unknown;
}

export async function loginVisitor(
  supabase: SupabaseClient,
  email: string,
  password: string,
): Promise<void> {
  // Si déjà connecté, on ne se reconnecte pas
  const { data: existing } = await supabase.auth.getSession();
  if (existing?.session?.user?.email === email) {
    console.log("[auth] session visiteur déjà active");
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(`Login visiteur échoué : ${error.message}`);
  }
  console.log("[auth] ✅ visiteur connecté");
}

export async function loadUser(supabase: SupabaseClient): Promise<DemoUser | null> {
  // Attendre que la session soit disponible côté client
  let uid: string | null = null;
  for (let i = 0; i < 25; i++) {
    const { data } = await supabase.auth.getUser();
    if (data?.user?.id) {
      uid = data.user.id;
      break;
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  if (!uid) {
    console.warn("[auth] pas de session après attente");
    return null;
  }

  // Appel de la RPC get_current_user (fournie par la baseline OneData)
  const { data, error } = await supabase.rpc("get_current_user");
  if (error) {
    console.error("[auth] get_current_user KO", error);
    return null;
  }

  const user: DemoUser = Array.isArray(data) ? data[0] : data;
  if (!user) return null;

  // Enrichir : garantir que auth_uid + id sont bien renseignés (usage compat)
  user.auth_uid = user.auth_uid || uid;
  user.id = user.id || uid;

  // Exposition globale attendue par les modules (via window.oropraUser)
  (window as any).oropraUser = user;
  (window as any).__oropraAuthUid = uid;

  console.log("[auth] ✅ user chargé", user.ID_User, user.prenom, user.nom);
  return user;
}
