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
      { story: 'Pilotage des incréments pour le CRM interne (tickets, releases).' , projectSlug: 'gestion-des-contacts-entreprises' },
      { story: 'Priorisation des évolutions doc. PDF & devis/factures avec les parties prenantes.', projectSlug: 'facturation-documents-pdf-devis-facture' }
    ],
    results: 'Cycle plus court, moins de retours tardifs, visibilité accrue pour les demandeurs.',
    selfReview: 'Solide en delivery et communication, encore à structurer la mesure d’impact.',
    evolution: 'Renforcer la partie metrics (DORA-like) et automatiser le changelog.',
    relatedProjects: ['gestion-des-contacts-entreprises','facturation-documents-pdf-devis-facture']
  },
  {
    slug: 'integration-apis',
    name: 'Intégration d’APIs / services SaaS',
    type: 'tech',
    level: 4,
    definition: 'Connexion de services externes (REST, webhooks, OAuth) et synchronisation de données.',
    proofs: [
      { story: 'Intégration CRM ↔︎ HubSpot (synchronisation contacts/entreprises).' , projectSlug: 'gestion-des-contacts-entreprises' }
    ],
    results: 'Données unifiées, réduction des doubles saisies et des erreurs humaines.',
    selfReview: 'À l’aise sur REST et OAuth ; à pousser sur stratégie de retries & monitoring.',
    evolution: 'Mettre des tableaux de bord d’intégration (jobs, erreurs, SLA).',
    relatedProjects: ['gestion-des-contacts-entreprises']
  },
  {
    slug: 'generation-pdf-facturation',
    name: 'Génération PDF & facturation',
    type: 'tech',
    level: 4,
    definition: 'Production de documents légaux (devis, factures, avoirs) et workflows d’approbation.',
    proofs: [
      { story: 'Refonte des modèles PDF, ajout des totaux, TVA et mentions légales.', projectSlug: 'facturation-documents-pdf-devis-facture' }
    ],
    results: 'Documents conformes et lisibles, réduction des retours et litiges.',
    selfReview: 'Bonne maîtrise, encore à automatiser les contrôles de conformité.',
    evolution: 'Ajout de tests de non-régression visuelle sur PDF critiques.',
    relatedProjects: ['facturation-documents-pdf-devis-facture']
  },
  {
    slug: 'modele-de-donnees',
    name: 'Modélisation & migrations',
    type: 'tech',
    level: 4,
    definition: 'Évolution du schéma, relations, indexation et migrations sécurisées.',
    proofs: [
      { story: 'Nettoyage des pivots & clés étrangères, enums/slugs cohérents.', projectSlug: 'modele-de-donnees-migrations' }
    ],
    results: 'Schéma plus clair, requêtes plus fiables et plus rapides.',
    selfReview: 'À continuer sur les migrations idempotentes pour CI/CD.',
    evolution: 'Standardiser le naming et documenter les relations clés.',
    relatedProjects: ['modele-de-donnees-migrations']
  },
  {
    slug: 'jobs-observers',
    name: 'Jobs, observers & événements',
    type: 'tech',
    level: 3,
    definition: 'Traitements asynchrones, hooks métier et orchestration applicative.',
    proofs: [
      { story: 'Mise en place d’observers sur créations/updates et jobs planifiés.', projectSlug: 'api-observers-jobs' }
    ],
    results: 'Moins de couplage, meilleure résilience, tâches planifiées.',
    selfReview: 'Encore à outiller le monitoring des échecs de jobs.',
    evolution: 'Dead-letter queues + alerte Slack en cas d’échec.',
    relatedProjects: ['api-observers-jobs']
  },
  {
    slug: 'qualite-ci-cd',
    name: 'Qualité & CI/CD',
    type: 'soft',
    level: 4,
    definition: 'Revues, tests de base, pipelines d’intégration & déploiement.',
    proofs: [
      { story: 'Pipelines GitLab/Jenkins pour build/test et release progressive.' }
    ],
    results: 'Moins de régressions en prod et déploiements plus sûrs.',
    selfReview: 'Bonne base, à étendre la couverture de tests.',
    evolution: 'Ajouter des tests E2E légers sur les flux critiques.',
    relatedProjects: ['api-observers-jobs','modele-de-donnees-migrations']
  },
  {
    slug: 'securite-permissions',
    name: 'Sécurité & permissions',
    type: 'tech',
    level: 3,
    definition: 'Contrôle d’accès, validation côté serveur, hygiène des secrets.',
    proofs: [
      { story: 'Durcissement des règles d’accès et validation des inputs sensibles.' }
    ],
    results: 'Réduction des cas limites et élévations de privilèges.',
    selfReview: 'À compléter par une checklist OWASP interne.',
    evolution: 'Automatiser l’audit sur les endpoints sensibles.',
    relatedProjects: ['gestion-des-contacts-entreprises']
  },
  {
    slug: 'communication-produit',
    name: 'Communication produit',
    type: 'soft',
    level: 4,
    definition: 'Rendre visible le travail, clarifier le “pourquoi” et les impacts.',
    proofs: [
      { story: 'Changelog court et démos régulières auprès des demandeurs.' }
    ],
    results: 'Meilleure adoption et moins de demandes contradictoires.',
    selfReview: 'À structurer des “release notes” plus régulières.',
    evolution: 'Mettre un template de release et une newsletter interne mensuelle.',
    relatedProjects: ['gestion-des-contacts-entreprises','facturation-documents-pdf-devis-facture']
  },
  {
    slug: 'ux-applicative',
    name: 'UX applicative',
    type: 'soft',
    level: 3,
    definition: 'Forms, listes, messages d’erreur utiles, raccourcis fréquents.',
    proofs: [
      { story: 'Simplification des formulaires et feedbacks inline.' }
    ],
    results: 'Moins de friction et saisie plus rapide.',
    selfReview: 'Bon sens pratique, à étayer par des tests d’usage rapides.',
    evolution: 'Micro-usability tests trimestriels avec 3–5 utilisateurs.',
    relatedProjects: ['gestion-des-contacts-entreprises']
  },
  {
    slug: 'documentation-transfert',
    name: 'Documentation & transfert',
    type: 'soft',
    level: 4,
    definition: 'Docs courtes, à jour, utiles aux nouveaux et aux Ops.',
    proofs: [
      { story: 'Procédures de déploiement et runbooks succincts.' }
    ],
    results: 'Onboarding plus rapide, moins d’interruptions.',
    selfReview: 'Continuer à supprimer/mettre à jour les pages obsolètes.',
    evolution: 'Checklist trimestrielle de nettoyage de la doc.',
    relatedProjects: ['modele-de-donnees-migrations','api-observers-jobs']
  }
];
