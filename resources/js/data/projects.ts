export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  tech: string[];
  highlights: string[];
  examples: Array<{ key: string; summary: string; type?: string; status?: string; date?: string }>;
  timeframe?: { start: string; end: string };
};

export const projects: Project[] = [
  {
    "slug": "gestion-des-contacts-entreprises",
    "title": "Gestion des contacts & entreprises",
    "summary": "Conception et durcissement des règles métier autour des entités Contact/Company (main‑contact, cohérence des relations, notifications, intégrité).",
    "tags": [
      "contacts",
      "company",
      "main-contact",
      "relation",
      "CRM"
    ],
    "tech": [
      "Laravel 11",
      "PHP 8.2",
      "Eloquent ORM",
      "MariaDB/MySQL",
      "Blade",
      "Policies"
    ],
    "highlights": [
      "Règle *main‑contact* robuste (attach/detach/update) + notifications automatiques",
      "Harmonisation des relations Contact↔Company et validation de données",
      "Réduction des régressions via tests ciblés sur les cas limites"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  },
  {
    "slug": "facturation-documents-pdf-devis-facture",
    "title": "Facturation & documents (PDF, devis, facture)",
    "summary": "Refonte/ajouts autour des documents opérationnels (devis/factures/PDF), amélioration des gabarits et de la fidélité d’impression/export.",
    "tags": [
      "pdf",
      "devis",
      "facture",
      "export"
    ],
    "tech": [
      "Laravel 11",
      "PDF (génération)",
      "Blade",
      "File Storage"
    ],
    "highlights": [
      "Templates rationalisés et plus lisibles",
      "Corrections d’alignement/mise en page et fiabilité d’export",
      "Meilleure traçabilité des documents générés"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  },
  {
    "slug": "autres-divers-support-refactor",
    "title": "Autres (divers / support / refactor)",
    "summary": "Correctifs, améliorations continues et refactoring ciblé pour stabiliser le socle applicatif.",
    "tags": [
      "support",
      "refactor"
    ],
    "tech": [
      "Laravel 11",
      "PHP 8.2"
    ],
    "highlights": [
      "Résolution de bugs bloquants pour les équipes",
      "Petites améliorations UX et perf",
      "Nettoyage de dette technique opportuniste"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  },
  {
    "slug": "interfaces-ux-blade-react-modales-editeur",
    "title": "Interfaces & UX (Blade, React, modales, éditeur)",
    "summary": "Améliorations UX côté interface (modales, WYSIWYG, composants de sélection, tableaux dynamiques, correctifs CSS et pages portfolio).",
    "tags": [
      "ui",
      "ux",
      "modal",
      "tinymce",
      "select2",
      "datatable",
      "metronic",
      "hero"
    ],
    "tech": [
      "Blade",
      "jQuery",
      "TinyMCE",
      "Select2",
      "DataTables",
      "Metronic",
      "CSS",
      "React/TS"
    ],
    "highlights": [
      "Modales stables (réouverture, focus, hauteur éditeur TinyMCE)",
      "Tables filtrables (DataTables) et sélecteurs avancés (Select2)",
      "Corrections CSS (Metronic/Hero) pour un rendu propre"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  },
  {
    "slug": "devops-ci-qualite",
    "title": "DevOps/CI & Qualité",
    "summary": "Montée en qualité et industrialisation (Docker/CI/CD/tests) pour des livraisons plus sûres.",
    "tags": [
      "docker",
      "ci",
      "pipeline",
      "tests"
    ],
    "tech": [
      "Docker",
      "Docker Compose",
      "GitLab CI",
      "PHPUnit"
    ],
    "highlights": [
      "Exécution CI GitLab et standardisation Docker/Compose",
      "Stabilisation de tests unitaires pour zones critiques",
      "Hygiène de code (linters/refactors ciblés)"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  },
  {
    "slug": "gestion-des-contentieux-litigation",
    "title": "Gestion des contentieux (Litigation)",
    "summary": "Mise en place et évolution du module de contentieux : phases, dates clés, états, coûts, churn et communication vers UAE/CSM.",
    "tags": [
      "litigation",
      "churn",
      "phase",
      "next_step"
    ],
    "tech": [
      "Laravel 11",
      "Eloquent ORM",
      "Business rules",
      "Notifications"
    ],
    "highlights": [
      "Pilotage par phases + *date_next_step* et clôtures",
      "Suivi des coûts/états et visibilité des prochaines actions",
      "Notification UAE/CSM pour les changements critiques"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  },
  {
    "slug": "integration-hubspot-synchronisation-crm",
    "title": "Intégration HubSpot & synchronisation CRM",
    "summary": "Synchronisation CRM ↔ HubSpot (company/deal/pipeline), gestion des écarts et fiabilisation des envois côté API.",
    "tags": [
      "hubspot",
      "sync",
      "company",
      "deal",
      "pipeline"
    ],
    "tech": [
      "HubSpot API",
      "Laravel HTTP Client",
      "Queues/Jobs (si applicable)"
    ],
    "highlights": [
      "Découplage *partenaire* (write) / *api* (sync) clarifié",
      "Gestion des décalages de persistance avant envoi HubSpot",
      "Monitoring des envois et reprise sur incident"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  },
  {
    "slug": "securite-permissions-authz-authn",
    "title": "Sécurité & Permissions (AuthZ/AuthN)",
    "summary": "Durcissement des accès via Policies/Middlewares et traitement des erreurs 403 sur actions sensibles.",
    "tags": [
      "403",
      "authz",
      "policy",
      "middleware"
    ],
    "tech": [
      "Laravel Policies",
      "Middleware",
      "Gates"
    ],
    "highlights": [
      "Policies/middlewares renforcés sur actions sensibles",
      "Diagnostic et correction d’erreurs 403 non loggées",
      "Meilleure visibilité des permissions côté code"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  },
  {
    "slug": "api-observers-jobs",
    "title": "API & Observers & Jobs",
    "summary": "Chaînage d’events/observers, jobs/queues et webhooks pour automatiser des processus clés.",
    "tags": [
      "observer",
      "event",
      "job",
      "queue",
      "webhook"
    ],
    "tech": [
      "Laravel Events",
      "Observers",
      "Jobs/Queues",
      "Scheduler"
    ],
    "highlights": [
      "Observers sur événements de domaine (attach/detach/update)",
      "Jobs/queues pour tâches asynchrones",
      "Planification/scheduling pour opérations régulières"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      },
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  },
  {
    "slug": "modele-de-donnees-migrations",
    "title": "Modèle de données & migrations",
    "summary": "Évolutions du schéma (pivots, clés étrangères, index, enums/slugs) et renommages pour clarifier le modèle.",
    "tags": [
      "migration",
      "pivot",
      "fk",
      "index",
      "enum",
      "slug"
    ],
    "tech": [
      "Migrations",
      "Foreign Keys",
      "Pivot Tables",
      "Indexes",
      "Enums/Slugs"
    ],
    "highlights": [
      "Ajout/renommage de pivots, FKs et index",
      "Introduction de slugs/enums pour la lisibilité",
      "Scripts de migration idempotents"
    ],
    "examples": [
      {
        "key": "nan",
        "summary": "nan",
        "type": "nan",
        "status": "nan",
        "date": ""
      }
    ]
  }
];
