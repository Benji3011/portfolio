import * as React from 'react';
import { useMemo, useState } from 'react';
import { Link } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
    Container,
    Typography,
    Stack,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Chip,
} from '@mui/material';
import { projects as ALL_PROJECTS, type Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

type SortKey = 'title' | 'examples' | 'tags';

const normalize = (s: string) =>
    s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default function Index() {
    const [q, setQ] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [sortKey, setSortKey] = useState<SortKey>('examples');

    const allTags = useMemo(() => {
        const s = new Set<string>();
        ALL_PROJECTS.forEach((p) => p.tags.forEach((t) => s.add(t)));
        return Array.from(s).sort();
    }, []);

    const filtered = useMemo(() => {
        const query = normalize(q);

        const byQuery = (p: Project) => {
            if (!query) return true;
            const hay = [
                p.title,
                p.summary,
                p.tags.join(' '),
                p.tech.join(' '),
                p.highlights.join(' '),
            ]
                .map(normalize)
                .join(' ');
            return hay.includes(query);
        };

        const byTags = (p: Project) =>
            selectedTags.length === 0 ||
            selectedTags.every((tag) => p.tags.includes(tag));

        const arr = ALL_PROJECTS.filter((p) => byQuery(p) && byTags(p));

        arr.sort((a, b) => {
            if (sortKey === 'title') return a.title.localeCompare(b.title);
            if (sortKey === 'tags') return b.tags.length - a.tags.length;
            return (b.examples?.length ?? 0) - (a.examples?.length ?? 0);
        });

        return arr;
    }, [q, selectedTags, sortKey]);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
        );
    };

    const clearFilters = () => {
        setSelectedTags([]);
        setQ('');
        setSortKey('examples');
    };

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
                {(q || selectedTags.length > 0) && (
                    <Button onClick={clearFilters}>Réinitialiser</Button>
                )}
            </Stack>

            {/* Tag filters */}
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mb={3}>
                {allTags.map((tag) => {
                    const active = selectedTags.includes(tag);
                    return (
                        <Chip
                            key={tag}
                            label={`#${tag}`}
                            clickable
                            color={active ? 'primary' : 'default'}
                            variant={active ? 'filled' : 'outlined'}
                            onClick={() => toggleTag(tag)}
                            aria-pressed={active}
                            aria-label={`Filtrer par ${tag}`}
                        />
                    );
                })}
            </Stack>

            {/* Grille responsive (size) : 1 / 2 / 3 colonnes */}
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
                        Aucun résultat. Modifie la recherche ou les tags.
                    </Typography>
                </Stack>
            )}

            <Stack mt={4} mb={6}>
                <Link href="/">{/* footer léger si besoin */}</Link>
            </Stack>
        </Container>
    );
}
