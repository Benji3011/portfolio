export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  tech: string[];
  highlights: string[];
  examples: Array<{ key: string; summary: string; type?: string; status?: string; date?: string }>;
  timeframe?: { start: string; end?: string };
};

export const projects: Project[] = [
  {
    slug: 'gestion-des-contacts-entreprises',
    title: 'Gestion des contacts & entreprises',
    summary: 'Durcissement des règles métier (intégrité liens, statuts, notifications) et meilleure UX de gestion.',
    tags: ['CRM', 'Back-office', 'Règles métier'],
    tech: ['Laravel', 'Eloquent', 'MySQL', 'React', 'Inertia', 'MUI'],
    highlights: [
      'Règles explicites de création/association',
      'Validations et messages d’erreur utiles',
      'Composants UI réutilisables'
    ],
    examples: [
      { key: 'definition', summary: 'Mettre fin aux incohérences contact/entreprise et rendre les erreurs actionnables.' },
      { key: 'objectif',  summary: 'Réduire les tickets support liés aux mauvais liens/notifications.' },
      { key: 'etapes',    summary: 'Cartographie règles → validations → refacto Eloquent → écrans MUI.' },
      { key: 'acteurs',   summary: 'R&D, Support, CSM, métier.' },
      { key: 'resultats_entreprise', summary: 'Baisse des erreurs de saisie et des interventions support.' },
      { key: 'resultats_pour_moi',   summary: 'Meilleure maîtrise des patterns de validation et services de domaine.' },
      { key: 'lendemains_immediat',  summary: 'Petits tutoriels intégrés et hints contextuels.' },
      { key: 'lendemains_moyen_terme', summary: 'Indicateurs d’usage et audit périodique des règles.' },
      { key: 'lendemains_aujourdhui', summary: 'Règles stables ; ajustements au fil des retours.' },
      { key: 'regard',    summary: 'Aller vers un DDD light (domain services + policies resserrées).' }
    ],
    timeframe: { start: '2024-02', end: '2024-11' }
  },
  {
    slug: 'facturation-documents-pdf-devis-facture',
    title: 'Stabilisation PDF (devis, factures)',
    summary: 'Refonte des gabarits et sécurisation de la génération pour éviter les erreurs bloquantes.',
    tags: ['Billing', 'PDF'],
    tech: ['Laravel', 'DOMPDF', 'Blade', 'Pipelines CI'],
    highlights: ['Gabarits unifiés', 'Vérifications pré-release', 'Messages d’erreur clairs'],
    examples: [
      { key: 'definition', summary: 'Standardiser la génération de documents commerciaux.' },
      { key: 'objectif',  summary: 'Supprimer les échecs de génération et incohérences visuelles.' },
      { key: 'etapes',    summary: 'Audit gabarits → refacto → tests visuels simples → CI.' },
      { key: 'acteurs',   summary: 'R&D, Support facturation.' },
      { key: 'resultats_entreprise', summary: 'Régressions en baisse, incidents rarissimes.' },
      { key: 'resultats_pour_moi',   summary: 'Expérience CI/CD renforcée + gestion des templates.' },
      { key: 'lendemains_immediat',  summary: 'Ajout d’assertions visuelles minimales en CI.' },
      { key: 'lendemains_moyen_terme', summary: 'Exploration d’un moteur de templates plus découplé.' },
      { key: 'lendemains_aujourdhui', summary: 'Surveillance légère des régressions post-release.' },
      { key: 'regard',    summary: 'Aller vers des snapshots visuels plus complets.' }
    ],
    timeframe: { start: '2024-05', end: '2024-10' }
  },
  {
    slug: 'integration-hubspot',
    title: 'Refonte du connecteur HubSpot ↔ CRM',
    summary: `Modernisation du connecteur entre le CRM interne et HubSpot, avec mise en place d’une sandbox d’intégration pour tester en conditions réelles sans risque et fiabiliser les synchronisations.`,
    tags: ['API', 'Intégration', 'CRM', 'HubSpot', 'Sandbox', 'Laravel'],
    tech: ['Laravel 10', 'HubSpot API v3', 'Jobs', 'Queues', 'Webhooks', 'OAuth 2.0'],
    highlights: [
      'Sandbox HubSpot reliée au CRM interne (tests sans toucher la prod)',
      'Refactor du code legacy (services, jobs, contrôleurs)',
      'Gestion centralisée des erreurs + retries + logs',
      'Mappings Contacts/Companies fiabilisés',
      'Documentation technique et fonctionnelle'
    ],
    examples: [
      {
        key: 'definition',
        summary: `Le connecteur HubSpot existant était obsolète et peu traçable. J’ai refondu l’ensemble pour le rendre maintenable, testable et transparent. Objectif : redonner de la confiance dans les échanges CRM ↔ HubSpot.`
      },
      {
        key: 'objectif',
        summary: `Permettre aux devs et aux métiers de tester sereinement les synchronisations (Contacts, Companies, Deals) sans impacter la production, tout en clarifiant la logique et les erreurs.`
      },
      {
        key: 'etapes',
        summary: `• Audit du legacy : classes obsolètes, appels non gérés, dette technique identifiée
• Refactor Laravel : services Hubspot*, centralisation des appels API v3, jobs/queues
• Sandbox HubSpot : OAuth, dataset de test, interconnexion CRM pour tests réalistes
• Fiabilisation : gestion d’erreurs normalisée (4xx/5xx), retries progressifs, logs exploitables
• Documentation : technique (flux, endpoints, payloads) et fonctionnelle (scénarios, cycles)`
      },
      {
        key: 'acteurs',
        summary: `R&D (backend), marketing (utilisateurs HubSpot) et support CRM pour valider les flux réels. Pilotage via Jira, documentation Confluence.`
      },
      {
        key: 'resultats_entreprise',
        summary: `• Tests réalistes sans toucher aux données clients (sandbox)
• Synchronisations plus fiables et prévisibles
• Moins d’incidents liés aux doublons ou champs mal mappés
• Sérénité accrue et meilleure vitesse de livraison sur les sujets HubSpot`
      },
      {
        key: 'resultats_pour_moi',
        summary: `• Maîtrise d’un connecteur complexe de bout en bout
• Confiance sur l’intégration d’API tierces avec Laravel (jobs, queues, webhooks)
• Mise en place d’environnements d’intégration réalistes (sandbox)`
      },
      {
        key: 'lendemains_immediat',
        summary: `• Surveiller les flux en sandbox
• Couvrir les cas limites (tickets/engagements)
• Peaufiner la journalisation`
      },
      {
        key: 'lendemains_moyen_terme',
        summary: `• Alertes Slack et supervision simple des erreurs
• Tests d’intégration automatisés par scénarios`
      },
      {
        key: 'lendemains_aujourdhui',
        summary: `• La sandbox est intégrée au cycle standard : chaque évolution est validée avant prod`
      },
      {
        key: 'regard',
        summary: `Le défi était autant technique qu’organisationnel : instaurer une culture de test entre outils. La sandbox a été un point de bascule majeur pour fiabiliser et apaiser les développements.`
      }
    ],
    timeframe: { start: '2024-03', end: '2025-02' }
  },
  {
    slug: 'crm-contentieux',
    title: 'Module de gestion des contentieux',
    summary: 'Suivi des litiges : phases, sources, coûts, jalons et états courants.',
    tags: ['CRM', 'Workflow', 'Reporting'],
    tech: ['Laravel', 'MySQL', 'Eloquent', 'Blade/React'],
    highlights: ['Modèle clair (phases/états)', 'Dernier état requêtable', 'Tableaux filtrables'],
    examples: [
      { key: 'definition', summary: 'Donner une vision fiable de l’état des litiges.' },
      { key: 'objectif',  summary: 'Sécuriser la lecture du “dernier état” et la planification.' },
      { key: 'etapes',    summary: 'Modélisation → requêtes agrégées → écrans filtrables.' },
      { key: 'acteurs',   summary: 'R&D, Juridique/Métier, CSM.' },
      { key: 'resultats_entreprise', summary: 'Reporting plus juste, décisions plus rapides.' },
      { key: 'resultats_pour_moi',   summary: 'Pratique sur SQL agrégé et indexation.' },
      { key: 'lendemains_immediat',  summary: 'Exports standardisés (CSV/PDF).' },
      { key: 'lendemains_moyen_terme', summary: 'Graphiques dédiés et alertes d’échéances.' },
      { key: 'lendemains_aujourdhui', summary: 'Itérations selon retours des utilisateurs.' },
      { key: 'regard',    summary: 'Poursuivre l’optimisation SQL (indexes, vues).' }
    ],
    timeframe: { start: '2024-06', end: '2025-01' }
  },
  {
    slug: 'api-observers-jobs',
    title: 'Observers & Jobs planifiés',
    summary: 'Traitements asynchrones robustes (observers, files, retries) pour découpler et fiabiliser.',
    tags: ['Backend', 'Resilience'],
    tech: ['Laravel', 'Queues', 'Scheduler', 'Monolog'],
    highlights: ['Découplage effets de bord', 'Retries contrôlés', 'Monitoring basique'],
    examples: [
      { key: 'definition', summary: 'Éviter les effets secondaires lors de la saisie.' },
      { key: 'objectif',  summary: 'Rendre les tâches non bloquantes et observables.' },
      { key: 'etapes',    summary: 'Observers → jobs → retries → alertes log.' },
      { key: 'acteurs',   summary: 'R&D, Support.' },
      { key: 'resultats_entreprise', summary: 'Moins d’échecs visibles, UX plus fluide.' },
      { key: 'resultats_pour_moi',   summary: 'Expérience renforcée sur la résilience applicative.' },
      { key: 'lendemains_immediat',  summary: 'Dead-letter queue + alertes Slack.' },
      { key: 'lendemains_moyen_terme', summary: 'Dashboards d’observabilité (metrics).' },
      { key: 'lendemains_aujourdhui', summary: 'Surveillance légère et ajustements.' },
      { key: 'regard',    summary: 'Étendre l’observabilité (tracing) si besoin.' }
    ],
    timeframe: { start: '2024-04', end: '2024-09' }
  }
];
