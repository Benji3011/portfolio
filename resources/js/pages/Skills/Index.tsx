import * as React from 'react';
import { Container, Tabs, Tab, Stack, Typography, Chip, Card, CardContent, Divider } from '@mui/material';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';
import { Link } from '@inertiajs/react';

function Matrix() {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>Matrice compétences ↔ réalisations</Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack spacing={2}>
                    {skills.map((s) => {
                        const linked = projects.filter((p) => s.relatedProjects.includes(p.slug));
                        return (
                            <div key={s.slug}>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    <b>{s.name}</b> — {s.type === 'tech' ? 'Tech' : 'Soft'} — {linked.length} réa
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                    {linked.map((p) => (
                                        <Chip
                                            key={p.slug}
                                            label={p.title}
                                            component={Link as any}
                                            href={`/projects/${p.slug}`}
                                            clickable
                                            size="small"
                                            variant="outlined"
                                        />
                                    ))}
                                </Stack>
                            </div>
                        );
                    })}
                </Stack>
            </CardContent>
        </Card>
    );
}

export default function SkillsIndex() {
    const [tab, setTab] = React.useState(1); // 1 = Matrice par défaut (jury-friendly)

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Compétences</Typography>
            <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
                <Tab label="Liste" value={0} />
                <Tab label="Matrice" value={1} />
            </Tabs>

            {tab === 1 ? (
                <Matrix />
            ) : (
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            (Ta liste actuelle de compétences ici si tu as déjà une page ; sinon, garde la Matrice.)
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
}
