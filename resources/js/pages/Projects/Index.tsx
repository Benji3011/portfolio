import * as React from 'react';
import { useMemo, useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
    Container, Typography, Stack, TextField, FormControl,
    InputLabel, Select, MenuItem, Button, Chip,
} from '@mui/material';
import ProjectCard from '@/components/ProjectCard';
import { projects as RAW_PROJECTS, type Project } from '@/data/projects';
import { sanitizeProject, allTags, allTech } from '@/lib/projects';

type SortKey = 'examples' | 'title' | 'tags';

const normalize = (s: string) =>
    s.normalize('NFKD').toLowerCase().replace(/\s+/g, ' ').trim();

const getQuery = () => new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');

const useQueryState = <T extends string>(key: string, initial: T) => {
    const params = getQuery();
    const fromUrl = (params.get(key) as T) || initial;
    const [val, setVal] = useState<T>(fromUrl);

    useEffect(() => {
        const p = getQuery();
        if (val) p.set(key, String(val));
        else p.delete(key);
        const qs = p.toString();
        window.history.replaceState({}, '', qs ? `?${qs}` : window.location.pathname);
    }, [key, val]);

    return [val, setVal] as const;
};

const useQueryMulti = (key: string) => {
    const params = getQuery();
    const fromUrl = params.getAll(key) // standards
        .concat((params.get(key) || '').split(','))
        .map((v) => v).filter(Boolean);
    const [arr, setArr] = useState<string[]>(Array.from(new Set(fromUrl)));

    useEffect(() => {
        const p = getQuery();
        p.delete(key);
        if (arr.length === 1) p.set(key, arr[0]);
        if (arr.length > 1) p.set(key, arr.join(','));
        const qs = p.toString();
        window.history.replaceState({}, '', qs ? `?${qs}` : window.location.pathname);
    }, [key, arr]);

    return [arr, setArr] as const;
};

export default function ProjectsIndex() {
    const ALL_PROJECTS = useMemo<Project[]>(
        () => RAW_PROJECTS.map(sanitizeProject),
        []
    );

    // --- state (URL-sync) ---
    const [q, setQ] = useQueryState<string>('q', '');
    const [sortKey, setSortKey] = useQueryState<SortKey>('sort', 'examples');
    const [selectedTags, setSelectedTags] = useQueryMulti('tags');
    const [selectedTech, setSelectedTech] = useQueryMulti('tech');

    const TAGS = useMemo(() => allTags(ALL_PROJECTS), [ALL_PROJECTS]);
    const TECH = useMemo(() => allTech(ALL_PROJECTS), [ALL_PROJECTS]);

    const filtered = useMemo(() => {
        const query = normalize(q);

        const byQuery = (p: Project) => {
            if (!query) return true;
            const hay = [
                p.title, p.summary,
                (p.tags || []).join(' '),
                (p.tech || []).join(' '),
                (p.highlights || []).join(' '),
            ].map(normalize).join(' ');
            return hay.includes(query);
        };

        const byTags = (p: Project) =>
            selectedTags.length === 0 || selectedTags.every((t) => p.tags.includes(t));

        const byTech = (p: Project) =>
            selectedTech.length === 0 || selectedTech.every((t) => p.tech.includes(t));

        const arr = ALL_PROJECTS.filter((p) => byQuery(p) && byTags(p) && byTech(p));

        switch (sortKey) {
            case 'title':
                return arr.sort((a, b) => a.title.localeCompare(b.title));
            case 'tags':
                return arr.sort((a, b) => (b.tags?.length ?? 0) - (a.tags?.length ?? 0));
            case 'examples':
            default:
                return arr.sort((a, b) => (b.examples?.length ?? 0) - (a.examples?.length ?? 0));
        }
    }, [ALL_PROJECTS, q, selectedTags, selectedTech, sortKey]);

    const toggle = (list: string[], set: (v: string[]) => void, item: string) =>
        set(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);

    return (
        <Container maxWidth="lg">
            <Stack spacing={1.5} mt={4} mb={3}>
                <Typography variant="h4">Mes réalisations</Typography>
                <Typography variant="body2" color="text.secondary">
                    {filtered.length} projet{filtered.length > 1 ? 's' : ''} sur {ALL_PROJECTS.length}
                </Typography>
            </Stack>

            {/* Toolbar */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mb={3}>
                <TextField
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    label="Rechercher (titre, résumé, tags, stack)…"
                    variant="outlined"
                    fullWidth
                    inputProps={{ 'aria-label': 'Rechercher' }}
                />

                <FormControl sx={{ minWidth: 180 }}>
                    <InputLabel id="sort-label">Trier par</InputLabel>
                    <Select
                        labelId="sort-label"
                        value={sortKey}
                        label="Trier par"
                        onChange={(e) => setSortKey(e.target.value as SortKey)}
                    >
                        <MenuItem value="examples">+ d’exemples</MenuItem>
                        <MenuItem value="title">Titre</MenuItem>
                        <MenuItem value="tags">+ de tags</MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            {/* Filtres tags */}
            <Stack spacing={1} mb={2}>
                <Typography variant="overline">Tags</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {TAGS.map((t) => (
                        <Chip
                            key={t}
                            label={`#${t}`}
                            size="small"
                            variant={selectedTags.includes(t) ? 'filled' : 'outlined'}
                            color={selectedTags.includes(t) ? 'primary' : 'default'}
                            onClick={() => toggle(selectedTags, setSelectedTags, t)}
                            aria-pressed={selectedTags.includes(t)}
                        />
                    ))}
                </Stack>
            </Stack>

            {/* Filtres tech */}
            <Stack spacing={1} mb={3}>
                <Typography variant="overline">Technos</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {TECH.map((t) => (
                        <Chip
                            key={t}
                            label={t}
                            size="small"
                            variant={selectedTech.includes(t) ? 'filled' : 'outlined'}
                            color={selectedTech.includes(t) ? 'primary' : 'default'}
                            onClick={() => toggle(selectedTech, setSelectedTech, t)}
                            aria-pressed={selectedTech.includes(t)}
                        />
                    ))}
                </Stack>
            </Stack>

            {/* Grille responsive */}
            <Grid container spacing={2}>
                {filtered.map((p) => (
                    <Grid key={p.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                        <ProjectCard project={p} href={`/projects/${p.slug}`} />
                    </Grid>
                ))}
            </Grid>

            {filtered.length === 0 && (
                <Stack alignItems="center" justifyContent="center" py={8}>
                    <Typography color="text.secondary">
                        Aucun résultat. Modifie la recherche ou les tags/technos.
                    </Typography>
                </Stack>
            )}

            <Stack mt={4} mb={6}>
                <Link href="/">{/* footer léger si besoin */}</Link>
            </Stack>
        </Container>
    );
}
