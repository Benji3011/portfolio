import * as React from 'react';
import {
    Box,
    Chip,
    Container,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TextField,
    Tabs,
    Tab,
} from '@mui/material';
import { Link as InertiaLink, Head } from '@inertiajs/react';
import SkillsRadar, { RadarDatum } from '@/components/SkillsRadar';
import { competences } from '@/data/competences';
import { projects } from '@/data/projects';

function Level({ v }: Readonly<{ v: 0 | 1 | 2 | 3 }>) {
    const labels = ['0 — Découverte', '1 — Opérationnel', '2 — Avancé', '3 — Expert'] as const;
    return <Chip size="small" label={labels[v]} variant="outlined" sx={{ borderRadius: 999 }} />;
}

// Heuristiques de catégorisation si aucune catégorie n’existe dans data/competences
function guessCategory(label: string): 'Backend' | 'Frontend' | 'DevOps' | 'Qualité' | 'Soft Skills' {
    const l = label.toLowerCase();
    if (/(react|typescript|vue|frontend|ui|ux)/.test(l)) return 'Frontend';
    if (/(docker|kubernetes|ci\/cd|devops|git|pipeline|infra)/.test(l)) return 'DevOps';
    if (/(test|qualité|lint|coverage|sécurité|cve|owasp)/.test(l)) return 'Qualité';
    if (/(communication|leadership|management|soft|humaines|collaboration|pédagogie|transmission)/.test(l)) return 'Soft Skills';
    return 'Backend';
}

type C = {
    id: string | number;
    bloc: string;
    label: string;
    level: 0 | 1 | 2 | 3;
    projects: string[];
    category?: 'Backend' | 'Frontend' | 'DevOps' | 'Qualité' | 'Soft Skills';
};

const ALL_BLOCS = Array.from(new Set(competences.map((c: any) => c.bloc))) as string[];
const CATEGORIES: Array<C['category']> = ['Backend', 'Frontend', 'DevOps', 'Qualité', 'Soft Skills'];

export default function CompetencesPage() {
    const data: C[] = competences.map((c: any) => ({
        ...c,
        category: (c.category as C['category']) ?? guessCategory(c.label),
    }));

    const [tab, setTab] = React.useState<0 | 1 | 2>(0); // 0: Global, 1: Techniques, 2: Humaines
    const [bloc, setBloc] = React.useState<string | 'Tous'>('Tous');
    const [q, setQ] = React.useState('');

    const filtered = data.filter((c) => (bloc === 'Tous' ? true : c.bloc === bloc))
        .filter((c) => (q ? c.label.toLowerCase().includes(q.toLowerCase()) : true));

    const techCats: C['category'][] = ['Backend', 'Frontend', 'DevOps', 'Qualité'];
    const humanCats: C['category'][] = ['Soft Skills'];

    const cats = tab === 0 ? CATEGORIES : tab === 1 ? techCats : humanCats;

    const radar: RadarDatum[] = cats.map((cat) => {
        const items = filtered.filter((c) => c.category === cat);
        if (items.length === 0) return { category: cat!, value: 0 };
        const avg = items.reduce((s, c) => s + c.level, 0) / items.length; // 0–3
        return { category: cat!, value: Math.round((avg / 3) * 100) }; // 0–100
    });

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 2 }}>
            <Head title="Compétences" />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
                    Compétences
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                    Carte des compétences alignée sur les blocs RNCP. Filtrez par bloc, recherchez une compétence, et visualisez le niveau au radar.
                </Typography>

                <Paper
                    sx={{
                        p: 2,
                        mb: 2,
                    }}
                >
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="center">
                        <Tabs
                            value={tab}
                            onChange={(_, v) => setTab(v)}
                            sx={{ borderRadius: 3 }}
                        >
                            <Tab label="Global" />
                            <Tab label="Techniques" />
                            <Tab label="Humaines" />
                        </Tabs>

                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                            <Chip
                                label="Tous"
                                clickable
                                color={bloc === 'Tous' ? 'primary' : 'default'}
                                onClick={() => setBloc('Tous')}
                                sx={{ borderRadius: 999 }}
                            />
                            {ALL_BLOCS.map((b) => (
                                <Chip
                                    key={b}
                                    label={b}
                                    clickable
                                    color={bloc === b ? 'primary' : 'default'}
                                    onClick={() => setBloc(b)}
                                    sx={{ borderRadius: 999 }}
                                />
                            ))}
                        </Stack>

                        <Box sx={{ flexGrow: 1 }} />

                        <TextField
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            size="small"
                            placeholder="Rechercher une compétence…"
                            sx={{ minWidth: 260 }}
                        />
                    </Stack>
                </Paper>

                <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} sx={{ mb: 3 }}>
                    <Box sx={{ flex: 1 }}>
                        <SkillsRadar
                            title={
                                tab === 0 ? 'Radar global' : tab === 1 ? 'Radar techniques' : 'Radar soft skills'
                            }
                            data={radar}
                        />
                    </Box>
                    <Paper
                        sx={{
                            p: 2,
                            flex: 1,
                        }}
                    >
                        <Typography variant="subtitle1" fontWeight={800} sx={{ mb: 1 }}>
                            Lecture rapide
                        </Typography>
                        <Stack spacing={1} color="text.secondary">
                            <Typography>• <strong>{filtered.length}</strong> compétences affichées</Typography>
                            <Typography>• Regrouper par : {cats.join(' · ')}</Typography>
                            <Typography>• Niveau moyen visible au radar (0–100)</Typography>
                        </Stack>
                    </Paper>
                </Stack>

                <TableContainer
                    component={Paper}
                    sx={{
                        borderRadius: 2,
                        overflow: 'hidden',
                        bgcolor: (t) => (t.palette.mode === 'light' ? '#fff' : '#121212'),
                        color: 'text.primary',
                    }}
                >
                    <Table size="small" sx={{ minWidth: 960, '& th, & td': { color: 'text.primary' } }}>
                        <TableHead>
                            <TableRow sx={{ '& th': { fontWeight: 700 } }}>
                                <TableCell sx={{ width: 80 }}>ID</TableCell>
                                <TableCell sx={{ width: 90 }}>Bloc</TableCell>
                                <TableCell sx={{ width: 220 }}>Catégorie</TableCell>
                                <TableCell>Intitulé</TableCell>
                                <TableCell sx={{ width: 160 }}>Niveau</TableCell>
                                <TableCell sx={{ width: 260 }}>Preuves (projets)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filtered.map(({ id, bloc, label, level, projects: slugs, category }) => (
                                <TableRow key={String(id)} hover>
                                    <TableCell>{id}</TableCell>
                                    <TableCell>{bloc}</TableCell>
                                    <TableCell>{category}</TableCell>
                                    <TableCell>{label}</TableCell>
                                    <TableCell>
                                        <Level v={level} />
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                            {slugs.map((slug) => {
                                                const p = projects.find((x) => x.slug === slug);
                                                if (!p) return null;
                                                return (
                                                    <Chip
                                                        key={slug}
                                                        label={p.title}
                                                        component={InertiaLink as any}
                                                        href={`/projects/${slug}`}
                                                        clickable
                                                        variant="outlined"
                                                        size="small"
                                                        sx={{ borderRadius: 999 }}
                                                    />
                                                );
                                            })}
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}
