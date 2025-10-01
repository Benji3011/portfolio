// resources/js/data/parcours.ts
// Données de timeline pour la page Parcours (MUI v6 / Grid v2 compatible)
// Formations (left) et Expériences (right) sur une seule timeline.

export type TimelineEvent = {
  sort: string;                 // YYYY-MM pour l'ordre (desc)
  side: 'left' | 'right';       // left = formation, right = expérience
  period: string;               // ex: 'Avr 2023 → Aujourd’hui'
  title: string;
  subtitle?: string;
  bullets?: string[];
  chips?: string[];
};

export const formations: TimelineEvent[] = [
  {
    sort: '2023-09',
    side: 'left',
    period: '2023 → 2025',
    title: 'Mastère Expert en Ingénierie Logicielle — ISCOD (RNCP niv. 7)',
    chips: ['Ingénierie logicielle', 'Architecture', 'Gestion de projet'],
  },
  {
    sort: '2022-10',
    side: 'left',
    period: 'Oct 2022 → Oct 2023',
    title: 'Concepteur Développeur d’Applications — 3WAcademy',
    chips: ['CDA', 'Conception', 'Full-stack'],
  },
  {
    sort: '2019-01',
    side: 'left',
    period: 'Jan 2019 → Jan 2020',
    title: 'Développeur Web & Web Mobile — Simplon (Pamiers)',
    chips: ['DWWM', 'Agile', 'Pédagogie active'],
  },
  {
    sort: '2016-06',
    side: 'left',
    period: '2016',
    title: 'Baccalauréat Scientifique — Lycée Les Catalins (Montélimar)',
    chips: ['SI', 'ISN'],
  },
];

export const experiences: TimelineEvent[] = [
  {
    sort: '2023-04',
    side: 'right',
    period: 'Avr 2023 → Aujourd’hui',
    title: 'Alternant Ingénieur R&D',
    subtitle: 'Eurécia — Castanet-Tolosan (Toulouse)',
    bullets: [
      "Chef de projet ITIL : mise en place d’iTop (CMDB / processus ITSM).",
      "Développement d’un CRM interne en Laravel.",
      "Contrat d’apprentissage : 4 jours entreprise / 1 jour formation.",
    ],
    chips: ['Laravel', 'ITIL', 'iTop', 'CRM', 'PHP 8', 'MySQL', 'GitLab', 'Jenkins'],
  },
  {
    sort: '2021-08',
    side: 'right',
    period: 'Aoû 2021 → Oct 2022',
    title: 'Assistant Informatique',
    subtitle: 'Mission Locale Jeune Ariège — Foix',
    bullets: [
      'Assistance & dépannage HelpDesk, support utilisateurs.',
      'Gestion du parc informatique et des serveurs.',
    ],
    chips: ['Support IT', 'HelpDesk', 'Parc & Serveurs'],
  },
  {
    sort: '2020-01',
    side: 'right',
    period: 'Jan 2020 → Déc 2020',
    title: 'Micro-entrepreneur — Développement web',
    subtitle: 'Ariège',
    bullets: [
      'Projets vitrines & spécifiques.',
      'Approfondissement : Symfony 5 & React (Webpack Encore, API Platform, Material-UI).',
      'Gestion de projet agile.',
    ],
    chips: ['Symfony', 'React', 'Webpack Encore', 'API Platform', 'Material-UI', 'Agile'],
  },
  {
    sort: '2019-09',
    side: 'right',
    period: 'Sep 2019 → Jan 2020',
    title: 'Stagiaire Développeur Web',
    subtitle: 'ECOLAND’s — Lavelanet',
    bullets: [
      'Création de modules PrestaShop (PHP/SQL).',
      'Webservices API (compta, gestion de stocks).',
      'Traitements volumétriques et optimisation de code.',
    ],
    chips: ['PrestaShop', 'PHP', 'SQL', 'API', 'Comptabilité', 'Stocks'],
  },
];

// Flux unique ordonné (desc) : formations + expériences.
export const events: TimelineEvent[] = [...formations, ...experiences].sort((a, b) => (a.sort < b.sort ? 1 : -1));
