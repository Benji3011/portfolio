export type Proof = {
  story: string;
  projectSlug?: string;
  result?: string;       // résultat spécifique à l’anecdote
  valueAdded?: string;   // ta valeur ajoutée dans l’anecdote
};

export type Skill = {
  slug: string;
  name: string;
  type: 'soft' | 'tech';
  level: 1 | 2 | 3 | 4 | 5;
  definition: string;       // inclut un ancrage “actualité/contexte”
  proofs: Proof[];          // 1 à 3 anecdotes, avec result/valueAdded
  results: string;          // impact global
  selfReview: string;       // recul global
  priority: 'haute' | 'moyenne' | 'basse';
  acquisitionSpeed: 'rapide' | 'normale' | 'à consolider';
  evolution: string;        // cap à moyen terme
  trainingsPlanned: string[]; // formations/autoformations à venir
  relatedProjects: string[];  // slugs de réalisations liées
};

export const skills: Skill[] = [
  // 1) Intégrations APIs (HubSpot, Smartsheet…)
  {
    slug: 'integration-apis',
    name: 'Intégrations APIs (HubSpot, Smartsheet…)',
    type: 'tech',
    level: 4,
    definition: `Concevoir, maintenir et fiabiliser des intégrations entre le CRM et des services externes. 
De la compréhension fonctionnelle du besoin (quelles données, à quelle fréquence, dans quel sens) jusqu’à la mise en œuvre technique et la supervision des échanges. 
Cette compétence demande rigueur, autonomie et communication constante entre équipes techniques et métiers.`,
    proofs: [
      {
        story: `Refonte complète du connecteur HubSpot ↔ CRM : audit du legacy, refactor Laravel 10, centralisation des appels API v3 et ajout d'une sandbox HubSpot pour tester les échanges en conditions réelles.`,
        projectSlug: 'integration-hubspot',
        result: `Synchronisations fiabilisées, disparition des incidents de doublons, visibilité claire sur les flux et les erreurs.`,
        valueAdded: `Capacité à partir d’un code obsolète pour le rendre maintenable, robuste et testable. Mise en place d’un environnement de test intégré au cycle de développement.`
      },
      {
        story: `Participation à l'intégration Smartsheet : analyse des schémas de données et conception d’un mapping dynamique pour alimenter les feuilles projets à partir du CRM.`,
        projectSlug: 'integration-smartsheet',
        result: `Alignement automatique des données projets entre CRM et Smartsheet, suppression de la double saisie côté CSM.`,
        valueAdded: `Compréhension du modèle de données métier, fiabilisation du cycle d’échanges, amélioration de la collaboration entre R&D et CSM.`
      },
      {
        story: `Contribution aux échanges API internes (CRM ↔ Portail RH) : création de routes REST sécurisées et documentation des endpoints partagés.`,
        projectSlug: 'api-observers-jobs',
        result: `Interopérabilité renforcée entre modules, uniformisation des pratiques d’appel API et meilleure réutilisabilité.`,
        valueAdded: `Standardisation de la structure des contrôleurs et middleware d’authentification API.`
      }
    ],
    results: `Des flux inter-applicatifs fiables, traçables et maintenables. 
Les intégrations ne sont plus des “zones grises” : elles sont documentées, supervisées et intégrées au cycle agile.`,
    selfReview: `Bonne maîtrise des intégrations REST et des mécanismes asynchrones (jobs, webhooks, retry). 
Prochain cap : renforcer la validation automatisée (tests de contrat, sandbox systématique).`,
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: `Industrialiser le monitoring des intégrations (alertes, dashboards), 
généraliser les tests contractuels et structurer une bibliothèque interne de connecteurs.`,
    trainingsPlanned: ['API Contract Testing (Pact)', 'API Observability – Q2 2025'],
    relatedProjects: ['integration-hubspot', 'integration-smartsheet', 'api-observers-jobs']
  },

// 2) Architecture backend (Laravel)
  {
    slug: 'architecture-backend-laravel',
    name: 'Architecture backend (Laravel)',
    type: 'tech',
    level: 4,
    definition: `Refactoriser du code legacy vers une base maintenable: services métier, jobs/queues, observers, séparation claire domaine/transport. Objectif: résilience et lisibilité.`,
    proofs: [
      {
        story: `Extraction de la logique HubSpot dans des services dédiés et jobs asynchrones; suppression des effets de bord, gestion centralisée des erreurs.`,
        projectSlug: 'integration-hubspot',
        result: `Synchronisations prévisibles et stables, code testable, onboarding dev facilité.`,
        valueAdded: `Découplage propre (services, jobs), conventions claires, points d’extension identifiés.`
      }
    ],
    results: `Baisse de la complexité, meilleure maintenabilité et temps de résolution d’incidents réduit.`,
    selfReview: `Encore des marges pour pousser DDD/hexagonal sur des modules transverses.`,
    priority: 'haute',
    acquisitionSpeed: 'normale',
    evolution: `Introduire des "domain services" partout où c’est pertinent et des ports/adapters sur les intégrations.`,
    trainingsPlanned: ['DDD appliqué à Laravel – Q4 2025'],
    relatedProjects: ['integration-hubspot']
  },

// 3) Communication technique
  {
    slug: 'communication-technique',
    name: 'Communication technique',
    type: 'soft',
    level: 4,
    definition: `Aligner devs, support et métiers autour de règles métier compréhensibles et de compromis documentés; rendre les erreurs actionnables et les décisions traçables.`,
    proofs: [
      {
        story: `Formalisation des cas d’échanges HubSpot (qui pousse quoi, quand, avec quels champs) + exemples concrets pour le support et le marketing.`,
        projectSlug: 'integration-hubspot',
        result: `Moins de malentendus, diagnostics plus rapides, meilleure prévisibilité des mises en prod.`,
        valueAdded: `Documents courts, orientés usages; messages d’erreur exploitables; schémas simples.`
      }
    ],
    results: `Décisions plus rapides et partagées, attentes réalistes côté métiers.`,
    selfReview: `Parfois trop détaillé; je tends vers des formats plus "lite" quand c’est suffisant.`,
    priority: 'moyenne',
    acquisitionSpeed: 'normale',
    evolution: `Généraliser les checklists de validation et les mini-schémas dans la doc.`,
    trainingsPlanned: ['Tech writing pragmatique – autoformation'],
    relatedProjects: ['integration-hubspot']
  },

// 4) Documentation & transfert
  {
    slug: 'documentation-transfert',
    name: 'Documentation & transfert',
    type: 'soft',
    level: 4,
    definition: `Produire des docs utiles (techniques et fonctionnelles) centrées sur l’exploitation: flux, endpoints, payloads, scénarios, runbooks et garde-fous (RGPD/sandbox).`,
    proofs: [
      {
        story: `Rédaction d’une doc technique (flux, endpoints, erreurs courantes) et d’une doc fonctionnelle (scénarios de synchro, cycles) pour HubSpot.`,
        projectSlug: 'integration-hubspot',
        result: `Onboarding accéléré, autonomie du support, continuité en cas de changement d’intervenants.`,
        valueAdded: `Structure stable (vue d’ensemble → cas d’usage → détails), liens croisés vers le code.`
      }
    ],
    results: `Moins de connaissance "tribale", transfert facilité et pérennité accrue.`,
    selfReview: `Risque de sur-documentation; je m’impose des limites de longueur et des annexes.`,
    priority: 'moyenne',
    acquisitionSpeed: 'normale',
    evolution: `Mutualiser des modèles de pages (flux, mapping) et un glossaire partagé.`,
    trainingsPlanned: ['Runbooks efficaces – autoformation'],
    relatedProjects: ['integration-hubspot']
  },

// 5) Gestion de projet (agile)
  {
    slug: 'gestion-de-projet-agile',
    name: 'Gestion de projet (agile)',
    type: 'soft',
    level: 4,
    definition: `Découper en incréments livrables, prioriser avec les interlocuteurs, cadencer les validations (sandbox) et sécuriser la mise en production.`,
    proofs: [
      {
        story: `Plan de reprise HubSpot en étapes: refactor → sandbox → mappages → erreurs/retries → doc; validations intermédiaires avec marketing/support.`,
        projectSlug: 'integration-hubspot',
        result: `Livraisons plus sereines, détection précoce des angles morts, moins de retours "surprise".`,
        valueAdded: `Roadmap pragmatique, feedbacks réguliers, critères d’acceptation clairs.`
      }
    ],
    results: `Prévisibilité accrue et meilleure adhésion des parties prenantes.`,
    selfReview: `Je peux mieux quantifier (lead time/throughput) pour objectiver les gains.`,
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: `Mettre 2–3 métriques simples et un mini rituel GO/NO-GO.`,
    trainingsPlanned: ['Metrics agiles pragmatiques – autoformation'],
    relatedProjects: ['integration-hubspot']
  },

  {
    slug: 'data-modeling-sql',
    name: 'Modélisation & SQL',
    type: 'tech',
    level: 3,
    definition:
        "Schémas relationnels, migrations, indexes, requêtes agrégées. Contexte : volumétrie croissante et besoins de reporting quasi-temps réel.",
    proofs: [
      {
        story: "Modèle contentieux (phases, états courants, coûts).",
        projectSlug: 'crm-contentieux',
        result: "Requêtes sur dernier état non ambiguës.",
        valueAdded: "Sous-requêtes + index ciblés."
      }
    ],
    results: "Rapports plus fiables, lectures plus rapides.",
    selfReview: "À progresser sur profiling des requêtes et tuning indexes.",
    priority: 'moyenne',
    acquisitionSpeed: 'normale',
    evolution: "Automatiser un audit de requêtes critiques + vues matérialisées si besoin.",
    trainingsPlanned: ["MySQL EXPLAIN avancé (autoformation)"],
    relatedProjects: ['crm-contentieux']
  },
  {
    slug: 'frontend-react-ts',
    name: 'Frontend (React + TS)',
    type: 'tech',
    level: 3,
    definition:
        "Composants réutilisables (MUI), pages Inertia, filtres et affichage structuré. Contexte : attentes de jury/recruteurs pour des écrans ‘jury-friendly’.",
    proofs: [
      {
        story: "Pages liste/détail projets + cartes réutilisables, filtres tags/tech, URL sync.",
        projectSlug: 'gestion-des-contacts-entreprises',
        result: "Lecture plus rapide et partage des vues filtrées.",
        valueAdded: "Composants MUI iso, état URL-drive."
      }
    ],
    results: "Décision plus rapide côté lecteur (jury/recruteur).",
    selfReview: "À renforcer sur tests UI (Playwright) et Storybook.",
    priority: 'moyenne',
    acquisitionSpeed: 'normale',
    evolution: "Mettre en place des tests end-to-end basiques.",
    trainingsPlanned: ["Playwright basics (Q4 2025)"],
    relatedProjects: ['gestion-des-contacts-entreprises']
  },
  {
    slug: 'ci-cd-qualite',
    name: 'Qualité & CI/CD',
    type: 'tech',
    level: 3,
    definition:
        "Pipelines d’intégration/déploiement, checks pré-release, tests de base. Contexte : demandes de fiabilité et régression zéro sur documents fiscaux.",
    proofs: [
      {
        story: "Stabilisation génération PDF (devis/factures) et checks en CI.",
        projectSlug: 'facturation-documents-pdf-devis-facture',
        result: "Régressions en baisse, incidents plus rares.",
        valueAdded: "Gabarits unifiés + tests visuels simples."
      }
    ],
    results: "Livraisons plus prévisibles, support soulagé.",
    selfReview: "OK sur le socle, à outiller davantage la mesure (DORA).",
    priority: 'moyenne',
    acquisitionSpeed: 'à consolider',
    evolution: "Automatiser changelog + indicateurs de stabilité.",
    trainingsPlanned: ["CI pipelines avancés (GitLab)"],
    relatedProjects: ['facturation-documents-pdf-devis-facture']
  },
  {
    slug: 'problem-solving',
    name: 'Résolution de problèmes',
    type: 'soft',
    level: 4,
    definition:
        "Analyse cause racine, sécurisation du correctif, prévention régression. Contexte : réduire MTTR côté support.",
    proofs: [
      {
        story: "Stabilisation exports volumineux / PDFs fragiles.",
        projectSlug: 'facturation-documents-pdf-devis-facture',
        result: "Incidents récurrents éliminés.",
        valueAdded: "Tests ciblés + logs utiles."
      }
    ],
    results: "Confiance accrue des équipes, interruptions réduites.",
    selfReview: "Tendance à sur-sécuriser (trade-off à garder en tête).",
    priority: 'moyenne',
    acquisitionSpeed: 'rapide',
    evolution: "Observer plus tôt via alertes/metrics.",
    trainingsPlanned: ["Incident response fundamentals"],
    relatedProjects: ['facturation-documents-pdf-devis-facture']
  },
  {
    slug: 'collaboration-cross-team',
    name: 'Collaboration cross-équipe',
    type: 'soft',
    level: 4,
    definition:
        "Travail avec R&D/CSM/Support/Métier ; alignement des impacts. Contexte : dépendances multiples et releases fréquentes.",
    proofs: [
      {
        story: "Atterrissage incréments en accord avec Support/CSM (impacts clients).",
        projectSlug: 'crm-contentieux',
        result: "Mises en prod sans surprise et décisions partagées.",
        valueAdded: "Rituels courts de synchro + pré-release."
      }
    ],
    results: "Moins de frictions inter-équipes.",
    selfReview: "Mieux cadrer les ‘cut-off’ release.",
    priority: 'moyenne',
    acquisitionSpeed: 'normale',
    evolution: "GO/NO-GO systématique et checklist de sortie.",
    trainingsPlanned: ["Release management pragmatique"],
    relatedProjects: ['crm-contentieux']
  }
];
