import * as React from 'react';
import { Head, usePage, Link as InertiaLink } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
    Container,
    Stack,
    Typography,
    Chip,
    Card,
    CardContent,
    Divider,
    Button,
    Link as MuiLink,
} from '@mui/material';

import { projects } from '../../data/projects';
import { skills } from '../../data/skills';

type PageProps = {
    slug?: string;
    project?: any; // si le backend envoie directement l'objet projet
};

function SkillsForProject({ slug }: { slug: string }) {
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

    // 1) récupérer le slug depuis les props ou, fallback, depuis l’URL
    const slug =
        props.slug ??
        (typeof window !== 'undefined'
            ? window.location.pathname.split('/').filter(Boolean).pop() || ''
            : '');

    // 2) récupérer le projet : props.project (si fourni par le backend) ou via le dataset local
    const project = React.useMemo(() => {
        if (props.project) return props.project;
        return projects.find((p: any) => p.slug === slug);
    }, [props.project, slug]);

    if (!project) {
        return (
            <Container maxWidth="md">
                <Head title="Projet introuvable" />
                <Stack spacing={2} mt={8} alignItems="center">
                    <Typography variant="h6">Projet introuvable</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Impossible de trouver le projet pour le slug <code>{slug}</code>.
                    </Typography>
                    <Button component={InertiaLink as any} href="/projects" variant="outlined">
                        ← Retour aux projets
                    </Button>
                </Stack>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg">
            <Head title={project.title} />

            {/* Header */}
            <Stack spacing={0.5} mt={4} mb={2}>
                <Typography variant="h4">{project.title}</Typography>
                {project.summary && (
                    <Typography variant="body2" color="text.secondary">
                        {project.summary}
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
                            <Typography variant="overline">Tech</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                                {(project.tech || []).map((t: string) => (
                                    <Chip key={t} label={t} size="small" variant="outlined" />
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Highlights */}
            {(project.highlights?.length ?? 0) > 0 && (
                <Card variant="outlined" sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant="overline">Points clés</Typography>
                        <Stack component="ul" spacing={0.5} pl={2} mt={1}>
                            {project.highlights.map((h: string, i: number) => (
                                <li key={i}>
                                    <Typography variant="body2">{h}</Typography>
                                </li>
                            ))}
                        </Stack>
                    </CardContent>
                </Card>
            )}

            {/* Dossier de réalisation — 7 rubriques */}
            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
                    <SectionCard title="Présentation & définition">
                        <Typography variant="body2">{project.summary || '—'}</Typography>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
                    <SectionCard title="Objectifs, contexte, enjeux & risques">
                        <Typography variant="body2">
                            {`Objectif principal : ${project.title}. `}
                            {`Contexte : ${(project.tags || []).slice(0, 3).join(', ') || '—'}. `}
                            {`Stack : ${(project.tech || []).slice(0, 3).join(', ') || '—'}.`}
                        </Typography>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
                    <SectionCard title="Ce que j’ai fait (étapes)">
                        {(project.highlights?.length ?? 0) > 0 ? (
                            <Stack component="ul" spacing={0.5} pl={2} mt={0.5}>
                                {project.highlights.map((h: string, i: number) => (
                                    <li key={i}><Typography variant="body2">{h}</Typography></li>
                                ))}
                            </Stack>
                        ) : (
                            <Typography variant="body2" color="text.secondary">À compléter.</Typography>
                        )}
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
                    <SectionCard title="Acteurs & interactions">
                        <Typography variant="body2">
                            Parties prenantes : produit, support, exploitation (ex.). Rythme : itératif, feedbacks fréquents.
                        </Typography>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
                    <SectionCard title="Résultats">
                        <Typography variant="body2">
                            {`Livrables : ${(project.examples?.length ?? 0)} ticket(s) / extraits associés (voir ci-dessous si présents).`}
                        </Typography>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
                    <SectionCard title="Lendemains (suite proche / à distance / aujourd’hui)">
                        <Typography variant="body2">
                            Pistes : industrialisation, monitoring léger, automatisation CI/CD, documentation ciblée.
                        </Typography>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
                    <SectionCard title="Regard critique">
                        <Typography variant="body2">
                            Points forts : valeur directe, robustesse. Axes d’amélioration : tests, métriques d’adoption.
                        </Typography>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
                    <SectionCard title="Compétences mobilisées">
                        <SkillsForProject slug={project.slug} />
                    </SectionCard>
                </Grid>
            </Grid>


            {/* Examples */}
            {(project.examples?.length ?? 0) > 0 && (
                <>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        Exemples (extraits)
                    </Typography>

                    <Grid container spacing={2}>
                        {project.examples.map((ex: any, idx: number) => (
                            <Grid key={idx} size={{ xs: 12, md: 6 }}>
                                <Card variant="outlined">
                                    <CardContent>
                                        {ex.title && <Typography variant="subtitle1">{ex.title}</Typography>}
                                        {ex.description && (
                                            <Typography variant="body2" color="text.secondary">
                                                {ex.description}
                                            </Typography>
                                        )}
                                        {ex.link && (
                                            <Button
                                                component={MuiLink}
                                                href={ex.link}
                                                target="_blank"
                                                rel="noopener"
                                                size="small"
                                                sx={{ mt: 1 }}
                                            >
                                                Ouvrir
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}

            <Stack direction="row" spacing={1} my={4}>
                <Button component={InertiaLink as any} href="/projects" variant="outlined">
                    ← Retour
                </Button>
            </Stack>
        </Container>
    );
}
