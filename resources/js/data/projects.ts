export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  tech: string[];
  highlights: string[];
  examples: Array<{ key: string; summary: string; type?: string; status?: string; date?: string }>;
  timeframe?: { start: string; end?: string };
  resources?: { type:'front'|'code'|'schema'|'other'; title:string; path:string }[];
};

export const projects: Project[] = [
  {
    slug: "tableau-suivi-impayes",
    title: "Refonte du tableau de bord de suivi des impayés",
    summary: "Reconstruction complète du tableau de bord des impayés dans le CRM pour offrir une vision détaillée, hiérarchique et exploitable des montants dus. L’objectif : fiabiliser les données, identifier clairement qui doit agir et faciliter le pilotage des relances par service.",
    tags: ["Finance", "Reporting", "UI/UX"],
    tech: ["Laravel 10", "Eloquent ORM", "Blade", "Datatables", "SQL"],
    highlights: [
      "Passage d’un tableau statique à un tableau de bord interactif : clic sur un service pour afficher le détail des impayés associés (retard, amiable, IP…).",
      "Refonte des requêtes SQL en Eloquent pour agréger les informations provenant de plusieurs tables (factures, sociétés, litiges, utilisateurs).",
      "Ajout de regroupements hiérarchiques : 'Qui doit agir' (ADV, SALES, JURIDIQUE, etc.) et tranche d’ancienneté de l’impayé (<30J, >60J, >120J…).",
      "Calculs automatiques des totaux HT, taux de retard et autres agrégations par niveau de responsabilité.",
      "Amélioration de la lisibilité et du pilotage global des relances : identification rapide des acteurs bloquants et des montants prioritaires."
    ],
    examples: [
      {
        key: "Contexte et objectifs",
        summary: "L’ancien tableau de bord des impayés affichait uniquement des totaux globaux par catégorie de retard, sans possibilité d’analyse fine. Le besoin exprimé par la Finance et le Juridique était d’obtenir une vue consolidée, hiérarchisée par service et tranche de délai.",
        type: "Métier",
        status: "done",
        date: "2025-03"
      },
      {
        key: "Optimisation des requêtes et modélisation",
        summary: "Réécriture complète des requêtes SQL en Eloquent pour agréger les données de factures, clients, litiges et services. Les jointures multiples ont été optimisées pour conserver de bonnes performances malgré un volume important de données.",
        type: "Technique",
        status: "done",
        date: "2025-03"
      },
      {
        key: "Interface et expérience utilisateur",
        summary: "Refonte du tableau Blade avec regroupements par acteur et tranches de retard. Ajout d’un système de clic/expansion pour afficher le détail des impayés (type, montant, société). Les totaux se recalculent dynamiquement selon la vue ouverte.",
        type: "Technique",
        status: "done",
        date: "2025-04"
      },
      {
        key: "Résultats et impacts",
        summary: "Visibilité immédiate sur les montants dus par service, réduction du temps d’analyse pour la Finance et le Juridique, meilleure priorisation des relances. La direction dispose désormais d’une base fiable pour suivre l’évolution des impayés.",
        type: "Métier",
        status: "done",
        date: "2025-04"
      },
      {
        key: "Regard critique et perspectives",
        summary: "Le tableau est aujourd’hui exhaustif et clair, mais pourrait évoluer vers un véritable dashboard interactif avec filtres, graphiques et alertes automatiques (via notifications ou exports hebdomadaires).",
        type: "Analyse",
        status: "ongoing",
        date: "2025-05"
      }
    ],
    timeframe: { start: "2025-02", end: "2025-04" },
    resources: [
      { type: "front",  title: "Dashboard impayés (vue hiérarchique + détail)",    path: "/images/projects/tableau-impayes/front-dashboard.png" },
      { type: "code",   title: "Requête Eloquent multi-relations (agrégations)",   path: "/images/projects/tableau-impayes/code-eloquent-joins.png" },
      { type: "schema", title: "Structure données Finance (factures/sociétés)",    path: "/images/projects/tableau-impayes/schema-finance.png" }
    ]
  },
  {
    slug: "facturation-documents-pdf-devis-facture",
    title: "Stabilisation et refonte du moteur PDF (Devis, Commandes, Factures)",
    summary: "Refonte complète du système de génération PDF du CRM pour fiabiliser les documents clients (devis, commandes, factures). Objectif : améliorer la maintenabilité du code Blade, optimiser la mise en page et garantir la cohérence visuelle de l’ensemble des documents légaux.",
    tags: ["PDF", "Refactor", "Maintenance", "UI/UX"],
    tech: ["Blade", "DOMPDF"],
    highlights: [
      "Factorisation complète des gabarits Blade : suppression des duplications et mutualisation des blocs communs (entêtes, totaux, mentions légales).",
      "Création d’un fichier maître contrôlant le rendu selon le contexte (devis, commande, facture).",
      "Amélioration de la lisibilité et de l’ergonomie des PDF pour réduire les pertes d’espace et les sauts de page inutiles.",
      "Refonte de la logique de calcul et validation des données en amont pour éviter les erreurs silencieuses.",
      "Standardisation des styles et gabarits pour renforcer l’image professionnelle des documents clients."
    ],
    examples: [
      {
        key: "Contexte et objectifs",
        summary: "Les gabarits PDF historiques comportaient de nombreuses redondances, des calculs dispersés et une maintenance difficile. L’objectif était de fiabiliser le rendu des documents commerciaux tout en rationalisant le code et en améliorant l’apparence perçue côté client.",
        type: "Métier",
        status: "done",
        date: "2024-11"
      },
      {
        key: "Refonte technique",
        summary: "Fusion des templates Blade existants en un ensemble modulaire. Mise en place de sections communes (en-têtes, pied de page, totaux) et d’un contrôleur de rendu capable d’adapter le contenu au type de document. Ajout d’une validation préalable des données et d’une gestion d’erreurs explicite.",
        type: "Technique",
        status: "done",
        date: "2024-12"
      },
      {
        key: "Acteurs & interactions",
        summary: "Collaboration étroite avec les équipes ADV et Delivery pour valider la conformité des PDF et la cohérence des totaux avant mise en production.",
        type: "Collaboration",
        status: "done",
        date: "2024-12"
      },
      {
        key: "Optimisation du rendu PDF",
        summary: "Travail sur la mise en page : ajustement des marges, compression des espaces, gestion intelligente des sauts de page et équilibrage du contenu sur une seule page quand possible. Les documents conservent une apparence homogène et lisible quel que soit le contexte d’impression.",
        type: "Technique",
        status: "done",
        date: "2025-01"
      },
      {
        key: "Résultats et impacts",
        summary: "Maintenance simplifiée, erreurs de génération quasi nulles et rendu visuel plus professionnel. Les documents PDF ne se chevauchent plus et reflètent mieux l’identité graphique d’Eurécia, renforçant la crédibilité des échanges clients.",
        type: "Métier",
        status: "done",
        date: "2025-02"
      },
      {
        key: "Regard critique et perspectives",
        summary: "Le projet a amélioré la stabilité et la lisibilité du code, mais une migration future vers un moteur de génération asynchrone (queues + prévisualisation) permettrait encore d’alléger la charge serveur et d’ajouter des contrôles qualité automatisés avant envoi.",
        type: "Analyse",
        status: "ongoing",
        date: "2025-03"
      }
    ],
    timeframe: { start: "2024-11", end: "2025-02" },
    resources: [
      { type: "front",  title: "Ancienne architecture des fichiers blade",         path: "/images/projects/facturation-pdf/avant_pdf.png" },
      { type: "code",   title: "Blade factorisé (layout maître + sections)",       path: "/images/projects/facturation-pdf/apres_pdf.png" },
      { type: "schema", title: "Ancienne Architecture services PDF (calculs/formatage)",    path: "/images/projects/facturation-pdf/old_structure_business.png" },
      { type: "schema", title: "Nouvelle Architecture services PDF (calculs/formatage)",    path: "/images/projects/facturation-pdf/new_structure_business.png" }
    ]
  },
  {
    slug: 'integration-hubspot',
    title: 'Refonte du connecteur HubSpot ↔ CRM',
    summary: `Modernisation complète du connecteur entre le CRM interne et HubSpot : refactor du code legacy, centralisation des appels API v3 et mise en place d’une sandbox d’intégration pour tester en conditions réelles sans impacter la production.`,
    tags: ['API', 'Intégration', 'HubSpot', 'Sandbox'],
    tech: ['Jobs', 'Queues', 'Webhooks'],
    highlights: [
      'Sandbox HubSpot reliée au CRM (tests réalistes hors production)',
      'Refactor complet du legacy en services, jobs et contrôleurs Laravel',
      'Gestion d’erreurs normalisée (4xx/5xx), retries progressifs et logs contextualisés',
      'Mappings Contacts/Companies fiabilisés (suppression des doublons)',
      'Documentation technique et fonctionnelle claire (flux, scénarios, payloads)'
    ],
    examples: [
      {
        key: 'Contexte et objectifs',
        summary: `Le connecteur HubSpot existant était obsolète et non supervisé. Objectif : fiabiliser les synchronisations CRM ↔ HubSpot, centraliser la logique, et permettre des tests réalistes via une sandbox dédiée.`,
        type: 'Métier',
        status: 'done',
        date: '2024-03'
      },
      {
        key: 'Architecture et développement',
        summary: `Refactor complet du connecteur : services dédiés HubSpot API v3, jobs asynchrones avec retry/backoff, supervision des flux et sandbox d’intégration (OAuth2, dataset de test, logs contextualisés).`,
        type: 'Technique',
        status: 'done',
        date: '2024-06'
      },
      {
        key: 'Collaboration et pilotage',
        summary: `Travail coordonné entre R&D (backend), marketing (utilisateurs HubSpot) et support CRM pour valider les flux réels. Pilotage via Jira, documentation et schémas Confluence.`,
        type: 'Collaboration',
        status: 'done',
        date: '2024-07'
      },
      {
        key: 'Résultats et impacts',
        summary: `Synchronisations désormais fiables et traçables. Les tests en sandbox évitent les incidents sur données clients, réduisent les doublons et accélèrent la mise en production des évolutions HubSpot.`,
        type: 'Métier',
        status: 'done',
        date: '2024-10'
      },
      {
        key: 'Regard critique et perspectives',
        summary: `La complexité majeure résidait dans la dette du legacy et la gestion des erreurs API. Le connecteur est désormais stable, mais une supervision temps réel (alertes Slack, tests automatisés) renforcerait encore la réactivité.`,
        type: 'Analyse',
        status: 'ongoing',
        date: '2025-02'
      }
    ],
    timeframe: { start: '2024-03', end: '2025-02' },
    resources: [
      { type: 'front',  title: 'Écran de suivi des synchronisations HubSpot', path: '/images/projects/integration-hubspot/front-suivi-sync.png' },
      { type: 'code',   title: 'Client API v3 centralisé (Laravel)',          path: '/images/projects/integration-hubspot/code-client-api.png' },
      { type: 'schema', title: 'Schéma des échanges CRM ↔ HubSpot',           path: '/images/projects/integration-hubspot/schema-echanges.png' }
    ]
  },
  {
    slug: "crm-contentieux",
    title: "Module de pilotage des contentieux (CRM)",
    summary: "Conception et développement complet d’un module CRM dédié au suivi des litiges clients : formulaire dynamique, historisation des phases et automatisation des échéances. Le projet fiabilise la traçabilité juridique et réduit drastiquement le temps de saisie pour les équipes ADV et Juridique.",
    tags: ["Formulaire dynamique", "Juridique"],
    tech: ["Blade", "AJAX", "Eloquent ORM", "SQL"],
    highlights: [
      "Création du schéma de données complet (plus d’une dizaine de nouvelles tables : litiges, phases, coûts, états, historiques).",
      "Développement full-stack du formulaire dynamique avec règles conditionnelles et visibilité contextuelle selon le statut du litige.",
      "Historisation automatique des changements d’état et calcul des dates clés (clôture, appels, pourvois).",
      "Fusion des sections financières et risques en un seul onglet logique « Risques & Finances ».",
      "Préparation du futur tableau récapitulatif global (vue consolidée de tous les contentieux avec rappels et alertes automatiques)."
    ],
    examples: [
      {
        key: "Contexte et objectifs",
        summary: "Le juridique devait suivre les contentieux dans des feuilles manuelles sans historisation. Objectif : centraliser les litiges dans le CRM, fiabiliser le parcours d’un dossier (de l’amiable à la cassation) et automatiser les rappels pour gagner du temps et éviter les oublis critiques.",
        type: "Métier",
        status: "done",
        date: "2025-03"
      },
      {
        key: "Architecture et modélisation",
        summary: "Conception du modèle de données et du diagramme de classes (litiges, phases, coûts, sources, historiques). Ajout de tables pivot et de contraintes pour garantir l’intégrité référentielle. Implémentation complète des migrations, seeders et relations Eloquent.",
        type: "Technique",
        status: "done",
        date: "2025-03"
      },
      {
        key: "Formulaire dynamique multi-phases",
        summary: "Développement du formulaire principal en Blade + AJAX : affichage conditionnel des champs selon la phase (Amiable, Injonction, Appel…). Chaque changement de statut crée une nouvelle entrée d’historique avec horodatage automatique. Les champs spécifiques (ex. « Date limite d’appel ») se calculent et s’affichent dynamiquement.",
        type: "Technique",
        status: "done",
        date: "2025-04"
      },
      {
        key: "Résultats et impacts",
        summary: "Gain de temps considérable pour le service Juridique : saisie divisée par 2, suppression des doubles saisies et fiabilisation des échéances. Les rappels automatiques de prochaine étape et la chronologie des statuts garantissent la continuité du traitement.",
        type: "Métier",
        status: "done",
        date: "2025-04"
      },
      {
        key: "Regard critique et perspectives",
        summary: "La complexité principale a résidé dans la gestion des champs dynamiques par phase et l’historisation des changements d’état. Avec le recul, une abstraction front plus modulaire (composants Vue/React) et un moteur de règles configurables côté back permettraient d’alléger le code Blade et d’ouvrir la maintenance à d’autres équipes.",
        type: "Analyse",
        status: "ongoing",
        date: "2025-05"
      }
    ],
    timeframe: { start: "2025-01", end: "2025-04" },
    resources: [
      { type: "front",  title: "Formulaire dynamique multi-phases (vue globale)", path: "/images/projects/crm-contentieux/front-formulaire.png" },
      { type: "code",   title: "Historisation des statuts (Controller/Service)",  path: "/images/projects/crm-contentieux/code-historisation.png" },
      { type: "schema", title: "MCD Contentieux (phases/états/coûts)",            path: "/images/projects/crm-contentieux/schema-mcd.png" }
    ]
  },
  {
    slug: "offres-pack-upsell",
    title: "Sécurisation des offres packagées & pilotage des upsells",
    summary: "Mise en place d’un mécanisme de contrôle des offres commerciales dans le CRM pour éviter le mélange entre anciennes offres à la carte et nouvelles offres packagées. L’objectif était de fiabiliser la facturation, d’aider les commerciaux à identifier les clients à upseller et d’améliorer la cohérence globale des données de commande.",
    tags: ["Upsell"],
    tech: ["Blade", "Eloquent ORM"],
    highlights: [
      "Ajout d’une hiérarchie parent/enfant dans la table `orders` pour lier les anciennes commandes aux nouvelles offres.",
      "Implémentation de règles métier strictes empêchant la cohabitation d’offres incompatibles sur un même client.",
      "Interface CRM dédiée aux commerciaux avec alertes et modales de confirmation avant saisie d’une commande incompatible.",
      "Contrôles synchrones (front) et asynchrones (back) pour garantir la cohérence de la facturation.",
      "Amélioration de la qualité des données et de la lisibilité de la base installée pour le pilotage des upsells."
    ],
    examples: [
      {
        key: "Contexte et objectifs",
        summary: "Les anciennes offres à la carte coexistaient avec les nouvelles offres packagées, entraînant des incohérences dans la facturation et le suivi client. Le besoin était de sécuriser la saisie des commandes et d’aider les commerciaux à identifier les clients éligibles à un passage en pack.",
        type: "Métier",
        status: "done",
        date: "2025-02"
      },
      {
        key: "Architecture et données",
        summary: "Ajout de nouvelles colonnes et relations dans la base `orders` pour gérer les liens parent/enfant entre commandes. Création de contraintes côté back pour interdire la coexistence d’offres incompatibles et garantir la cohérence des montants et statuts.",
        type: "Technique",
        status: "done",
        date: "2025-03"
      },
      {
        key: "Interface et validations front",
        summary: "Développement d’une interface CRM dédiée aux commerciaux : alertes visuelles et modales de confirmation en cas d’incompatibilité détectée. Les règles métiers sont traduites en validations dynamiques pour éviter les erreurs dès la saisie.",
        type: "Technique",
        status: "done",
        date: "2025-03"
      },
      {
        key: "Résultats et impacts",
        summary: "Cohérence accrue des données de commande et suppression des erreurs de facturation liées au mélange d’offres. Meilleur pilotage des opportunités d’upsell et communication simplifiée entre CSM, ADV et Finance.",
        type: "Métier",
        status: "done",
        date: "2025-04"
      },
      {
        key: "Regard critique et perspectives",
        summary: "Le projet a renforcé la cohérence commerciale, mais une automatisation partielle de la détection des clients à upseller (tag ou rapport dédié) permettrait encore d’améliorer le pilotage et le suivi par les équipes Sales.",
        type: "Analyse",
        status: "ongoing",
        date: "2025-05"
      }
    ],
    timeframe: { start: "2025-02", end: "2025-04" },
    resources: [
      { type: "front",  title: "UI vendeur (alertes & modales incompatibilités)",  path: "/images/projects/offres-pack-upsell/front-ui-vendeur.png" },
      { type: "code",   title: "Règles back de compatibilité (orders parent/enfant)", path: "/images/projects/offres-pack-upsell/code-regles-compat.png" },
      { type: "schema", title: "Modèle données offres pack / à la carte",          path: "/images/projects/offres-pack-upsell/schema-offres.png" }
    ]
  },
  {
    slug: "integration-smartsheet",
    title: "Intégration Smartsheet FMP ↔ CRM (webhooks + feuille Sous-traitants)",
    summary:
        "Mise en place d’un pont robuste entre le CRM et Smartsheet : création/activation de webhooks côté Smartsheet pour pousser des événements vers le CRM (affectations, statuts, bilans…), et intégration d’une nouvelle feuille FMP dédiée aux Sous-traitants afin d’automatiser les calculs de commissions via un mapping complet des produits/colonnes.",
    tags: ["Intégration", "Smartsheet", "API", "Sandbox"],
    tech: ["Jobs", "Postman"],
    highlights: [
      "Webhooks Smartsheet → CRM : déclaration, activation, filtrage par colonnes, callbacks dédiés",
      "Vérification HMAC côté CRM et flux idempotents avec retries",
      "Nouvelle feuille FMP Sous-traitants intégrée (mapping produits/colonnes + règles packs/options)",
      "Conditions d’envoi des commandes (type, FMP, sous-types) et calcul de charge projet",
      "Documentation interne claire (fonctionnement général, règles de gestion, séquence de traitement)"
    ],
    examples: [
      {
        key: "Objectifs & Enjeux",
        summary:
            "Supprimer la double saisie et fiabiliser la donnée Delivery/CSM : les commandes éligibles sont poussées dans Smartsheet, qui renvoie au CRM les événements clés (affectations, statuts, bilans) pour tenir la fiche client à jour et piloter la charge FMP."
      },
      {
        key: "Webhooks Smartsheet → CRM",
        summary:
            "Création et activation de webhooks via Postman (scope feuille + subscope colonIds). Mise en place des endpoints CRM (assignment, activity, bilan) avec contrôle HMAC et traitement métier centralisé. Les callbacks ne s’activent qu’une fois la validation et l’accessibilité du CRM vérifiées.",
        type: "Technique",
        status: "done",
        date: "2025-04"
      },
      {
        key: "Intégration de la feuille FMP Sous-traitants",
        summary:
            "Ajout d’une feuille dédiée aux Sous-traitants pour calculer automatiquement les commissions : mapping dynamique des produits (modules, options, formations, packs) → colonnes Smartsheet, gestion des cas particuliers (packs, signature, quantités), et envoi des valeurs par lignes commande.",
        type: "Métier",
        status: "done",
        date: "2025-03"
      },
      {
        key: "Règles d’éligibilité & Calcul de charge",
        summary:
            "Application des règles d’envoi (exclusions extensions sans FMP, packs signatures seuls, upsell users…). Calcul de charge projet avec ajustements (offres packagées, effectifs, cas services/extension) pour alimenter Smartsheet et l’affectation des consultants.",
        type: "Métier",
        status: "done",
        date: "2025-01"
      },
      {
        key: "Résultats & Robustesse",
        summary:
            "Synchronisation fiable (jobs planifiés, idempotence), réduction des erreurs de versionnement, visibilité transverse (CRM ↔ Smartsheet). La maîtrise de la sandbox Smartsheet a permis d’itérer rapidement sur les mappings et les quotas API."
      }
    ],
    timeframe: { start: "2025-01", end: "2025-04" },
    resources: [
      { type: "front",  title: "Feuille FMP Sous-traitants intégrée (CRM)",        path: "/images/projects/integration-smartsheet/front-feuille-fmp.png" },
      { type: "code",   title: "Webhook Smartsheet → CRM (vérif. HMAC)",           path: "/images/projects/integration-smartsheet/code-webhook-hmac.png" },
      { type: "schema", title: "Flux d’intégration (CRM ↔ Smartsheet)",            path: "/images/projects/integration-smartsheet/schema-flux.png" }
    ]
  }
];
