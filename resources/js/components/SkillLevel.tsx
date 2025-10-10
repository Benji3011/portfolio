import React from 'react';

type Props = { level: 1 | 2 | 3 | 4 | 5 };

export default function SkillLevel({ level }: Props) {
    const items = Array.from({ length: 5 }, (_, i) => i + 1);
    return (
        <div className="flex items-center gap-1">
            {items.map((i) => (
                <span
                    key={i}
                    className={`inline-block h-2 w-6 rounded ${i <= level ? 'bg-current' : 'bg-current/20'}`}
                    aria-hidden
                />
            ))}
            <span className="text-xs ml-2 opacity-70">Niveau {level}/5</span>
        </div>
    );
}
