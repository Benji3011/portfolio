// js/lib/skills-derived.ts
import type { Skill } from '@/data/skills';
import type { Competence } from '@/data/competences';

// Conversion EIL 0..3 -> 1..5 (lisible sur radar/jauges)
// @ts-ignore
const eilToFive = (lvl: 0|1|2|3): 1|2|3|4|5 => ({0:1,1:3,2:4,3:5}[lvl]);

// Cartographie des 18 EIL vers TES slugs de skills (ajuste si besoin)
const EIL_TO_SKILL: Record<Competence['id'], Skill['slug'][]> = {
    'C.1':  ['collaboration-cross-team'],        // Organiser & conduire une réunion
    'C.2':  ['gestion-de-projet-agile'],         // Analyser le besoin, specs
    'C.3':  ['data-modeling-sql'],               // Modéliser données/processus
    'C.4':  ['frontend-react-ts'],               // Prototyper & valider
    'C.5':  ['gestion-de-projet-agile'],         // Planifier/estimer/prioriser
    'C.6':  ['code-quality-maintainability'],    // Risques & qualité
    'C.7':  ['data-modeling-sql'],               // Indicateurs & reporting
    'C.8':  ['collaboration-cross-team'],        // Animer l’équipe (rituels)
    'C.9':  ['architecture-backend-laravel'],    // Conception / architecture
    'C.10': ['code-quality-maintainability'],    // Tests unit/integration
    'C.11': ['integration-apis'],                // Intégration services/API
    'C.12': ['code-quality-maintainability'],    // Automatisation CI/CD
    'C.13': ['problem-solving'],                 // Perfs & sécurité (résolution)
    'C.14': ['data-modeling-sql'],               // Données & migrations
    'C.15': ['code-quality-maintainability'],    // Industrialisation/monitoring
    'C.16': ['documentation-transfert'],         // Documenter & transférer
    'C.17': ['problem-solving'],                 // Maintenance évolutive/corrective
    'C.18': ['communication-technique'],         // Veille & diffusion
};

type DeriveMode = 'max' | 'avg60_40';
const clamp15 = (n: number): 1|2|3|4|5 => Math.max(1, Math.min(5, Math.round(n))) as 1|2|3|4|5;

/**
 * Retourne skills “métier” avec .level bonifiés par les niveaux EIL mappés.
 * 'max' (défaut) = simple et lisible ; 'avg60_40' = moyenne pondérée (60% skill, 40% EIL).
 */
export function deriveSkillsWithEIL(
    skills: Skill[],
    competences: Competence[],
    mode: DeriveMode = 'max'
): Skill[] {
    const eilBestBySkill = new Map<Skill['slug'], 1|2|3|4|5>();

    for (const c of competences) {
        const slugs = EIL_TO_SKILL[c.id] || [];
        const lvl = eilToFive(c.level);
        for (const slug of slugs) {
            eilBestBySkill.set(slug, Math.max(eilBestBySkill.get(slug) ?? 1, lvl) as 1|2|3|4|5);
        }
    }

    return skills.map((s) => {
        const eil = eilBestBySkill.get(s.slug);
        if (!eil) return s;
        const display = mode === 'max' ? Math.max(s.level, eil) : clamp15(0.6 * s.level + 0.4 * eil);
        return { ...s, level: display as 1|2|3|4|5 };
    });
}
