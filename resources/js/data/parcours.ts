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
  // Formations (gauche)
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

  // Expériences (droite)
  {
    sort: '2023-04',
    side: 'right',
    period: 'Avr 2023 → Aujourd’hui',
    title: 'Alternant Ingénieur R&D',
    subtitle: 'Eurécia — Castanet-Tolosan (Toulouse)',
    chips: ['Laravel', 'ITIL', 'iTop', 'CRM', 'CI/CD'],
    org: 'Eurécia',
    orgUrl: 'https://www.eurecia.com/',
    logo: '/eurecia.svg',
    status: 'Alternant',
    responsibilities: [
      'Chefferie de petits incréments : cadrage → livraison',
      'Sécurité & bonnes pratiques (validation, droits)',
      'Qualité : CI/CD, revues, docs courtes'
    ],
    missions: [
      'Mise en place iTop (CMDB, ITSM) et intégrations',
      'Dév. CRM interne (Laravel) : contacts, entreprises, docs PDF',
      'Automatisations (jobs) & monitoring léger'
    ],
    relatedProjects: [
      'gestion-des-contacts-entreprises',
      'facturation-documents-pdf-devis-facture',
      'modele-de-donnees-migrations'
    ],
    relatedSkills: [
      'gestion-de-projet-agile',
      'integration-apis',
      'generation-pdf-facturation',
      'qualite-ci-cd',
      'securite-permissions'
    ]
  },
  {
    sort: '2021-08',
    side: 'right',
    period: 'Aoû 2021 → Oct 2022',
    title: 'Assistant Informatique',
    subtitle: 'Mission Locale Jeune Ariège — Foix',
    chips: ['Support IT', 'HelpDesk'],
    org: 'Mission Locale Jeune Ariège',
    status: 'CDD',
    responsibilities: ['Support aux utilisateurs', 'Exploitation quotidienne'],
    missions: ['Dépannage, suivi, petites automatisations'],
    relatedSkills: ['communication-produit', 'documentation-transfert']
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
    responsibilities: ['Cadrage client', 'Dév. & déploiement'],
    missions: ['Sites vitrines, petits modules sur mesure'],
    relatedSkills: ['ux-applicative', 'communication-produit']
  },
  {
    sort: '2019-09',
    side: 'right',
    period: 'Sep 2019 → Jan 2020',
    title: 'Stagiaire Développeur Web',
    subtitle: 'ECOLAND’s — Lavelanet',
    chips: ['PrestaShop', 'PHP', 'SQL'],
    org: "ECOLAND's",
    status: 'Stage',
    responsibilities: ['Dév. modules PrestaShop', 'Intégration API'],
    missions: ['Webservices compta & stocks, CSV volumineux'],
    relatedSkills: ['integration-apis', 'documentation-transfert']
  }
];
