export type TimelineEvent = {
  sort: string;
  side: 'left' | 'right';
  period: string;
  title: string;
  subtitle?: string;
  chips?: string[];
  logo?: string;        // /public path
  org?: string;
  orgUrl?: string;
  status?: string;      // alternant, stage…
  responsibilities?: string[];
  missions?: string[];
  relatedProjects?: string[];   // slugs from projects.ts
  relatedSkills?: string[];     // slugs from skills.ts
  schoolBlurb?: string;         // formations
};

export const events: TimelineEvent[] = [
  // ————— FORMATIONS (gauche)
  {
    sort: '2023-09',
    side: 'left',
    period: '2023 → 2025',
    title: 'Mastère Expert en Ingénierie Logicielle — ISCOD',
    subtitle: 'Visiplus Digital Learning',
    chips: ['Ingénierie logicielle', 'Architecture', 'Gestion de projet'],
    org: 'Visiplus Digital Learning',
    orgUrl: 'https://www.visiplus-digital-learning.com/',
    schoolBlurb: 'Formation RNCP niv. 7 axée architecture, qualité logicielle et gestion de projet.'
  },
  {
    sort: '2022-10',
    side: 'left',
    period: 'Oct 2022 → Oct 2023',
    title: 'Concepteur Développeur d’Applications — 3WAcademy',
    chips: ['CDA', 'Conception', 'Full-stack'],
    org: '3WAcademy'
  },
  {
    sort: '2019-01',
    side: 'left',
    period: 'Jan 2019 → Jan 2020',
    title: 'Développeur Web & Web Mobile — Simplon (Pamiers)',
    chips: ['DWWM', 'Agile', 'Pédagogie active'],
    org: 'Simplon Pamiers'
  },
  {
    sort: '2016-06',
    side: 'left',
    period: '2016',
    title: 'Baccalauréat Scientifique — Lycée Les Catalins',
    chips: ['SI', 'ISN'],
    org: 'Lycée Les Catalins'
  },

  // ————— EXPÉRIENCES (droite)
  {
    sort: '2023-04',
    side: 'right',
    period: 'Avr 2023 → Aujourd’hui',
    title: 'Alternant Ingénieur R&D',
    subtitle: 'Eurécia — Castanet-Tolosan (Toulouse)',
    chips: ['Laravel 10', 'CRM', 'API', 'PDF', 'SQL/Reporting'],
    org: 'Eurécia',
    orgUrl: 'https://www.eurecia.com/',
    logo: '/images/logos/eurecia.svg',
    status: 'Alternant',
    responsibilities: [
      'Conception & refactor de modules critiques (architecture, qualité, tests)',
      'Intégrations tierces (HubSpot, Smartsheet) : sécurité, idempotence, supervision',
      'Pilotage par itérations : cadrage fonctionnel → livraison → documentation'
    ],
    missions: [
      'Refonte moteur PDF (devis/commandes/factures) : factorisation Blade, mise en page compacte',
      'Module CRM Contentieux : schéma de données, formulaire dynamique multi-phases, historisation',
      'Intégrations APIs : sandbox HubSpot, webhooks Smartsheet, mappings fiabilisés',
      'Offres packagées & Upsell : règles de compatibilité, UI vendeur (alertes/modales)',
      'Tableau de bord des impayés : Eloquent multi-relations, regroupements par acteur'
    ],
    relatedProjects: [
      'facturation-documents-pdf-devis-facture',
      'crm-contentieux',
      'integration-hubspot',
      'integration-smartsheet',
      'offres-pack-upsell',
      'tableau-suivi-impayes'
    ],
    relatedSkills: [
      'architecture-backend-laravel',
      'integration-apis',
      'data-modeling-sql',
      'code-quality-maintainability',
      'asynchronous-orchestration',
      'gestion-projet-agile',
      'communication-transverse',
      'rigueur-fiabilite',
      'autonomie-responsabilisation',
      'analyse-problemes'
    ]
  },
  {
    sort: '2021-08',
    side: 'right',
    period: 'Aoû 2021 → Oct 2022',
    title: 'Assistant Informatique',
    subtitle: 'Mission Locale Jeune Ariège — Foix',
    chips: ['Support IT', 'HelpDesk', 'Automatisation légère'],
    org: 'Mission Locale Jeune Ariège',
    status: 'CDD',
    responsibilities: ['Support utilisateurs', 'Exploitation quotidienne', 'Résolution incidents'],
    missions: ['Dépannage, suivi, petites automatisations de tâches récurrentes'],
    relatedSkills: ['communication-transverse', 'rigueur-fiabilite', 'analyse-problemes']
  },
  {
    sort: '2020-01',
    side: 'right',
    period: 'Jan 2020 → Déc 2020',
    title: 'Micro-entrepreneur — Développement web',
    subtitle: 'Ariège',
    chips: ['Symfony', 'React', 'Agile'],
    org: 'Indépendant',
    status: 'Auto-entrepreneur',
    responsibilities: ['Cadrage client', 'Développement & déploiement'],
    missions: ['Sites vitrines, petits modules sur mesure, intégrations simples'],
    relatedSkills: ['gestion-projet-agile', 'communication-transverse', 'analyse-problemes']
  },
  {
    sort: '2019-09',
    side: 'right',
    period: 'Sep 2019 → Jan 2020',
    title: 'Stagiaire Développeur Web',
    subtitle: "ECOLAND's — Lavelanet",
    chips: ['PrestaShop', 'PHP', 'SQL'],
    org: "ECOLAND's",
    status: 'Stage',
    responsibilities: ['Dév. modules PrestaShop', 'Intégration API'],
    missions: ['Webservices compta & stocks, imports CSV volumineux'],
    relatedSkills: ['integration-apis', 'communication-transverse']
  }
];
