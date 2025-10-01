import '../css/app.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import AppLayout from "@/layouts/AppLayout";
import React from "react";

const appName = import.meta.env.VITE_APP_NAME || 'Portfolio';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true }) as Record<string, any>;
        const path = Object.keys(pages).find(p => p.endsWith(`/${name}.tsx`));
        if (!path) throw new Error(`Page not found: ${name}`);
        const mod = pages[path];
        const Component = mod?.default;
        if (!Component) throw new Error(`Page ${name} has no default export`);
        Component.layout ??= (page: React.ReactNode) =>
            <AppLayout>
                {page}
            </AppLayout>;
        return Component;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
