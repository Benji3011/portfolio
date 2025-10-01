import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container, Paper, Typography, Stack, Chip, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, Head } from '@inertiajs/react';

export default function Presentation() {
    return (
        <Box id="presentation" sx={{ minHeight: '100vh', pt: { xs: 9, sm: 12 }, pb: { xs: 6, sm: 10 }, display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
            <Head title="Présentation" />
            <Container maxWidth="lg">
                <Stack spacing={3} sx={{ mb: 4 }}>
                    <Typography component="h1" variant="h4" fontWeight={800}>Présentation</Typography>
                    <Typography color="text.secondary">
                        Vue synthétique de qui je suis, ce que je vise et comment je travaille — pour évaluer rapidement mon adéquation au poste et à l’équipe.
                    </Typography>
                </Stack>

                <Grid container spacing={2}>
                    {[
                        {
                            title: 'Mes valeurs',
                            content: [
                                'Pragmatisme — livrer de la valeur (ex: rationalisation CI/CD → temps de build −42%).',
                                'Fiabilité — bases propres (tests, patchs) → 0 CVE en prod sur 6 mois.',
                                'Transparence — communication claire sur risques et dettes.',
                                'Esprit d’équipe — docs/snippets utiles pour accélérer les autres.',
                            ],
                        },
                        {
                            title: 'Mon projet pro & perso',
                            content: [
                                'Court terme — Ingénieur logiciel R&D backend/plateforme (Laravel/Java, APIs, perf, CI/CD).',
                                'Moyen terme — Architecture pragmatique, monitoring, encadrement technique.',
                                'Perso — veille utile, transmission (katas, docs concises, talks internes).',
                            ],
                            chips: ['Architecture', 'API & Perf', 'CI/CD', 'Sécurité app', 'Observabilité'],
                        },
                        {
                            title: 'Qualités humaines (avec preuves)',
                            content: [
                                'Communication claire — synthèses dev/business → moins d’allers-retours.',
                                'Leadership technique — checklists de revue, pair-programming → onboarding + rapide.',
                                'Esprit critique — challenge coût/bénéfice, POC avant industrialisation.',
                                'Fiabilité — engagements tenus, alertes précoces si aléas.',
                            ],
                        },
                        {
                            title: 'Centres d’intérêt (utiles au job)',
                            content: [
                                'Veille & benchmarks — évaluer les outils par la mesure.',
                                'Qualité logicielle — katas, tests, refactors guidés par la lisibilité.',
                                'Transmission — mini-guides, snippets, talks internes.',
                            ],
                            chips: ['Katas', 'Perf', 'Tests', 'Docs courtes', 'Talks internes'],
                        },
                    ].map((section) => (
                        <Grid key={section.title} size={ { xs: 12, md: 6 } }>
                            <Paper
                                sx={{
                                    p: 3,
                                    backgroundColor: (t) => (t.palette.mode === 'light' ? '#fff' : 'rgba(255,255,255,0.03)'),
                                    transition: 'transform .18s, box-shadow .18s, border-color .18s',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: (t) => t.shadows[6],
                                        borderColor: (t) => (t.palette.mode === 'light' ? '#3b82f6' : '#60a5fa'),
                                    },
                                }}
                            >
                                <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>{section.title}</Typography>
                                <Stack spacing={1.2}>{section.content.map((p, i) => (<Typography key={i}>{p}</Typography>))}</Stack>
                                {section.chips && (
                                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                                        {section.chips.map((t) => (<Chip key={t} label={t} size="small" sx={{ borderRadius: 999 }} />))}
                                    </Stack>
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} sx={{
                    mt: 4,
                    '& .MuiButton-root': { borderRadius: 999, textTransform: 'none', fontWeight: 700, px: 2.4, py: 1.1, transition: 'transform .18s, box-shadow .18s, opacity .18s' },
                    '& .MuiButton-root:hover': { transform: 'translateY(-2px)', boxShadow: (t) => t.shadows[6] },
                }}>
                    <Button component={Link as any} href="/competences" endIcon={<ArrowForwardIcon />} sx={{ background: 'linear-gradient(90deg, #3b82f6, #22d3ee)', color: '#fff' }}>
                        Explorer mes compétences
                    </Button>
                    <Button component={Link as any} href="/projets" endIcon={<ArrowForwardIcon />} sx={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)', color: '#fff' }}>
                        Voir mes réalisations
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
