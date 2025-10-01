export type Skill = {
  slug: string;
  name: string;
  type: 'soft' | 'tech';
  level: 1 | 2 | 3 | 4 | 5;
  definition: string;
  proofs: Array<{ story: string; projectSlug?: string }>;
  results: string;
  selfReview: string;
  evolution: string;
  relatedProjects: string[];
};

export const skills: Skill[] = [
  {
    slug: 'gestion-de-projet-agile',
    name: 'Gestion de projet (agile)',
    type: 'soft',
    level: 4,
    definition: 'Organisation itérative du delivery (cadrage court, incréments, feedback régulier).',
    proofs: [
      { story: 'Pilotage des incréments pour le CRM interne (tickets, releases).', projectSlug: 'gestion-des-contacts-entreprises' },
      { story: 'Priorisation des évolutions PDF devis/factures avec les métiers.', projectSlug: 'facturation-documents-pdf-devis-facture' }
    ],
    results: 'Cycle plus court, moins de retours tardifs, visibilité accrue.',
    selfReview: 'Solide en delivery ; à mieux mesurer l’impact.',
    evolution: 'Renforcer les metrics (type DORA) et automatiser le changelog.',
    relatedProjects: ['gestion-des-contacts-entreprises','facturation-documents-pdf-devis-facture']
  },
  {
    slug: 'integration-apis',
    name: 'Intégration d’APIs / services SaaS',
    type: 'tech',
    level: 4,
    definition: 'Connexion de services externes (REST, webhooks, OAuth) et synchronisations.',
    proofs: [
      { story: 'Intégration CRM ↔︎ HubSpot (contacts/entreprises).', projectSlug: 'gestion-des-contacts-entreprises' }
    ],
    results: 'Données unifiées, réduction des doubles saisies.',
    selfReview: 'À pousser la stratégie de retries & le monitoring.',
    evolution: 'Tableaux de bord d’intégration (jobs, erreurs, SLA).',
    relatedProjects: ['gestion-des-contacts-entreprises']
  },
  {
    slug: 'generation-pdf-facturation',
    name: 'Génération PDF & facturation',
    type: 'tech',
    level: 4,
    definition: 'Production de documents légaux (devis, factures) et workflows d’approbation.',
    proofs: [
      { story: 'Refonte modèles PDF avec totaux, TVA, mentions légales.', projectSlug: 'facturation-documents-pdf-devis-facture' }
    ],
    results: 'Documents conformes, moins de litiges.',
    selfReview: 'Contrôles automatiques à élargir.',
    evolution: 'Tests de non-régression visuelle sur les PDF critiques.',
    relatedProjects: ['facturation-documents-pdf-devis-facture']
  },
  {
    slug: 'modele-de-donnees',
    name: 'Modélisation & migrations',
    type: 'tech',
    level: 4,
    definition: 'Évolution du schéma, relations, indexation et migrations sécurisées.',
    proofs: [
      { story: 'Nettoyage pivots & FK, cohérence enums/slugs.', projectSlug: 'modele-de-donnees-migrations' }
    ],
    results: 'Schéma plus clair, requêtes plus fiables/rapides.',
    selfReview: 'Mieux standardiser l’idempotence des migrations.',
    evolution: 'Naming systématique + doc des relations clés.',
    relatedProjects: ['modele-de-donnees-migrations']
  },
  {
    slug: 'jobs-observers',
    name: 'Jobs, observers & événements',
    type: 'tech',
    level: 3,
    definition: 'Traitements asynchrones, hooks métier et orchestration applicative.',
    proofs: [
      { story: 'Observers sur créations/updates + jobs planifiés.', projectSlug: 'api-observers-jobs' }
    ],
    results: 'Moins de couplage, meilleure résilience.',
    selfReview: 'Monitoring d’échecs à renforcer.',
    evolution: 'Dead-letter queue + alerte Slack en cas d’échec.',
    relatedProjects: ['api-observers-jobs']
  },
  {
    slug: 'qualite-ci-cd',
    name: 'Qualité & CI/CD',
    type: 'soft',
    level: 4,
    definition: 'Revues, tests de base, pipelines d’intégration & déploiement.',
    proofs: [
      { story: 'Pipelines GitLab/Jenkins pour build/test & release progressive.' }
    ],
    results: 'Moins de régressions, déploiements plus sûrs.',
    selfReview: 'Couverture de tests à élargir.',
    evolution: 'Tests E2E légers sur les flux critiques.',
    relatedProjects: ['api-observers-jobs','modele-de-donnees-migrations']
  },
  {
    slug: 'securite-permissions',
    name: 'Sécurité & permissions',
    type: 'tech',
    level: 3,
    definition: 'Contrôle d’accès, validation serveur, hygiène des secrets.',
    proofs: [
      { story: 'Durcissement règles d’accès et validation des inputs sensibles.' }
    ],
    results: 'Réduction des cas limites et élévations de privilèges.',
    selfReview: 'Checklist OWASP interne à systématiser.',
    evolution: 'Audit automatisé des endpoints sensibles.',
    relatedProjects: ['gestion-des-contacts-entreprises']
  },
  {
    slug: 'communication-produit',
    name: 'Communication produit',
    type: 'soft',
    level: 4,
    definition: 'Rendre visible le travail, clarifier le “pourquoi” & les impacts.',
    proofs: [
      { story: 'Changelog court & démos régulières.' }
    ],
    results: 'Meilleure adoption, moins de demandes contradictoires.',
    selfReview: 'Rythme de release notes à stabiliser.',
    evolution: 'Template de release + newsletter interne mensuelle.',
    relatedProjects: ['gestion-des-contacts-entreprises','facturation-documents-pdf-devis-facture']
  },
  {
    slug: 'ux-applicative',
    name: 'UX applicative',
    type: 'soft',
    level: 3,
    definition: 'Forms, listes, feedbacks utiles, raccourcis fréquents.',
    proofs: [
      { story: 'Simplification de formulaires & messages d’erreurs inline.' }
    ],
    results: 'Moins de friction, saisie plus rapide.',
    selfReview: 'Méthodo de tests d’usage à cadrer.',
    evolution: 'Micro-tests trimestriels (3–5 utilisateurs).',
    relatedProjects: ['gestion-des-contacts-entreprises']
  },
  {
    slug: 'documentation-transfert',
    name: 'Documentation & transfert',
    type: 'soft',
    level: 4,
    definition: 'Docs courtes, à jour, utiles aux nouveaux et aux Ops.',
    proofs: [
      { story: 'Procédure de déploiement et runbooks succincts.' }
    ],
    results: 'Onboarding plus rapide, moins d’interruptions.',
    selfReview: 'Nettoyage de la doc à ritualiser.',
    evolution: 'Checklist trimestrielle de housekeeping.',
    relatedProjects: ['modele-de-donnees-migrations','api-observers-jobs']
  }
];
