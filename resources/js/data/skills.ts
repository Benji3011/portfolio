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
  {
    slug: 'architecture-backend-laravel',
    name: 'Architecture backend (Laravel)',
    type: 'tech',
    level: 4,
    definition: `Concevoir et faire évoluer des modules Laravel maintenables, testables et résilients. 
Séparation claire domaine/transport, services métiers explicites, jobs & queues pour l’asynchrone, validation systématique des données et journalisation exploitable par le support. 
Cette compétence s’exerce dans un contexte à forte criticité (documents légaux, synchronisations externes, workflows contentieux) où la fiabilité et la lisibilité du code sont essentielles à la confiance produit.`,
    proofs: [
      {
        story: `Refonte du moteur de génération PDF : factorisation des gabarits Blade, validation des entrées et séparation des couches métier/présentation.`,
        projectSlug: 'facturation-documents-pdf-devis-facture',
        result: `Régressions PDF quasi nulles et maintenance simplifiée.`,
        valueAdded: `Adoption d’une architecture claire (controller → service → ressource) avec messages d’erreur actionnables pour le support.`
      },
      {
        story: `Création d’observers et de jobs planifiés pour découpler les effets de bord et fiabiliser les traitements.`,
        projectSlug: 'api-observers-jobs',
        result: `Traitements asynchrones robustes et UX fluidifiée.`,
        valueAdded: `Maîtrise des patterns de résilience (queues, retry, logs structurés).`
      },
      {
        story: `Modélisation du module Contentieux : conception du modèle de données et logique d’historisation des phases et statuts.`,
        projectSlug: 'crm-contentieux',
        result: `Données cohérentes et reporting fiable.`,
        valueAdded: `Capacité à relier conception technique et logique métier complexe.`
      }
    ],
    results: `Un socle backend robuste, documenté et prévisible, facilitant l’onboarding et réduisant les risques de régression.`,
    selfReview: `Solide sur Laravel moderne et l’asynchrone. Poursuivre vers une architecture DDD légère et une observabilité unifiée.`,
    priority: 'haute',
    acquisitionSpeed: 'normale',
    evolution: `Généraliser la structure “domain services + ports/adapters” et outiller un gabarit de module réutilisable.`,
    trainingsPlanned: [
      'DDD appliqué à Laravel – Q4 2025',
      'Observabilité applicative (logs/metrics/traces)'
    ],
    relatedProjects: [
      'facturation-documents-pdf-devis-facture',
      'api-observers-jobs',
      'crm-contentieux'
    ]
  },
  {
    slug: 'integration-apis',
    name: 'Intégrations APIs (HubSpot, Smartsheet…)',
    type: 'tech',
    level: 4,
    definition: `Concevoir, maintenir et fiabiliser des intégrations entre le CRM et des services externes. 
De la compréhension fonctionnelle du besoin jusqu’à la supervision des échanges, en garantissant sécurité, idempotence et performance. 
Cette compétence repose sur la rigueur et la communication transverse entre équipes techniques et métiers.`,
    proofs: [
      {
        story: `Refonte du connecteur HubSpot ↔ CRM : audit du legacy, refactor Laravel 10 et ajout d’une sandbox HubSpot.`,
        projectSlug: 'integration-hubspot',
        result: `Synchronisations fiabilisées et disparition des doublons.`,
        valueAdded: `Refactor complet d’un code obsolète vers une base robuste et testable.`
      },
      {
        story: `Mise en place des webhooks Smartsheet → CRM : configuration, vérification HMAC et intégration de la feuille FMP Sous-traitants.`,
        projectSlug: 'integration-smartsheet',
        result: `Synchronisation bidirectionnelle fiable et suppression de la double saisie.`,
        valueAdded: `Maîtrise complète de la Smartsheet API (webhooks, sandbox, mapping dynamique).`
      },
      {
        story: `Contribution aux échanges API internes (CRM ↔ Portail RH) : conception de routes REST sécurisées et documentation partagée.`,
        projectSlug: 'api-observers-jobs',
        result: `Interopérabilité renforcée et standardisation des pratiques API.`,
        valueAdded: `Vision transverse des flux inter-applicatifs et homogénéisation du code.`
      }
    ],
    results: `Des intégrations fiables, traçables et documentées, intégrées au cycle agile de développement.`,
    selfReview: `Solide sur REST, webhooks et asynchrone. Poursuivre sur la validation contractuelle (tests Pact) et la supervision globale.`,
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: `Industrialiser la supervision (dashboards, alerting) et créer une bibliothèque interne de connecteurs réutilisables.`,
    trainingsPlanned: [
      'API Contract Testing (Pact)',
      'API Observability – Q2 2025',
      'Smartsheet API Advanced – Webhooks & Sandbox'
    ],
    relatedProjects: [
      'integration-hubspot',
      'integration-smartsheet',
      'api-observers-jobs'
    ]
  },
  {
    slug: 'data-modeling-sql',
    name: 'Data modeling & SQL avancé',
    type: 'tech',
    level: 4,
    definition: `Concevoir et normaliser des modèles de données fiables et performants dans un environnement multi-modules. 
Compétence exercée dans un contexte où la qualité et la traçabilité de la donnée sont essentielles à la prise de décision et à la stabilité des applications.`,
    proofs: [
      {
        story: `Modélisation complète du module Contentieux avec gestion des phases, états, coûts et historiques.`,
        projectSlug: 'crm-contentieux',
        result: `Données interrogeables sans ambiguïté et parcours de litige reconstituable.`,
        valueAdded: `Transformation d’un besoin métier en modèle relationnel stable et documenté.`
      },
      {
        story: `Optimisation des requêtes du reporting Contentieux avec sous-requêtes sur le dernier état et indexation ciblée.`,
        projectSlug: 'crm-contentieux',
        result: `Requêtes 40 % plus rapides et indicateurs fiables.`,
        valueAdded: `Approche orientée performance et lisibilité SQL.`
      },
      {
        story: `Ajout de contraintes d’intégrité et de cascades sur les modules Facturation et Offres pour fiabiliser la base.`,
        projectSlug: 'facturation-documents-pdf-devis-facture',
        result: `Réduction des incohérences et simplification des contrôles applicatifs.`,
        valueAdded: `Rigueur dans la conception et cohérence inter-domaines.`
      }
    ],
    results: `Des modèles robustes et cohérents entre modules, supportant un reporting fiable et une exploitation métier fluide.`,
    selfReview: `Très à l’aise sur la modélisation et l’écriture SQL. À renforcer : automatisation des tests d’intégrité.`,
    priority: 'haute',
    acquisitionSpeed: 'normale',
    evolution: `Industrialiser la vérification des modèles (tests DB automatisés) et améliorer la visualisation des dépendances entre tables.`,
    trainingsPlanned: [
      'Optimisation SQL & indexation avancée – Q1 2026',
      'Event Sourcing & audit des données',
      'Automated database testing (Laravel/PHPUnit DB)'
    ],
    relatedProjects: ['crm-contentieux', 'facturation-documents-pdf-devis-facture']
  },
  {
    slug: 'code-quality-maintainability',
    name: 'Qualité & maintenabilité du code',
    type: 'tech',
    level: 4,
    definition: `Concevoir du code clair, prévisible et durable en appliquant des principes de conception (KISS, DRY, SOLID) et des conventions partagées. 
Cette compétence s’exerce dans un environnement multi-projets où la dette technique doit être maîtrisée sans bloquer la livraison.`,
    proofs: [
      {
        story: `Refonte du moteur PDF : suppression des duplications Blade et création d’un gabarit centralisé.`,
        projectSlug: 'facturation-documents-pdf-devis-facture',
        result: `Maintenance simplifiée et cohérence visuelle renforcée.`,
        valueAdded: `Refactor propre et mesuré, sans rupture fonctionnelle.`
      },
      {
        story: `Uniformisation des conventions Laravel (services, contrôleurs, validations) sur l’ensemble du CRM.`,
        projectSlug: 'architecture-backend-laravel',
        result: `Homogénéité du code et onboarding accéléré.`,
        valueAdded: `Imposition de standards de développement clairs et partagés.`
      },
      {
        story: `Audit et nettoyage des modules legacy : suppression des quick fixes, extraction en services dédiés.`,
        projectSlug: 'api-observers-jobs',
        result: `Réduction de la dette technique et prévisibilité accrue.`,
        valueAdded: `Approche structurée et rigoureuse du refactoring.`
      }
    ],
    results: `Un codebase harmonisé et pérenne, où la maintenabilité et la lisibilité priment sur la rapidité brute.`,
    selfReview: `Très bon niveau de rigueur et de lisibilité ; à compléter par une couverture de tests plus systématique.`,
    priority: 'haute',
    acquisitionSpeed: 'normale',
    evolution: `Déployer des contrôles qualité automatisés (linters, tests, métriques) et formaliser un guide interne de développement.`,
    trainingsPlanned: [
      'Refactoring to Patterns (Fowler)',
      'Laravel Best Practices & Code Review – interne',
      'Static analysis & CI quality gates'
    ],
    relatedProjects: [
      'facturation-documents-pdf-devis-facture',
      'architecture-backend-laravel',
      'api-observers-jobs'
    ]
  },
  {
    slug: 'asynchronous-orchestration',
    name: 'Orchestration & traitements asynchrones',
    type: 'tech',
    level: 4,
    definition: `Concevoir et maintenir des traitements asynchrones fiables (jobs, queues, schedulers) pour absorber les pics de charge et découpler les effets de bord. 
Compétence essentielle pour la performance et la stabilité du CRM dans un environnement de flux multiples.`,
    proofs: [
      {
        story: `Mise en place d’observers et de jobs planifiés pour les recalculs et notifications automatiques.`,
        projectSlug: 'api-observers-jobs',
        result: `Temps de réponse réduit et meilleure réactivité côté front.`,
        valueAdded: `Conception asynchrone intégrée sans impacter le comportement utilisateur.`
      },
      {
        story: `Exécution différée des synchronisations externes (HubSpot, Smartsheet) via Scheduler et retry contrôlé.`,
        projectSlug: 'integration-smartsheet',
        result: `Moins d’erreurs API et meilleure stabilité du système.`,
        valueAdded: `Maîtrise des stratégies de reprise et gestion fine des quotas API.`
      },
      {
        story: `Refactor des batchs internes pour découper les traitements volumineux en jobs unitaires supervisés.`,
        projectSlug: 'architecture-backend-laravel',
        result: `Performance accrue et logs exploitables pour le suivi en production.`,
        valueAdded: `Vision globale sur l’impact des tâches planifiées et leur résilience.`
      }
    ],
    results: `Un système asynchrone maîtrisé, garantissant la fluidité du CRM et la robustesse des intégrations.`,
    selfReview: `Très bon niveau sur les patterns Laravel Queue et Scheduler. Prochaine étape : monitoring unifié des jobs.`,
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: `Mettre en place un tableau de bord de suivi des jobs et un mécanisme d’alerte automatisé en cas d’échec ou de blocage.`,
    trainingsPlanned: [
      'Advanced Laravel Queues & Horizon',
      'Async monitoring & alerting (Grafana/Prometheus)'
    ],
    relatedProjects: [
      'api-observers-jobs',
      'integration-smartsheet',
      'architecture-backend-laravel'
    ]
  },

    // compétences humaines
  {
    slug: 'gestion-projet-agile',
    name: 'Gestion de projet agile',
    type: 'soft',
    level: 5,
    definition: `Piloter un projet par itérations courtes, en gardant une vision claire du besoin et une communication fluide avec les parties prenantes. 
Cette compétence s’exerce dans un contexte où les livrables doivent rester adaptables, testés et alignés avec les priorités métiers.`,
    proofs: [
      {
        story: `Mise en place d’itérations incrémentales sur le module Contentieux : découpage des livrables (phases, formulaires, reporting) et suivi via Jira.`,
        projectSlug: 'crm-contentieux',
        result: `Livraison continue sans rupture fonctionnelle et forte satisfaction du service juridique.`,
        valueAdded: `Organisation pragmatique centrée sur la valeur et la stabilité du produit.`
      },
      {
        story: `Coordination avec les équipes CSM et Delivery lors de la refonte Smartsheet : recueil des besoins, validation fonctionnelle, recette progressive.`,
        projectSlug: 'integration-smartsheet',
        result: `Meilleure compréhension des priorités et déploiement fluide côté utilisateurs.`,
        valueAdded: `Capacité à traduire un besoin non technique en livrable exploitable.`
      },
      {
        story: `Planification du refactor PDF sur plusieurs sprints : maintien des anciennes fonctionnalités tout en introduisant la nouvelle architecture.`,
        projectSlug: 'facturation-documents-pdf-devis-facture',
        result: `Zéro interruption de service pendant la refonte.`,
        valueAdded: `Approche agile et structurée du refactoring, avec livraisons incrémentales.`
      }
    ],
    results: `Des projets livrés en continu, une meilleure priorisation des tâches et un alignement constant entre besoins métiers et contraintes techniques.`,
    selfReview: `Très à l’aise dans l’organisation agile à échelle humaine. À perfectionner : formalisation des rituels et suivi de capacité.`,
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: `Approfondir l’usage des outils de pilotage (Jira, Confluence) pour capitaliser la connaissance et anticiper les risques projet.`,
    trainingsPlanned: [
      'Scrum avancé – Q3 2025',
      'Agilité à l’échelle (SAFe) – Introduction'
    ],
    relatedProjects: [
      'crm-contentieux',
      'facturation-documents-pdf-devis-facture',
      'integration-smartsheet'
    ]
  },
  {
    slug: 'communication-transverse',
    name: 'Communication transverse & documentation',
    type: 'soft',
    level: 4,
    definition: `Assurer la circulation claire et structurée de l’information entre les équipes techniques, commerciales et support. 
Documenter les choix et processus pour garantir la compréhension collective et la continuité du savoir.`,
    proofs: [
      {
        story: `Rédaction de la documentation technique sur Confluence pour les intégrations Smartsheet et HubSpot (schémas, flux, règles de gestion).`,
        projectSlug: 'integration-smartsheet',
        result: `Documentation claire, réutilisée par les CSM et les nouveaux développeurs.`,
        valueAdded: `Pédagogie et sens de la transmission dans des contextes inter-équipes.`
      },
      {
        story: `Partage des schémas de données et diagrammes Miro du module Contentieux avec les juridiques pour validation métier.`,
        projectSlug: 'crm-contentieux',
        result: `Validation rapide du modèle et alignement technique/fonctionnel.`,
        valueAdded: `Capacité à vulgariser la technique et à créer un langage commun.`
      },
      {
        story: `Participation à la documentation interne sur la qualité du code (standards Laravel, conventions de commit).`,
        projectSlug: 'architecture-backend-laravel',
        result: `Amélioration de la cohérence des contributions et onboarding facilité.`,
        valueAdded: `Esprit collaboratif et souci de la lisibilité pour les pairs.`
      }
    ],
    results: `Une communication fluide entre métiers et technique, et une documentation qui devient un levier d’autonomie plutôt qu’une contrainte.`,
    selfReview: `Bonne capacité à documenter et vulgariser. Prochain pas : structurer davantage la traçabilité des décisions.`,
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: `Formaliser un “guide développeur” interne et améliorer la communication visuelle (diagrammes, documentation vivante).`,
    trainingsPlanned: [
      'Technical Writing for Developers',
      'Confluence Advanced Templates'
    ],
    relatedProjects: [
      'integration-smartsheet',
      'crm-contentieux',
      'architecture-backend-laravel'
    ]
  },
  {
    slug: 'rigueur-fiabilite',
    name: 'Rigueur & fiabilité',
    type: 'soft',
    level: 4,
    definition: `Travailler avec précision, anticiper les erreurs et garantir la cohérence des livrables dans le temps. 
Cette compétence se traduit par un souci constant du détail et par la recherche de solutions robustes plutôt que rapides.`,
    proofs: [
      {
        story: `Vérifications systématiques sur les PDF et contrôles de cohérence des données avant déploiement.`,
        projectSlug: 'facturation-documents-pdf-devis-facture',
        result: `Aucune anomalie en production depuis la refonte.`,
        valueAdded: `Approche qualité intégrée dès la conception, sans attendre la recette.`
      },
      {
        story: `Validation croisée des règles métiers sur les phases de litige avec le service juridique.`,
        projectSlug: 'crm-contentieux',
        result: `Zéro incohérence détectée sur les statuts et dates critiques.`,
        valueAdded: `Sens du contrôle et rigueur dans la validation fonctionnelle.`
      },
      {
        story: `Audit et correction des anomalies de synchronisation entre CRM et Smartsheet avant mise en production.`,
        projectSlug: 'integration-smartsheet',
        result: `Taux d’erreur divisé par 5 sur les échanges API.`,
        valueAdded: `Fiabilité et vérification avant livraison, même sous contrainte de temps.`
      }
    ],
    results: `Des livrables stables, vérifiés et conformes, renforçant la confiance entre R&D et métiers.`,
    selfReview: `Très rigoureux et fiable, avec une attention soutenue aux détails. À équilibrer avec plus de délégation et de capitalisation.`,
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: `Continuer à fiabiliser les workflows via des tests automatisés et des contrôles qualité en amont.`,
    trainingsPlanned: [
      'Test Driven Development – Q4 2025',
      'Quality Mindset & Peer Review'
    ],
    relatedProjects: [
      'facturation-documents-pdf-devis-facture',
      'crm-contentieux',
      'integration-smartsheet'
    ]
  },
  {
    slug: 'autonomie-responsabilisation',
    name: 'Autonomie & responsabilisation',
    type: 'soft',
    level: 5,
    definition: `Prendre en charge un sujet de bout en bout : analyse, conception, développement, recette et documentation. 
Cette compétence illustre la confiance accordée et la capacité à livrer des résultats fiables sans supervision constante.`,
    proofs: [
      {
        story: `Développement complet du module Contentieux : schéma de données, backend, règles de visibilité et formulaires dynamiques.`,
        projectSlug: 'crm-contentieux',
        result: `Livrable fonctionnel livré sans dépendance directe ni retouche majeure.`,
        valueAdded: `Autonomie technique et sens du résultat dans un cadre complexe.`
      },
      {
        story: `Refonte du tableau de bord des impayés sans spécifications formelles, à partir des attentes métiers recueillies en direct.`,
        projectSlug: 'tableau-suivi-impayes',
        result: `Solution opérationnelle et adoptée par la Finance.`,
        valueAdded: `Capacité à cadrer et livrer un besoin métier sans dépendance hiérarchique.`
      },
      {
        story: `Mise en place du connecteur Smartsheet : exploration API, création des webhooks, configuration OAuth2 et validation complète.`,
        projectSlug: 'integration-smartsheet',
        result: `Livraison en autonomie totale et documentation complète sur Confluence.`,
        valueAdded: `Proactivité et auto-apprentissage sur un sujet non maîtrisé initialement.`
      }
    ],
    results: `Autonomie totale sur les projets structurants du CRM, avec des livrables complets, testés et documentés.`,
    selfReview: `Autonomie forte, mais nécessité de continuer à partager plus tôt les avancées pour favoriser l’intelligence collective.`,
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: `Trouver le bon équilibre entre autonomie et collaboration, et coacher à terme d’autres développeurs sur ces modules.`,
    trainingsPlanned: [
      'Leadership technique – 2026',
      'Gestion du temps & priorisation avancée'
    ],
    relatedProjects: [
      'crm-contentieux',
      'integration-smartsheet',
      'tableau-suivi-impayes'
    ]
  },
  {
    slug: 'analyse-problemes',
    name: 'Esprit d’analyse & résolution de problèmes',
    type: 'soft',
    level: 4,
    definition: `Identifier rapidement la cause d’un problème et proposer une solution concrète, durable et mesurable. 
Cette compétence se déploie dans des contextes où la complexité technique se mêle à la contrainte métier.`,
    proofs: [
      {
        story: `Analyse et correction des problèmes de redondance dans les gabarits PDF, avec factorisation progressive.`,
        projectSlug: 'facturation-documents-pdf-devis-facture',
        result: `Suppression de 80 % du code dupliqué et fiabilité accrue.`,
        valueAdded: `Capacité à diagnostiquer avant d’agir, et à prioriser la simplicité.`
      },
      {
        story: `Diagnostic des incohérences de commandes entre offres pack et à la carte, puis mise en place de règles bloquantes.`,
        projectSlug: 'offres-pack-upsell',
        result: `Zéro erreur de facturation et base client homogène.`,
        valueAdded: `Raisonnement logique et anticipation des scénarios d’erreur.`
      },
      {
        story: `Refonte des requêtes SQL pour le tableau de bord des impayés, intégrant de multiples relations Eloquent.`,
        projectSlug: 'tableau-suivi-impayes',
        result: `Tableau plus précis et lisible, utilisé par la Finance et la Direction.`,
        valueAdded: `Approche méthodique pour traduire un besoin métier en requêtes performantes.`
      }
    ],
    results: `Des problèmes traités à la racine plutôt que contournés, avec une amélioration continue de la fiabilité des processus.`,
    selfReview: `Analyse pertinente et rapide, parfois trop orientée technique — à compléter par davantage de feedback utilisateur.`,
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: `Renforcer l’analyse fonctionnelle en amont des projets et accompagner les équipes dans la résolution structurée des incidents.`,
    trainingsPlanned: [
      'Root Cause Analysis – Q2 2026',
      'Problem-solving en environnement agile'
    ],
    relatedProjects: [
      'facturation-documents-pdf-devis-facture',
      'offres-pack-upsell',
      'tableau-suivi-impayes'
    ]
  }
];
