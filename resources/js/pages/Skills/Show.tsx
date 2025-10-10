import React, { useMemo } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    Container, Stack, Typography, Chip, Card, CardContent,
    Divider, Button, Box
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { skills, Skill } from '@/data/skills';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SkillLevel from '@/components/SkillLevel';

type PageProps = { slug?: string };

const makeProjectHref = (slug: string) => {
    try {
        // @ts-ignore
        return route('projects.show', { slug });
    } catch {
        return `/projects/${slug}`;
    }
};

export default function SkillShow() {
    let slug: string | undefined;
    try {
        const { props } = usePage<PageProps>();
        slug = props.slug;
    } catch {
        slug = window.location.pathname.split('/').filter(Boolean).pop();
    }

    const skill: Skill | undefined = useMemo(
        () => skills.find((s) => s.slug === slug),
        [slug]
    );

    const anchor = skill?.type === 'soft' ? '#humaines' : '#techniques';
    const backHref = `/competences${anchor}`;

    const relatedProjects: Project[] = useMemo(() => {
        if (!skill) return [];
        return projects.filter((p) => skill.relatedProjects?.includes(p.slug));
    }, [skill]);

    const seeAlso = useMemo(() => {
        if (!skill) return [];
        return skills.filter((s) => s.type === skill.type && s.slug !== skill.slug).slice(0, 6);
    }, [skill]);

    if (!skill) {
        return (
            <Container maxWidth="md">
                <Stack mt={4} spacing={2}>
                    <Typography variant="h5">Compétence introuvable</Typography>
                    <Link href="/competences" className="underline">← Retour</Link>
                </Stack>
            </Container>
        );
    }

    return (
        <>
            <Head title={skill.name} />
            <Container maxWidth="md" sx={{ py: 3 }}>
                {/* Back */}
                <Stack direction="row" justifyContent="flex-start" sx={{ mb: 1 }}>
                    <Button
                        component={Link as any}
                        href={backHref}
                        startIcon={<ArrowBackIosNewIcon fontSize="small" />}
                        variant="outlined"
                        size="small"
                    >
                        Retour aux compétences
                    </Button>
                </Stack>

                {/* Header */}
                <Stack spacing={0.5} mt={1} mb={1.5}>
                    <Typography variant="h4">{skill.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {skill.type === 'tech' ? 'Compétence technique' : 'Compétence humaine'}
                    </Typography>
                </Stack>

                {/* Résumé compact (niveau + méta) */}
                <Card variant="outlined" sx={{ mb: 2 }}>
                    <CardContent>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={1.5}
                            alignItems={{ xs: 'flex-start', sm: 'center' }}
                            justifyContent="space-between"
                        >
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <SkillLevel level={skill.level} />
                                <Typography variant="body2" color="text.secondary">
                                    Niveau {skill.level}/5
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                <Chip size="small" label={`Priorité : ${skill.priority}`} />
                                <Chip size="small" label={`Acquisition : ${skill.acquisitionSpeed}`} />
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>

                {/* Définition & contexte */}
                {skill.definition && (
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Définition & contexte</Typography>
                            <Divider sx={{ mb: 1 }} />
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                                {skill.definition}
                            </Typography>
                        </CardContent>
                    </Card>
                )}

                {/* Éléments de preuve */}
                {!!skill.proofs?.length && (
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Éléments de preuve</Typography>
                            <Divider sx={{ mb: 1 }} />
                            <Stack spacing={1.5} divider={<Divider flexItem />}>
                                {skill.proofs.map((p, i) => (
                                    <Box key={i}>
                                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                                            {p.story}
                                        </Typography>

                                        {/* Ligne méta compacte */}
                                        {(p.result || p.valueAdded || p.projectSlug) && (
                                            <Stack direction="row" spacing={1} mt={0.75} flexWrap="wrap" useFlexGap>
                                                {p.result && (
                                                    <Chip
                                                        size="small"
                                                        color="success"
                                                        variant="outlined"
                                                        label={`Résultat : ${p.result}`}
                                                    />
                                                )}
                                                {p.valueAdded && (
                                                    <Chip
                                                        size="small"
                                                        color="primary"
                                                        variant="outlined"
                                                        label={`Valeur ajoutée : ${p.valueAdded}`}
                                                    />
                                                )}
                                                {p.projectSlug && (
                                                    <Chip
                                                        size="small"
                                                        variant="outlined"
                                                        component={Link as any}
                                                        href={makeProjectHref(p.projectSlug)}
                                                        clickable
                                                        label="Voir la réalisation"
                                                    />
                                                )}
                                            </Stack>
                                        )}
                                    </Box>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                )}

                {/* Résultats globaux */}
                {skill.results && (
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Résultats</Typography>
                            <Divider sx={{ mb: 1 }} />
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                                {skill.results}
                            </Typography>
                        </CardContent>
                    </Card>
                )}

                {/* Auto-critique */}
                {skill.selfReview && (
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Auto-critique</Typography>
                            <Divider sx={{ mb: 1 }} />
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                                {skill.selfReview}
                            </Typography>
                        </CardContent>
                    </Card>
                )}

                {/* Évolution & formations */}
                {(skill.evolution || (skill.trainingsPlanned?.length ?? 0) > 0) && (
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Évolution</Typography>
                            <Divider sx={{ mb: 1 }} />
                            {skill.evolution && (
                                <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                                    {skill.evolution}
                                </Typography>
                            )}
                            {!!skill.trainingsPlanned?.length && (
                                <Stack spacing={0.5} mt={1}>
                                    {skill.trainingsPlanned.map((t, i) => (
                                        <Typography key={i} variant="caption">
                                            • {t}
                                        </Typography>
                                    ))}
                                </Stack>
                            )}
                        </CardContent>
                    </Card>
                )}

                {/* Réalisations liées */}
                {!!relatedProjects.length && (
                    <>
                        <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>Réalisations liées</Typography>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {relatedProjects.map((p) => (
                                <ProjectCard key={p.slug} project={p} href={makeProjectHref(p.slug)} />
                            ))}
                        </div>
                    </>
                )}

                {/* Voir aussi */}
                {!!seeAlso.length && (
                    <>
                        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Voir aussi</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {seeAlso.map((s) => (
                                <Chip
                                    key={s.slug}
                                    label={s.name}
                                    component={Link as any}
                                    href={`/skills/${s.slug}`}
                                    clickable
                                    size="small"
                                    variant="outlined"
                                />
                            ))}
                        </Stack>
                    </>
                )}
            </Container>
        </>
    );
}
