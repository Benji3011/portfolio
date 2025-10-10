import * as React from 'react';
import { Head, usePage, Link as InertiaLink } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
    Container, Stack, Typography, Chip, Card, CardContent,
    Divider, Button, Link as MuiLink, Breadcrumbs,
} from '@mui/material';

import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { sanitizeProject, formatTimeframe } from '@/lib/projects';

type PageProps = { slug?: string; project?: any };

function SkillsForProject({ slug }: Readonly<{ slug: string }>) {
    const s = skills.filter((sk: any) => (sk.relatedProjects || []).includes(slug));

    if (!s.length) {
        return (
            <Typography variant="body2" color="text.secondary">
                À relier dans <code>data/skills.ts</code> (relatedProjects).
            </Typography>
        );
    }

    return (
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {s.map((sk: any) => (
                <Chip
                    key={sk.slug}
                    label={sk.name}
                    component={InertiaLink as any}
                    href={`/skills/${sk.slug}`}
                    clickable
                    variant="outlined"
                    size="small"
                />
            ))}
        </Stack>
    );
}

function SectionCard({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>{title}</Typography>
                <Divider sx={{ mb: 1 }} />
                {children}
            </CardContent>
        </Card>
    );
}

export default function ProjectShow() {
    const { props } = usePage<PageProps>();
    const slug =
        props.slug ??
        (typeof window !== 'undefined'
            ? window.location.pathname.split('/').filter(Boolean).pop() || ''
            : '');

    const raw = React.useMemo(() => {
        if (props.project) return props.project;
        return projects.find((p: any) => p.slug === slug);
    }, [props.project, slug]);

    const project = raw ? sanitizeProject(raw) : undefined;

    if (!project) {
        return (
            <Container maxWidth="md">
                <Stack mt={4} spacing={2}>
                    <Typography variant="h5">Projet introuvable</Typography>
                    <Button component={InertiaLink as any} href="/projects" variant="outlined">
                        ← Retour
                    </Button>
                </Stack>
            </Container>
        );
    }

    const tf = formatTimeframe(project.timeframe);

    // JSON-LD minimal (Project)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.summary,
        keywords: [...(project.tags || []), ...(project.tech || [])].join(', '),
        dateCreated: project.timeframe?.start,
        dateModified: project.timeframe?.end || project.timeframe?.start,
    };

    return (
        <Container maxWidth="lg">
            <Head title={project.title}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </Head>

            {/* Breadcrumbs */}
            <Stack mt={3} mb={1}>
                <Breadcrumbs aria-label="breadcrumb">
                    <MuiLink component={InertiaLink as any} href="/projects" underline="hover" color="inherit">
                        Projets
                    </MuiLink>
                    <Typography color="text.primary">{project.title}</Typography>
                </Breadcrumbs>
            </Stack>

            {/* Header */}
            <Stack spacing={0.5} mt={1} mb={2}>
                <Typography variant="h4">{project.title}</Typography>
                {project.summary && (
                    <Typography variant="body2" color="text.secondary">
                        {project.summary}
                    </Typography>
                )}
                {tf && (
                    <Typography variant="caption" color="text.secondary">
                        {tf}
                    </Typography>
                )}
            </Stack>

            {/* Tags & Tech */}
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="overline">Tags</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                                {(project.tags || []).map((t: string) => (
                                    <Chip key={t} label={`#${t}`} size="small" />
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="overline">Technos</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                                {(project.tech || []).map((t: string) => (
                                    <Chip key={t} label={t} size="small" variant="outlined" />
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Colonnes principales */}
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <SectionCard title="Détails">
                        {project.examples?.length ? (
                            <Stack divider={<Divider flexItem />} spacing={2}>
                                {project.examples.map((ex, i) => (
                                    <div key={i}>
                                        <Typography variant="overline" display="block" gutterBottom>
                                            {labelForKey(ex.key)}
                                        </Typography>
                                        <Typography variant="body2">{ex.summary}</Typography>
                                        {(ex.type || ex.status || ex.date) && (
                                            <Stack direction="row" spacing={2} mt={1}>
                                                {ex.type && <Typography variant="caption">Type : {ex.type}</Typography>}
                                                {ex.status && <Typography variant="caption">Statut : {ex.status}</Typography>}
                                                {ex.date && <Typography variant="caption">Date : {ex.date}</Typography>}
                                            </Stack>
                                        )}
                                    </div>
                                ))}
                            </Stack>
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                À compléter dans <code>data/projects.ts</code> → <code>examples[]</code>.
                            </Typography>
                        )}
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <SectionCard title="Compétences rattachées">
                        <SkillsForProject slug={project.slug} />
                    </SectionCard>

                    <SectionCard title="Points clés">
                        {(project.highlights?.length ?? 0) > 0 ? (
                            <Stack component="ul" spacing={0.5} pl={2} mt={0.5}>
                                {project.highlights.map((h: string, i: number) => (
                                    <li key={i}><Typography variant="body2">{h}</Typography></li>
                                ))}
                            </Stack>
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                Ajoute 2–5 bullet points parlants (résultats, impacts, contraintes).
                            </Typography>
                        )}
                    </SectionCard>

                    <SectionCard title="Ressources (optionnel)">
                        <Typography variant="body2" color="text.secondary">
                            Lien interne, doc, capture… (champ libre).
                        </Typography>
                    </SectionCard>
                </Grid>
            </Grid>

            <Stack direction="row" spacing={1} my={4}>
                <Button component={InertiaLink as any} href="/projects" variant="outlined">
                    ← Retour
                </Button>
            </Stack>
        </Container>
    );
}

function labelForKey(key: string) {
    switch (key) {
        case 'definition': return 'Présentation';
        case 'objectif': return 'Objectifs';
        case 'etapes': return 'Étapes';
        case 'acteurs': return 'Acteurs';
        case 'resultats': return 'Résultats'; // compat arrière
        case 'resultats_entreprise': return 'Résultats — entreprise';
        case 'resultats_pour_moi': return 'Résultats — pour moi';
        case 'lendemains': return 'Lendemains du projet'; // compat arrière
        case 'lendemains_immediat': return 'Lendemains — immédiat';
        case 'lendemains_moyen_terme': return 'Lendemains — moyen terme';
        case 'lendemains_aujourdhui': return 'Lendemains — aujourd’hui';
        case 'regard': return 'Regard critique';
        default: return key;
    }
}
