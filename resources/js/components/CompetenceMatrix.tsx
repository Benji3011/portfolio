import React, { useMemo } from 'react';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';
import { Link } from '@inertiajs/react';

export default function CompetenceMatrix() {
    const matrix = useMemo(() => {
        const cols = projects.map(p => p.slug);
        const rows = skills.map(s => s.slug);
        const has = (s: string, p: string) => skills.find(x => x.slug===s)?.relatedProjects?.includes(p);

        return { cols, rows, has };
    }, []);

    return (
        <div className="overflow-x-auto border rounded-2xl">
            <table className="min-w-[720px] w-full text-sm">
                <thead>
                    <tr className="bg-black/5 dark:bg-white/10">
                        <th className="text-left p-3">Compétence</th>
                        {matrix.cols.map(c => (
                            <th key={c} className="p-3 text-left">
                                <Link href={`/projects/${c}`} className="underline">{c}</Link>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {matrix.rows.map(r => {
                        const skill = skills.find(s => s.slug===r)!;
                        return (
                            <tr key={r} className="border-t">
                                <td className="p-3">
                                    <Link href={`/skills/${r}`} className="underline">{skill.name}</Link>
                                </td>
                                {matrix.cols.map(c => (
                                    <td key={c} className="p-3">
                                        {matrix.has(r, c) ? '●' : ''}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
