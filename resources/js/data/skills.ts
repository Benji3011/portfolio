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
    definition:
        "Conception de modules métier Laravel (Eloquent, services, observers, jobs, policies). Contexte 2025 : attentes accrues de résilience et d’observabilité, séparation claire domaine/infra.",
    proofs: [
      {
        story: "Refonte règles Contact/Entreprise (intégrité liens, notifications, validations explicites).",
        projectSlug: 'gestion-des-contacts-entreprises',
        result: "Baisse des erreurs de saisie et tickets liés aux incohérences d’association.",
        valueAdded: "Clarification des règles métier et factorisation en services."
      },
      {
        story: "Mise en place d’observers + jobs planifiés pour découpler effets de bord.",
        projectSlug: 'api-observers-jobs',
        result: "Saisie non bloquante et traitements plus robustes.",
        valueAdded: "Architecture orientée événements, retries contrôlés."
      }
    ],
    results: "Flux plus fiables, code plus maintenable, responsabilités mieux isolées.",
    selfReview: "Bon niveau, encore perfectible sur DDD/hexagonal à l’échelle du produit.",
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: "Généraliser les ‘domain services’ et mapper proprement les événements de domaine.",
    trainingsPlanned: ["DDD appliqué à Laravel (Q4 2025)", "Observabilité applicative (metrics/logs)"],
    relatedProjects: ['gestion-des-contacts-entreprises', 'api-observers-jobs']
  },
  {
    slug: 'integration-apis',
    name: 'Intégrations APIs (HubSpot, Smartsheet…)',
    type: 'tech',
    level: 4,
    definition:
        "Conception de connecteurs REST (mappages champs, idempotence, gestion d’erreurs). Actualité : changements fréquents d’API et exigences RGPD → logs & sandbox indispensables.",
    proofs: [
      {
        story: "Connecteur HubSpot pour synchroniser les IDs et champs clés côté CRM.",
        projectSlug: 'integration-hubspot',
        result: "Réduction des écarts de données et des interventions manuelles.",
        valueAdded: "Mappages documentés et contrôles de droits."
      },
      {
        story: "Échanges Smartsheet (import/export) avec validations préalables.",
        projectSlug: 'integration-hubspot',
        result: "Import plus fiable, erreurs actionnables.",
        valueAdded: "Tests de contrat simples et remontées explicites."
      }
    ],
    results: "Données plus fiables entre outils, meilleure traçabilité.",
    selfReview: "Rigoureux mais encore améliorable en sandbox systématique.",
    priority: 'haute',
    acquisitionSpeed: 'normale',
    evolution: "Standardiser un adapter par domaine + tester la rétrocompatibilité.",
    trainingsPlanned: ["API Contract Testing (Pact) – Q1 2026"],
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
    slug: 'gestion-de-projet-agile',
    name: 'Gestion de projet (agile)',
    type: 'soft',
    level: 4,
    definition:
        "Incréments courts, priorisation, feedback. Contexte : forte transversalité (R&D, Support, CSM) → besoin de visibilité fréquente.",
    proofs: [
      {
        story: "Découpage incréments CRM (contacts/entreprises, PDF).",
        projectSlug: 'gestion-des-contacts-entreprises',
        result: "Cycle plus court, obstacles identifiés tôt.",
        valueAdded: "Roadmap réaliste + communication claire."
      }
    ],
    results: "Meilleure prévisibilité et adhésion des acteurs.",
    selfReview: "Solide en delivery, encore mieux quantifier l’impact.",
    priority: 'haute',
    acquisitionSpeed: 'rapide',
    evolution: "Mettre en place 2–3 métriques simples (lead time/throughput).",
    trainingsPlanned: ["Metrics agiles pragmatiques (autoformation)"],
    relatedProjects: ['gestion-des-contacts-entreprises']
  },
  {
    slug: 'communication-technique',
    name: 'Communication technique',
    type: 'soft',
    level: 4,
    definition:
        "Explicitation des règles métier et compromis, docs utiles. Contexte : équipes hybrides et turnover → docs courtes mais actionnables.",
    proofs: [
      {
        story: "Règles association contact/entreprise clarifiées.",
        projectSlug: 'gestion-des-contacts-entreprises',
        result: "Moins de malentendus, tickets mieux qualifiés.",
        valueAdded: "Doc orientée cas d’usage + messages d’erreur utiles."
      }
    ],
    results: "Décisions plus rapides et partagées.",
    selfReview: "Parfois trop détaillé quand une version ‘light’ suffit.",
    priority: 'moyenne',
    acquisitionSpeed: 'normale',
    evolution: "Plus de schémas courts et checklists.",
    trainingsPlanned: ["Docs as code — bonnes pratiques"],
    relatedProjects: ['gestion-des-contacts-entreprises']
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
    slug: 'documentation-transfert',
    name: 'Documentation & transfert',
    type: 'soft',
    level: 4,
    definition:
        "Docs pratiques pour devs/ops, centrées maintenance. Contexte : onboarding plus rapide attendu côté entreprise.",
    proofs: [
      {
        story: "Docs flux CRM↔HubSpot (mappages + règles).",
        projectSlug: 'integration-hubspot',
        result: "Moins de ‘tribal knowledge’, onboarding accéléré.",
        valueAdded: "Structure par cas d’usage + runbooks courts."
      }
    ],
    results: "Moins de dépendance au tacite, continuité assurée.",
    selfReview: "Raccourcir certaines pages longues.",
    priority: 'moyenne',
    acquisitionSpeed: 'normale',
    evolution: "Mutualiser modèles de doc et checklists.",
    trainingsPlanned: ["Runbooks efficaces (autoformation)"],
    relatedProjects: ['integration-hubspot']
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
