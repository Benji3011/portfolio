import * as React from 'react';
import { Head, Link as InertiaLink } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
    Container,
    Stack,
    Typography,
    Card,
    CardContent,
    Chip,
    Button,
    Divider,
} from '@mui/material';

// Données réelles des projets (issues Jira regroupées)
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Presentation() {
    // Choix d’une courte sélection (les 3 premiers groupes les plus parlants)
    const featured = React.useMemo(() => projects.slice(0, 3), []);

    return (
        <Container maxWidth="lg">
            <Head title="Présentation" />

            {/* HERO */}
            <Stack spacing={1.5} mt={4} mb={4} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
                <Typography variant="h3" component="h1">
                    Développeur Full-Stack
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Je conçois et livre des fonctionnalités en internes :
                    CRM, facturation PDF, intégrations outils tiers, sécurité & qualité logicielle.
                </Typography>
                <Stack direction="row" spacing={1} justifyContent={{ md: 'center' }} flexWrap="wrap" useFlexGap>
                    {['Laravel', 'React', 'MUI', 'PHP', 'MySQL', 'CI/CD', 'Docker'].map((t) => (
                        <Chip key={t} label={t} size="small" />
                    ))}
                </Stack>
            </Stack>

            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom textAlign={"center"}>
                                Qui je suis
                            </Typography>
                            <Divider sx={{ mb: 1.5 }} />
                            <Typography variant="body2">
                                Ingénieur R&D en alternance chez Eurécia et étudiant en Master EIL,
                                j’aime rendre les systèmes <strong>simples, efficaces et fiables</strong>.<br/>
                                Mon terrain de jeu : <strong>Laravel/React, intégrations API d'outils tiers</strong> (HubSpot, Smartsheet…),
                                modélisation métier, et automatisations qui allègent le quotidien des équipes.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom textAlign={"center"}>
                                Mes valeurs
                            </Typography>
                            <Divider sx={{ mb: 1.5 }} />
                            <Stack direction="row" spacing={1} justifyContent={{ md: 'center' }} flexWrap="wrap" useFlexGap>
                                <Grid size={{ xs: 12, md: 3 }} textAlign={"center"}>
                                    <Typography variant="body2">
                                        <strong>Fiabilité</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        Inspirer confiance à son équipe, permettre à chacun d’avancer sereinement.
                                        Créer des fondations solides pour que les autres puissent s’appuyer dessus sans crainte.
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 3 }} textAlign={"center"}>
                                    <Typography variant="body2">
                                        <strong>Traçabilité</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        Documenter et transmettre une décision, une anomalie ou une évolution technique,
                                        donner du sens à ce qui a été fait.
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 3 }} textAlign={"center"}>
                                    <Typography variant="body2">
                                        <strong>Qualité</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        Pas une option, une habitude.
                                        C'est la clarté du code, les revues croisées et les tests automatisés, au service de la pérennité.
                                        Un code propre, c’est un savoir partagé : il se lit, se comprend et se fait aimer par ceux qui le reprennent.
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 3 }} textAlign={"center"}>
                                    <Typography variant="body2">
                                        <strong>Transversalité</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        C’est savoir connecter les métiers, les outils et les idées.
                                        C'est comprendre les enjeux et trouver ensemble des solutions.
                                        C'est cultiver les ponts plutôt que les murs, pour qu’un nouveau collaborateur trouve naturellement sa place dans un écosystème fluide et cohérent.
                                    </Typography>
                                </Grid>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2} mt={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" mb={1} textAlign={"center"} >Projet professionnel & personnel</Typography>
                            <Divider sx={{ mb: 1.5 }} />
                            <Typography variant="body2">
                                Consolider un profil d’ingénieur logiciel full-stack orienté produit :
                                compréhension du besoin métier, qualité de conception, livraison incrémentale.
                                À moyen terme, évoluer vers un rôle de tech lead sur un périmètre CRM/data.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" mb={1} textAlign={"center"} >Mes qualités humaines</Typography>
                            <Divider sx={{ mb: 1.5 }} />
                            <Typography variant="body2">
                                Curieux, pédagogue, calme sous pression.
                                A l'écoute, j’aime comprendre les besoins et les enjeux
                                pour proposer des solutions adaptées.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" mb={1} textAlign={"center"} >Centres d’intérêt</Typography>
                            <Divider sx={{ mb: 1.5 }} />
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {['Humain', 'Guitare / piano', 'Documentaire', 'Sciences et tecnhologies', 'Jeux vidéo'].map((i) => (
                                    <Chip key={i} label={i} size="small" />
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>



            {/* SÉLECTION DE RÉALISATIONS (réelles) */}
            <Stack spacing={1.5} mt={5} mb={1}>
                <Typography variant="h6">Sélection de réalisations</Typography>
                <Typography variant="body2" color="text.secondary">
                    Extraits issus de mon travail : regroupements fonctionnels (voir la page <InertiaLink href="/projects" className={"underline"} >Réalisations</InertiaLink> pour tout le détail).
                </Typography>
            </Stack>

            <Grid container spacing={2}>
                {featured.map((p) => (
                    <Grid key={p.slug} size={{ xs: 12, md: 4 }}>
                        <ProjectCard project={p} href={`/projects/${p.slug}`} />
                    </Grid>
                ))}
            </Grid>

            <Stack alignItems="center" spacing={1.5} mt={5} mb={8}>
                <Typography variant="body1" color="text.secondary">
                    Envie d’échanger sur un besoin interne (CRM, outil métier, intégration) ?
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Button component={InertiaLink as any} href="/projects" variant="contained">
                        Voir toutes mes réalisations
                    </Button>
                    <Button component={InertiaLink as any} href="/contact" variant="outlined">
                        Me contacter
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}
