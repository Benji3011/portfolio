export type Competence = {
    id: `C.${1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18}`;
    bloc: 'Bloc 1'|'Bloc 2'|'Bloc 3'|'Bloc 4';
    label: string;
    level: 0|1|2|3;
    projects: string[]; // slugs
};

export const competences: Competence[] = [
    { id: 'C.1',  bloc: 'Bloc 1', label: "Organiser et conduire une réunion…", level: 2, projects: ['crm-contentieux','integration-hubspot'] },
    { id: 'C.2',  bloc: 'Bloc 1', label: "Analyser le besoin et rédiger les specs…", level: 3, projects: ['crm-contentieux'] },
    { id: 'C.3',  bloc: 'Bloc 1', label: "Modéliser données/processus (UML, BPMN)…", level: 2, projects: ['crm-contentieux'] },
    { id: 'C.4',  bloc: 'Bloc 1', label: "Prototyper et valider avec les parties prenantes…", level: 2, projects: ['integration-hubspot'] },

    { id: 'C.5',  bloc: 'Bloc 2', label: "Planifier, estimer, prioriser (backlog/sprints)…", level: 2, projects: ['crm-contentieux'] },
    { id: 'C.6',  bloc: 'Bloc 2', label: "Piloter les risques et la qualité…", level: 2, projects: ['crm-contentieux'] },
    { id: 'C.7',  bloc: 'Bloc 2', label: "Suivre les indicateurs et reporting…", level: 1, projects: ['crm-contentieux'] },
    { id: 'C.8',  bloc: 'Bloc 2', label: "Animer l’équipe (daily, revue, rétro)…", level: 2, projects: ['crm-contentieux'] },

    { id: 'C.9',  bloc: 'Bloc 3', label: "Concevoir l’architecture logicielle…", level: 2, projects: ['crm-contentieux'] },
    { id: 'C.10', bloc: 'Bloc 3', label: "Mettre en place tests (unit/intégration)…", level: 2, projects: ['crm-contentieux'] },
    { id: 'C.11', bloc: 'Bloc 3', label: "Intégrer des services/API (REST, OAuth)…", level: 3, projects: ['integration-hubspot'] },
    { id: 'C.12', bloc: 'Bloc 3', label: "Automatiser build & déploiement (CI/CD)…", level: 3, projects: ['crm-contentieux'] },

    { id: 'C.13', bloc: 'Bloc 4', label: "Optimiser performances et sécurité…", level: 2, projects: ['crm-contentieux'] },
    { id: 'C.14', bloc: 'Bloc 4', label: "Gérer données et migration…", level: 2, projects: ['crm-contentieux'] },
    { id: 'C.15', bloc: 'Bloc 4', label: "Industrialiser (Docker, envs, monitoring)…", level: 2, projects: ['crm-contentieux'] },
    { id: 'C.16', bloc: 'Bloc 4', label: "Documenter et transférer…", level: 3, projects: ['crm-contentieux','integration-hubspot'] },
    { id: 'C.17', bloc: 'Bloc 4', label: "Assurer la maintenance évolutive/corrective…", level: 2, projects: ['crm-contentieux'] },
    { id: 'C.18', bloc: 'Bloc 4', label: "Conduire la veille technologique…", level: 3, projects: ['integration-hubspot'] },
];
