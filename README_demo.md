# Socle-démo — installation dans oropra-website

## Fichiers à copier dans le repo

```
oropra-website/
├── app/
│   └── demo/
│       ├── page.tsx              ← nouveau
│       └── DemoPlayground.tsx    ← nouveau
├── lib/
│   └── demo-socle/
│       ├── index.ts              ← nouveau
│       ├── SocleDemo.ts          ← nouveau
│       ├── wwLibShim.ts          ← nouveau
│       ├── OD.ts                 ← nouveau
│       ├── auth.ts               ← nouveau
│       ├── session.ts            ← nouveau
│       └── turnstile.ts          ← nouveau
└── .env.local                    ← à mettre à jour (voir .env.local.example)
```

## Dépendances npm

Le socle utilise `@supabase/supabase-js`, probablement déjà présent sur le repo. Sinon :

```bash
npm i @supabase/supabase-js
```

Rien d'autre — pas de dépendance de build spécifique.

## Variables d'environnement à ajouter à `.env.local`

Voir `.env.local.example`. Il te faut :

1. **NEXT_PUBLIC_DEMO_SUPABASE_ANON_KEY** : récupère-la dans le dashboard Supabase demo-public → Settings → API → `anon public key`
2. **NEXT_PUBLIC_DEMO_VISITOR_PASSWORD** : le mot de passe que tu as noté hors chat pour `visiteur@one-data-demo.fr`

Les autres sont déjà remplies dans l'exemple.

## Tester en local

```bash
npm run dev
```

Puis navigateur → `http://localhost:3000/demo`

Ce qui doit se passer :
1. Loader "Préparation de la démo…" pendant ~1-2 sec
2. Bandeau amber en haut "Vous explorez la démo…"
3. Console navigateur montre :
   - `[socle-démo] ✅ wwLib shim installé`
   - `[socle-démo] ✅ registre OD installé`
   - `[auth] ✅ visiteur connecté`
   - `[auth] ✅ user chargé 155 Jules Francois`
   - `[socle-démo] ✅ Turnstile prêt`
   - `[OD] chargé : topnav` puis `[OD] ✅ monté : topnav`
   - `[OD] chargé : dashboard` puis `[OD] ✅ monté : dashboard`
4. La topnav s'affiche en haut
5. Le dashboard "Tour de contrôle" apparaît avec les KPIs de Jules

## En cas de problème

**Loader qui ne finit pas** : ouvre la console, regarde à quelle ligne ça bloque. Probable causes :
- Env vars pas définies → erreur `bootstrap KO`
- Auto-login échoué → mot de passe visiteur incorrect
- Turnstile bloqué par un adblock → non bloquant, on continue quand même
- Module CDN 404 → repo one-data-blocs pas public ou fichier renommé

**Modules montent mais UI cassée** : c'est le shim wwLib qui doit être incomplet. Regarde dans la console les erreurs `wwLib.xxx is not a function`. Ajoute l'API manquante dans `wwLibShim.ts`.

**Navigation cassée entre modules** : les modules essaient `wwLib.wwApp.goTo(UID)` (fail) puis `wwLib.goTo(url)` — le second doit rediriger via `router.push()`. La conversion `/fr/xxx` → `/demo/xxx` est dans `DemoPlayground.tsx`.

## Architecture

Voir le fichier `inventaire-wwLib.md` pour l'analyse détaillée des dépendances des 43 modules.

Points essentiels :
- **Le shim wwLib** émule les 8 APIs WeWeb utilisées (168 usages `getFrontWindow` seuls)
- **Le registre OD** charge les modules depuis le CDN jsDelivr `Oropra/one-data-blocs@main`
- **Zero fork** : les modules restent inchangés, ce qui les rend compatibles avec WeWeb (prod OROPRA) ET Next.js (démo)
- **`window.oropraUser`** est posé au bootstrap avec les infos de Jules 155
- **`session_id`** + **`turnstile_token`** sont auto-injectés dans les appels `agent-orchestrator` (garde-fous démo)
