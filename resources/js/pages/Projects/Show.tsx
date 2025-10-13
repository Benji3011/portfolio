import * as React from 'react';
import { Head, usePage, Link as InertiaLink } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
    Container, Stack, Typography, Chip, Card, CardContent,
    Divider, Button, Link as MuiLink, Breadcrumbs, Dialog,
    DialogContent, IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { sanitizeProject, formatTimeframe } from '@/lib/projects';

type PageProps = { slug?: string; project?: any };

// ✅ Ajout : typage léger pour les ressources du projet
type Resource = { type: 'front' | 'code' | 'schema' | 'other'; title: string; path: string };

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

// ✅ Ajout : Modale réutilisable (grille + zoom)
function ResourceGalleryModal({open, onClose, resources = []}: Readonly<{ open: boolean; onClose: () => void; resources: Resource[] }>) {
    const [active, setActive] = React.useState<Resource | null>(null);

    return (
        <Dialog open={open} onClose={onClose} fullScreen>
            <IconButton onClick={onClose} sx={{ position: 'fixed', top: 16, right: 16, zIndex: 10 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent sx={{ pt: 6 }}>
                <Grid container spacing={2}>
                    {resources.map((r, i) => (
                        <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card onClick={() => setActive(r)} sx={{ cursor: 'zoom-in', overflow: 'hidden' }}>
                                <img
                                    src={r.path}
                                    alt={r.title}
                                    loading="lazy"
                                    style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
                                />
                                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <ZoomInIcon fontSize="small" />
                                    <Typography variant="subtitle2">{r.title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Zoom plein écran dans la modale */}
                {active && (
                    <div
                        onClick={() => setActive(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,.85)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1200
                        }}
                    >
                        <img
                            src={active.path}
                            alt={active.title}
                            style={{ maxWidth: '92vw', maxHeight: '92vh', objectFit: 'contain' }}
                        />
                    </div>
                )}
            </DialogContent>
        </Dialog>
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

    // ✅ Ajout : état pour la modale ressources
    const [openRes, setOpenRes] = React.useState(false);

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
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
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
                                {project.examples.map((ex: any, i: number) => (
                                    <div key={i}>
                                        <Typography variant="overline" display="block" gutterBottom>
                                            {labelForKey(ex.key)}
                                        </Typography>
                                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                                            {ex.summary}
                                        </Typography>
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
                                Pas d'exemple détaillé pour l’instant.
                            </Typography>
                        )}
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} >
                    <SectionCard title="Compétences rattachées">
                        <SkillsForProject slug={project.slug} />
                    </SectionCard>

                    <SectionCard title="Points clés">
                        {(project.highlights?.length ?? 0) > 0 ? (
                            <Grid container spacing={1}>
                                {project.highlights.map((h: string, i: number) => (
                                    // @ts-ignore
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                p: 1.5,
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: 1.5,
                                                bgcolor: (theme) =>
                                                    theme.palette.mode === 'light'
                                                        ? 'rgba(25,118,210,0.05)'
                                                        : 'rgba(144,202,249,0.08)',
                                                '&:hover': {
                                                    bgcolor: (theme) =>
                                                        theme.palette.mode === 'light'
                                                            ? 'rgba(25,118,210,0.1)'
                                                            : 'rgba(144,202,249,0.15)',
                                                    transition: 'all 0.15s ease-in-out',
                                                },
                                            }}
                                        >
                                            <Typography variant="body2">{h}</Typography>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                Pas encore de points clés listés.
                            </Typography>
                        )}
                    </SectionCard>


                    <SectionCard title="Ressources">
                        {(project.resources?.length ?? 0) > 0 ? (
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Button variant="outlined" onClick={() => setOpenRes(true)}>
                                    Voir les ressources
                                </Button>
                                <Typography variant="caption" color="text.secondary">
                                    {/* @ts-ignore */}
                                    ({project.resources.length} élément{project.resources.length > 1 ? 's' : ''})
                                </Typography>
                            </Stack>
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                Aucune ressource pour l’instant.
                            </Typography>
                        )}
                    </SectionCard>
                </Grid>
            </Grid>

            <Stack direction="row" spacing={1} my={4}>
                <Button component={InertiaLink as any} href="/projects" variant="outlined">
                    ← Retour
                </Button>
            </Stack>

            {/* ✅ Modale ressources (s’ouvre uniquement sur action) */}
            <ResourceGalleryModal
                open={openRes}
                onClose={() => setOpenRes(false)}
                resources={(project.resources || []) as Resource[]}
            />
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
