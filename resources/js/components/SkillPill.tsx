import React from 'react';
import { Link } from '@inertiajs/react';

type Props = {
    name: string;
    href: string;
    type?: 'soft' | 'tech';
};

export default function SkillPill({ name, href, type }: Props) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center px-2 py-1 rounded-full border text-xs mr-2 mb-2
        ${type === 'soft' ? 'opacity-90' : ''}`}
            title={name}
        >
            {name}
        </Link>
    );
}
