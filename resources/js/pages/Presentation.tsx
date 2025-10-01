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
                    Je conçois et livre des fonctionnalités utiles pour des produits internes :
                    CRM, facturation PDF, intégrations SaaS, sécurité & qualité logicielle.
                </Typography>
                <Stack direction="row" spacing={1} justifyContent={{ md: 'center' }} flexWrap="wrap" useFlexGap>
                    {['Laravel', 'React', 'MUI', 'PHP', 'MySQL', 'CI/CD', 'Docker'].map((t) => (
                        <Chip key={t} label={t} size="small" />
                    ))}
                </Stack>
            </Stack>

            {/* CE QUE JE FAIS / VALEUR AJOUTÉE */}
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Ce que je fais
                            </Typography>
                            <Divider sx={{ mb: 1.5 }} />
                            <Stack component="ul" spacing={0.75} pl={2}>
                                <li>
                                    <Typography variant="body2">
                                        <strong>Applications internes</strong> orientées métier (CRM, back-office, outils Ops).
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2">
                                        <strong>Génération documentaire</strong> (devis, factures, PDF) et workflows associés.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2">
                                        <strong>Intégrations</strong> (Ex. HubSpot / APIs tierces) et synchronisations de données.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2">
                                        <strong>Qualité & delivery</strong> : CI/CD (GitLab/Jenkins), revues, tests, monitoring léger.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2">
                                        <strong>Sécurité & permissions</strong> : contrôle d’accès, validation, conformité.
                                    </Typography>
                                </li>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Comment je travaille
                            </Typography>
                            <Divider sx={{ mb: 1.5 }} />
                            <Stack component="ul" spacing={0.75} pl={2}>
                                <li>
                                    <Typography variant="body2">
                                        <strong>Clarté</strong> : cadrage rapide, specs concises, prototypes si besoin.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2">
                                        <strong>Itératif</strong> : petits incréments en prod, feedbacks fréquents.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2">
                                        <strong>Lisibilité</strong> : composants MUI cohérents, design système simple.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2">
                                        <strong>Responsable</strong> : métriques de base (erreurs, temps de réponse), dettes gérées.
                                    </Typography>
                                </li>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* STACK PRINCIPALE */}
            <Grid container spacing={2} mt={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Stack principale
                            </Typography>
                            <Divider sx={{ mb: 1.5 }} />
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {[
                                    'Laravel', 'PHP 8', 'MySQL',
                                    'React', 'TypeScript', 'MUI', 'Inertia',
                                    'Blade', 'Eloquent', 'REST',
                                    'GitLab', 'Jenkins', 'Docker (dev)',
                                ].map((t) => (
                                    <Chip key={t} label={t} size="small" />
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Domaines couverts
                            </Typography>
                            <Divider sx={{ mb: 1.5 }} />
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {[
                                    'CRM interne', 'Facturation & PDF', 'Intégrations SaaS',
                                    'UX applicative', 'Sécurité & permissions', 'CI/CD',
                                    'Modélisation de données', 'Jobs/Observers', 'Monitoring léger',
                                ].map((t) => (
                                    <Chip key={t} label={t} size="small" />
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5">Mes valeurs</Typography>
                            <Stack component="ul" spacing={0.75} pl={2}>
                                <li><Typography variant="body2"><strong>Responsabilité</strong> : code maintenable, dette maîtrisée, sécurité en priorité.</Typography></li>
                                <li><Typography variant="body2"><strong>Clarté</strong> : specs courtes, démos fréquentes, docs utiles.</Typography></li>
                                <li><Typography variant="body2"><strong>Orientation produit</strong> : valeur métier visible, simplification des usages.</Typography></li>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5">Mon projet professionnel & personnel</Typography>
                            <Typography variant="body2">
                                Consolider mon rôle de développeur full-stack sur des produits internes (CRM, facturation, intégrations)
                                et évoluer vers un <strong>lead technique</strong> axé qualité (CI/CD, sécurité) et accompagnement des usages.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5">Mes qualités humaines</Typography>
                            <Stack component="ul" spacing={0.75} pl={2}>
                                <li><Typography variant="body2"><strong>Pédagogie</strong> : vulgarisation, transferts et pair-programming.</Typography></li>
                                <li><Typography variant="body2"><strong>Rigueur</strong> : process simple, revues systématiques, fiabilité.</Typography></li>
                                <li><Typography variant="body2"><strong>Écoute</strong> : prises en compte des retours et itérations rapides.</Typography></li>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5">Centres d’intérêt</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {['SEO', 'Pilotage d’entreprise', 'Musique', 'Danse', 'Jeux vidéo'].map((i) => (
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
