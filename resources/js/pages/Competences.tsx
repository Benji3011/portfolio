import * as React from 'react';
import { Head } from '@inertiajs/react';
import { Container, Grid, Card, CardContent, Stack, Typography, LinearProgress, Button } from '@mui/material';
import { Link } from '@inertiajs/react';
import { skills as rawSkills } from '@/data/skills';
import { competences } from '@/data/competences';
import { deriveSkillsWithEIL } from '@/lib/skills-derived';
import SkillsRadar from '@/components/SkillsRadar';

export default function CompetencesPage() {
    const skills = React.useMemo(() => deriveSkillsWithEIL(rawSkills, competences, 'max'), []);
    const HUMAINES = React.useMemo(() => skills.filter(s => s.type === 'soft'), [skills]);
    const TECHNIQUES = React.useMemo(() => skills.filter(s => s.type === 'tech'), [skills]);

    const List = ({ title, items }: { title: string; items: typeof skills }) => (
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>{title}</Typography>
                <Stack spacing={1.5}>
                    {items.map((s) => (
                        <div key={s.slug}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography variant="body2" sx={{ mr: 2 }}>
                                    <b>{s.name}</b>
                                </Typography>
                                <Typography variant="caption" color="text.secondary">Niveau {s.level}/5</Typography>
                            </Stack>
                            <LinearProgress variant="determinate" value={s.level * 20} sx={{ my: 0.5 }} />
                            <Stack direction="row" justifyContent="flex-end">
                                <Button size="small" component={Link as any} href={`/skills/${s.slug}`}>Voir la fiche</Button>
                            </Stack>
                        </div>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Head title="Compétences" />
            <Typography variant="h4" sx={{ mb: 1.5 }}>Compétences</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Radar global puis liste des compétences humaines et techniques. Les niveaux affichés intègrent les 18 compétences EIL (non listées séparément).
            </Typography>

            {/* Radar en premier */}
            <div style={{ marginBottom: 16 }}>
                <SkillsRadar />
            </div>

            {/* Deux listes simples, lisibles */}
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }} id="humaines">
                    <List title="Compétences humaines" items={HUMAINES} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} id="techniques">
                    <List title="Compétences techniques" items={TECHNIQUES} />
                </Grid>
            </Grid>
        </Container>
    );
}
