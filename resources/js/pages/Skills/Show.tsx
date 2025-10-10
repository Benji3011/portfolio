import React, { useMemo } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    Container, Stack, Typography, Chip, Card, CardContent,
    Divider, Button
} from '@mui/material';
import { skills, Skill } from '@/data/skills';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SkillLevel from '@/components/SkillLevel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type PageProps = { slug?: string };

const makeProjectHref = (slug: string) => {
    try { // @ts-ignore
        return route('projects.show', { slug });
    } catch { return `/projects/${slug}`; }
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

    // @ts-ignore
    const anchor = skill.type === 'soft' ? '#humaines' : '#techniques';
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
                    <Link href="/skills" className="underline">← Retour</Link>
                </Stack>
            </Container>
        );
    }

    return (
        <>
            <Head title={skill.name} />
            <Container maxWidth="md">
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
                <Stack spacing={0.5} mt={4} mb={2}>
                    <Typography variant="h4">{skill.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {skill.type === 'tech' ? 'Compétence technique' : 'Compétence humaine'}
                    </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                    <SkillLevel level={skill.level} />
                    <Chip size="small" label={`Priorité: ${skill.priority}`} />
                    <Chip size="small" label={`Acquisition: ${skill.acquisitionSpeed}`} />
                </Stack>

                <Card variant="outlined" sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="subtitle1" gutterBottom>Définition & contexte</Typography>
                        <Divider sx={{ mb: 1 }} />
                        <Typography variant="body2">{skill.definition}</Typography>
                    </CardContent>
                </Card>

                {!!skill.proofs?.length && (
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Éléments de preuve</Typography>
                            <Divider sx={{ mb: 1 }} />
                            <Stack spacing={2}>
                                {skill.proofs.map((p, i) => (
                                    <div key={i}>
                                        <Typography variant="body2">{p.story}</Typography>
                                        <Stack direction="row" spacing={2} mt={0.5}>
                                            {p.result && <Typography variant="caption">Résultat : {p.result}</Typography>}
                                            {p.valueAdded && <Typography variant="caption">Valeur ajoutée : {p.valueAdded}</Typography>}
                                            {p.projectSlug && (
                                                <Typography variant="caption">
                                                    Voir la réalisation : <Link href={makeProjectHref(p.projectSlug)} className="underline">{p.projectSlug}</Link>
                                                </Typography>
                                            )}
                                        </Stack>
                                    </div>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                )}

                {skill.results && (
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Résultats</Typography>
                            <Divider sx={{ mb: 1 }} />
                            <Typography variant="body2">{skill.results}</Typography>
                        </CardContent>
                    </Card>
                )}

                {skill.selfReview && (
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Auto-critique</Typography>
                            <Divider sx={{ mb: 1 }} />
                            <Typography variant="body2">{skill.selfReview}</Typography>
                        </CardContent>
                    </Card>
                )}

                {skill.evolution && (
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>Évolution</Typography>
                            <Divider sx={{ mb: 1 }} />
                            <Typography variant="body2">{skill.evolution}</Typography>
                            {!!skill.trainingsPlanned?.length && (
                                <Stack spacing={0.5} mt={1}>
                                    {skill.trainingsPlanned.map((t, i) => (
                                        <Typography key={i} variant="caption">• {t}</Typography>
                                    ))}
                                </Stack>
                            )}
                        </CardContent>
                    </Card>
                )}

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

                {!!seeAlso.length && (
                    <>
                        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Voir aussi</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {seeAlso.map((s) => (
                                <Chip key={s.slug} label={s.name} component={Link as any} href={`/skills/${s.slug}`} clickable size="small" variant="outlined" />
                            ))}
                        </Stack>
                    </>
                )}
            </Container>
        </>
    );
}
