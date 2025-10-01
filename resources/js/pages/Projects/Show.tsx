import * as React from 'react';
import { useMemo } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
    Container,
    Typography,
    Stack,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Card,
    CardActionArea,
    CardContent,
} from '@mui/material';
import { projects as ALL_PROJECTS, type Project } from '@/data/projects';

type PageProps = {
    slug?: string;
};

export default function Show() {
    const { props } = usePage<PageProps>();
    const slug =
        props.slug ??
        (typeof window !== 'undefined'
            ? window.location.pathname.split('/').filter(Boolean).pop() || ''
            : '');

    const project: Project | undefined = useMemo(
        () => ALL_PROJECTS.find((p) => p.slug === slug),
        [slug],
    );

    const others = useMemo(
        () => ALL_PROJECTS.filter((p) => p.slug !== slug).slice(0, 6),
        [slug],
    );

    if (!project) {
        return (
            <Container maxWidth="lg">
                <Stack spacing={2} mt={8} mb={6}>
                    <Typography>Projet introuvable.</Typography>
                    <Link href="/projects">← Retour aux projets</Link>
                </Stack>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg">
            <Stack spacing={2} mt={4}>
                <Link href="/projects">← Retour</Link>
                <Typography variant="h4" component="h1">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.summary}
                </Typography>
            </Stack>

            {/* Tags & Tech */}
            <Grid container spacing={3} mt={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="overline">Tags</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                        {project.tags.map((t) => (
                            <Chip key={t} label={`#${t}`} variant="outlined" />
                        ))}
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="overline">Stack</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                        {project.tech.map((t) => (
                            <Chip key={t} label={t} />
                        ))}
                    </Stack>
                </Grid>
            </Grid>

            {/* Highlights */}
            <Stack mt={4} spacing={1.5}>
                <Typography variant="overline">Points saillants</Typography>
                <Stack component="ul" spacing={0.5} pl={2}>
                    {project.highlights.map((h, i) => (
                        <li key={i}>
                            <Typography variant="body2">{h}</Typography>
                        </li>
                    ))}
                </Stack>
            </Stack>

            {/* Examples */}
            <Stack mt={4} spacing={2}>
                <Typography variant="overline">Exemples issus de Jira</Typography>
                {project.examples?.length ? (
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Key</TableCell>
                                <TableCell>Résumé</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Statut</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {project.examples.map((ex, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>
                                        <Typography variant="caption">{ex.key}</Typography>
                                    </TableCell>
                                    <TableCell>{ex.summary}</TableCell>
                                    <TableCell>{ex.type || '—'}</TableCell>
                                    <TableCell>{ex.status || '—'}</TableCell>
                                    <TableCell>{ex.date || '—'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        Aucun exemple disponible pour ce groupe.
                    </Typography>
                )}
            </Stack>

            {/* Suggestions */}
            {others.length > 0 && (
                <Stack mt={5} mb={8} spacing={2}>
                    <Typography variant="overline">Autres projets</Typography>
                    <Grid container spacing={2}>
                        {others.map((p) => (
                            <Grid key={p.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Card sx={{ height: '100%' }}>
                                    <CardActionArea
                                        component={Link}
                                        href={`/projects/${p.slug}`}
                                        sx={{ height: '100%' }}
                                    >
                                        <CardContent>
                                            <Typography variant="subtitle1">{p.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {p.summary}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            )}
        </Container>
    );
}
