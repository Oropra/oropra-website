export interface ArticleBlock {
  type: "h2" | "p" | "ul" | "quote";
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO pour le SEO
  dateLabel: string;
  readingTime: string;
  excerpt: string;
  body: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "pourquoi-les-crm-auto-finissent-inutilises",
    title: "Pourquoi 70 % des CRM auto finissent inutilisés",
    category: "Adoption",
    date: "2026-06-10",
    dateLabel: "10 juin 2026",
    readingTime: "5 min",
    excerpt:
      "Un CRM installé n'est pas un CRM utilisé. On a regardé pourquoi tant d'outils tombent en désuétude dans les concessions, et ce qui change la donne.",
    body: [
      { type: "p", text: "Dans une concession, le scénario se répète. On signe un CRM, on l'installe, on forme l'équipe en deux jours, et trois mois plus tard les vendeurs sont retournés à leur tableur et à leur téléphone perso. L'outil tourne à vide. La donnée n'est plus à jour. Le directeur ne pilote plus avec." },
      { type: "h2", text: "Les trois raisons qui reviennent" },
      { type: "p", text: "Quand on creuse, ce ne sont jamais des raisons techniques. Ce sont toujours les mêmes trois." },
      { type: "ul", items: [
        "L'outil est trop rigide. Il a été pensé pour un CRM générique, pas pour le métier d'une concession. Le vendeur doit se plier à l'outil au lieu que l'outil suive son cycle de vente.",
        "La formation a été expédiée. Deux jours de prise en main, un support qui répond par ticket, et chacun se débrouille. Au premier obstacle, le vendeur abandonne.",
        "Personne ne s'occupe de l'adaptation. Un besoin métier précis remonte, il faut ouvrir un ticket, attendre, expliquer à quelqu'un qui ne connaît pas la concession. Le besoin n'est jamais traité.",
      ] },
      { type: "h2", text: "Un CRM non utilisé, c'est de l'argent perdu deux fois" },
      { type: "p", text: "On paie les licences, et on perd le bénéfice. Pire : la donnée client se dégrade, parce qu'une partie passe encore par le tableur et le téléphone perso. Le jour où un vendeur part, son historique part avec lui." },
      { type: "quote", text: "Le problème n'est presque jamais l'outil le jour de la signature. C'est ce qui se passe les 90 jours suivants." },
      { type: "h2", text: "Ce qui casse le schéma" },
      { type: "p", text: "L'adoption ne se décrète pas, elle s'organise. Une formation étalée — une heure par jour pendant quatorze jours, adaptée au rôle de chaque personne, sur les vraies données de la concession — ancre les habitudes au lieu de les survoler. Un interlocuteur qui connaît la concession et peut adapter l'outil sous 24 heures évite le contournement. Et une visite guidée disponible dans l'outil, à chaque tâche, prend le relais quand la formation est finie mais que les questions continuent." },
      { type: "p", text: "Ce n'est pas une question de fonctionnalités en plus. C'est une question de méthode. C'est pour ça qu'on a construit One Data avec ses dispositifs d'adoption dès le départ, et pas comme une option." },
    ],
  },
  {
    slug: "bilaterales-la-reunion-qui-change-le-mois-commercial",
    title: "Bilatérales : la réunion qui change le mois commercial",
    category: "Management",
    date: "2026-06-03",
    dateLabel: "3 juin 2026",
    readingTime: "6 min",
    excerpt:
      "La bilatérale entre le chef des ventes et chaque vendeur est l'un des leviers les plus sous-exploités en concession. Voici comment la structurer.",
    body: [
      { type: "p", text: "La bilatérale, c'est l'échange régulier entre le chef des ventes et un vendeur sur son activité. Dans beaucoup de concessions, elle existe sous une forme informelle : une discussion devant le café, quelques chiffres griffonnés. Elle n'est ni préparée, ni tracée, ni suivie. Résultat : on refait la même conversation chaque semaine sans progresser." },
      { type: "h2", text: "Trois temps, pas un seul" },
      { type: "p", text: "Une bilatérale qui sert vraiment se joue en trois temps." },
      { type: "ul", items: [
        "Avant : la préparation. Le chef des ventes arrive avec les chiffres du vendeur déjà sous les yeux — pipe, relances en retard, taux de conversion, objectif contre réalisé. Pas besoin de les reconstituer pendant la réunion.",
        "Pendant : la tenue et les engagements. On structure l'échange et on note des engagements concrets : relancer ces cinq dossiers, caler trois essais cette semaine. Des actions, pas des intentions.",
        "Après : le suivi. À la bilatérale suivante, les engagements de la semaine précédente sont rappelés. On voit ce qui a été tenu, ce qui ne l'a pas été, et pourquoi.",
      ] },
      { type: "h2", text: "Pourquoi ça change le mois" },
      { type: "p", text: "Le suivi est le maillon que tout le monde saute. Sans lui, la bilatérale est une photo. Avec lui, elle devient un cycle : on prend des engagements, on les suit, on ajuste. Le vendeur sait qu'on va revenir sur ses dossiers. Le chef des ventes coache au lieu de constater." },
      { type: "quote", text: "Animer ses vendeurs comme un directeur sportif. Pas comme un comptable." },
      { type: "h2", text: "Pourquoi peu de CRM le font" },
      { type: "p", text: "La plupart des CRM auto savent afficher un pipe. Très peu structurent la bilatérale, parce que c'est un objet métier précis, pas une fonctionnalité générique. C'est l'un des rares endroits où l'outil peut réellement faire progresser le chiffre, à condition de l'avoir pensé pour ça." },
      { type: "p", text: "Dans One Data, la bilatérale est intégrée au cycle commercial, au même endroit que le pipe et le rapport vendeur. Les engagements ne vivent pas dans un carnet à part : ils sont rattachés aux dossiers, et ils reviennent." },
    ],
  },
  {
    slug: "stock-dormant-combien-ca-coute-vraiment",
    title: "Stock dormant : combien ça coûte vraiment",
    category: "Donnée",
    date: "2026-05-27",
    dateLabel: "27 mai 2026",
    readingTime: "5 min",
    excerpt:
      "Un VO qui dort 90 jours, c'est de l'argent immobilisé qui se déprécie. Le vrai coût va bien au-delà du prix d'achat du véhicule.",
    body: [
      { type: "p", text: "Tout le monde sait qu'un véhicule d'occasion qui reste trop longtemps en stock coûte cher. Mais quand on demande combien, la réponse est rarement chiffrée. Le coût est diffus, réparti entre plusieurs postes, et c'est précisément pour ça qu'on le sous-estime." },
      { type: "h2", text: "Quatre coûts qui s'additionnent" },
      { type: "ul", items: [
        "Le coût de financement. L'argent immobilisé dans un VO est de l'argent qui n'est pas disponible ailleurs, et qui porte souvent des intérêts.",
        "La dépréciation. Un VO perd de la valeur avec le temps et le kilométrage du marché. Plus il dort, plus la marge théorique fond.",
        "Les frais de remise en état et de présentation, qui se cumulent si le véhicule traîne.",
        "Le coût d'opportunité de la place occupée : un emplacement pris par un véhicule qui ne tourne pas, c'est un véhicule qui tourne qu'on ne rentre pas.",
      ] },
      { type: "h2", text: "Le problème, c'est la visibilité tardive" },
      { type: "p", text: "Le stock dormant n'est pas un problème de mauvais achat dans la majorité des cas. C'est un problème de signal qui arrive trop tard. Quand on découvre qu'un VO a 95 jours sur un export Excel sorti en fin de mois, il est déjà trop tard pour réagir au bon moment." },
      { type: "quote", text: "Votre stock vivant. Pas un export Excel du mardi." },
      { type: "h2", text: "Voir le stock vieillir en temps réel" },
      { type: "p", text: "L'enjeu est d'avoir l'alerte au bon palier — 30, 60, 90 jours — et de la voir sans aller la chercher. Avec chaque véhicule affichant son âge, sa marge et ses frais consolidés, le chef des ventes peut décider d'une action (baisse de prix, mise en avant, déstockage) pendant qu'elle a encore un effet." },
      { type: "p", text: "Dans One Data, le stock est vivant : marge en direct par véhicule, alertes automatiques sur le stock dormant, filtres par marque, site et type. Le but n'est pas de produire un rapport de plus, mais de déclencher une décision plus tôt." },
    ],
  },
  {
    slug: "telephone-perso-des-vendeurs-le-risque-sous-estime",
    title: "Téléphone perso des vendeurs : le risque qu'on sous-estime",
    category: "Relation client",
    date: "2026-05-20",
    dateLabel: "20 mai 2026",
    readingTime: "4 min",
    excerpt:
      "Pratique au quotidien, le téléphone perso du vendeur devient un problème le jour où il part. Tout l'historique client part avec lui.",
    body: [
      { type: "p", text: "Dans la plupart des concessions, les vendeurs utilisent leur téléphone personnel pour joindre les clients. C'est pratique : ils l'ont toujours sur eux, ils connaissent WhatsApp, le client a leur numéro direct. Personne ne remet ça en question — jusqu'au jour où ça pose problème." },
      { type: "h2", text: "Ce qui se passe quand le vendeur part" },
      { type: "p", text: "Le jour où un vendeur quitte la concession, son téléphone part avec lui. Et avec le téléphone : les conversations WhatsApp, les numéros des clients, l'historique des échanges, le contexte des affaires en cours. Le client, lui, continue d'appeler un numéro qui ne répond plus, ou qui répond à quelqu'un qui n'est plus chez vous." },
      { type: "ul", items: [
        "L'historique des échanges client n'appartient pas à la concession, mais au vendeur.",
        "Les affaires en cours perdent leur contexte du jour au lendemain.",
        "Le client a une relation avec une personne, pas avec la concession.",
        "Aucune traçabilité : impossible de savoir ce qui a été dit, promis, envoyé.",
      ] },
      { type: "h2", text: "Le sujet n'est pas le contrôle, c'est la continuité" },
      { type: "p", text: "Il ne s'agit pas de surveiller les vendeurs. Il s'agit de faire en sorte que la relation client appartienne à la concession, et qu'elle survive au départ d'un collaborateur. Quand un client rappelle, n'importe quel vendeur disponible doit pouvoir reprendre le dossier avec tout le contexte." },
      { type: "quote", text: "Un seul historique. Quand le vendeur part, il reste." },
      { type: "p", text: "C'est ce que permettent des communications rattachées à la fiche client : VOIP, WhatsApp Business, SMS et email passent par l'outil, avec les numéros de la concession. Le vendeur garde la même fluidité de travail, mais l'historique reste à la concession." },
    ],
  },
  {
    slug: "sources-de-leads-lesquelles-convertissent",
    title: "Sources de leads : lesquelles convertissent en concession",
    category: "Management",
    date: "2026-05-13",
    dateLabel: "13 mai 2026",
    readingTime: "6 min",
    excerpt:
      "La Centrale, AutoScout24, Leboncoin, site, salon, appel entrant : toutes les sources ne se valent pas. Encore faut-il les mesurer.",
    body: [
      { type: "p", text: "On dépense pour générer des leads : abonnements aux portails, référencement du site, présence en salon. Mais quand on demande quelle source convertit le mieux, la réponse est souvent une impression, pas un chiffre. Or les sources ne se valent pas, ni en volume, ni en taux de transformation, ni en marge finale." },
      { type: "h2", text: "Volume n'est pas valeur" },
      { type: "p", text: "Une source peut envoyer beaucoup de leads qui ne se transforment pas, et une autre peu de leads qui signent presque tous. Si on ne regarde que le volume, on continue à payer cher pour du bruit, et on sous-investit sur ce qui marche." },
      { type: "ul", items: [
        "Le taux de transformation par source : combien de leads finissent en BDC signé.",
        "Le délai de traitement : un lead portail non traité dans l'heure perd énormément de valeur.",
        "La marge moyenne par source : certains canaux amènent des affaires plus rentables que d'autres.",
        "L'affectation : qui reçoit le lead, et avec quelle réactivité.",
      ] },
      { type: "h2", text: "Le lead du lundi matin qui dort dans une boîte mail" },
      { type: "p", text: "Le pire ennemi du taux de transformation n'est pas la qualité de la source, c'est le délai. Un lead qui arrive le vendredi soir et qu'on traite le lundi après-midi a souvent déjà contacté trois autres concessions. La traçabilité de la source ne sert à rien si l'affectation et la relance ne suivent pas." },
      { type: "quote", text: "Combien de leads dorment dans une boîte mail le lundi matin ?" },
      { type: "h2", text: "Mesurer pour arbitrer" },
      { type: "p", text: "Tracer la source de chaque opportunité, suivre son devenir jusqu'au BDC, et mesurer la transformation par canal : c'est ce qui permet d'arbitrer les budgets d'acquisition sur des faits. On coupe ce qui ne convertit pas, on renforce ce qui signe." },
      { type: "p", text: "Dans One Data, la source de lead est tracée dès le premier contact et suivie tout au long du pipe. Le lead management complet — sources, affectation, relances — est inclus à partir du plan Connect." },
    ],
  },
  {
    slug: "delco-ce-quun-copilote-ia-doit-faire",
    title: "Delco : ce qu'un copilote IA doit faire (et ne pas faire)",
    category: "Delco IA",
    date: "2026-05-06",
    dateLabel: "6 mai 2026",
    readingTime: "5 min",
    excerpt:
      "Un copilote IA utile en concession ne génère pas du contenu à votre place. Il surveille votre activité et vous dit quoi faire en priorité.",
    body: [
      { type: "p", text: "L'IA dans les outils métier souffre d'un excès de promesses. On vend des copilotes qui rédigent, résument, prédisent et décident. En concession, la valeur n'est pas là. Un copilote utile fait moins de choses, mais les fait bien." },
      { type: "h2", text: "Ce qu'un copilote doit faire" },
      { type: "p", text: "Le vrai apport, c'est de transformer une masse de données en priorités d'action, adaptées au rôle de chacun." },
      { type: "ul", items: [
        "Surveiller l'activité en continu et remonter des signaux actionnables : propales en attente, leads sans action, devis ouvert plusieurs fois par un client.",
        "Adapter ces signaux au rôle : un vendeur, un chef des ventes et un directeur ne doivent pas voir la même chose.",
        "Répondre à une question posée en langage naturel par un chiffre et une liste, pas par un graphique à interpréter.",
        "Sortir un export PDF ou Excel prêt à partager, sans recopier dans un tableur.",
      ] },
      { type: "h2", text: "Ce qu'il ne doit pas prétendre faire" },
      { type: "p", text: "On préfère le dire clairement. Un copilote honnête ne fait pas semblant d'avoir des capacités qu'il n'a pas. Aujourd'hui, Delco ne fait pas d'analyse de sentiment des conversations, pas de synthèse automatique du contenu d'un appel, pas de rédaction de mails à votre place, pas de réponse automatique aux clients, et pas de prédiction de vente sans donnée derrière." },
      { type: "quote", text: "Même agent. Trois intelligences." },
      { type: "h2", text: "Pourquoi l'angle par rôle est le bon" },
      { type: "p", text: "La force d'un copilote n'est pas de tout faire pour tout le monde, mais de montrer à chacun ce qui le concerne. Le vendeur voit ses dossiers à relancer. Le chef des ventes voit son équipe à coacher. Le directeur voit ses sites qui décrochent. Même intelligence, lectures différentes." },
      { type: "p", text: "C'est cette discipline — faire peu, le faire bien, et assumer ce qu'on ne fait pas encore — qui rend un copilote crédible au quotidien. La rédaction assistée des relances est sur la roadmap. Quand elle sera en production, on le dira. Pas avant." },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
