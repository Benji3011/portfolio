// js/lib/projects.ts
import type { Project } from '@/data/projects';

export function sanitizeProject(p: Project): Project {
    const clean = (s?: string) => (s && s.toLowerCase() !== 'nan' ? s : '');
    const examples = (p.examples || [])
        .filter((ex) => clean(ex.key) && clean(ex.summary))
        .map((ex) => ({
            ...ex,
            key: clean(ex.key)!,
            summary: clean(ex.summary)!,
            type: clean(ex.type) || undefined,
            status: clean(ex.status) || undefined,
            date: clean(ex.date) || undefined,
        }));

    return {
        ...p,
        title: clean(p.title) || p.title,
        summary: clean(p.summary) || p.summary,
        tags: (p.tags || []).filter((t) => clean(t)),
        tech: (p.tech || []).filter((t) => clean(t)),
        highlights: (p.highlights || []).filter((h) => clean(h)),
        examples,
        timeframe: p.timeframe,
    };
}

export function allTags(projects: Project[]): string[] {
    const s = new Set<string>();
    projects.forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
}

export function allTech(projects: Project[]): string[] {
    const s = new Set<string>();
    projects.forEach((p) => (p.tech || []).forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
}

export function formatTimeframe(tf?: { start: string; end?: string }) {
    if (!tf?.start) return '';
    return `${tf.start} → ${tf.end || 'en cours'}`;
}
