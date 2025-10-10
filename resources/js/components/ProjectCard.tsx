import * as React from 'react';
import { Link } from '@inertiajs/react';
import {
    Card, CardContent, CardActions, CardActionArea,
    Typography, Stack, Chip, Button,
} from '@mui/material';
import type { Project } from '@/data/projects';
import { formatTimeframe } from '@/lib/projects';

type Props = { project: Project; href: string };

export default function ProjectCard({ project, href }: Props) {
    const tf = formatTimeframe(project.timeframe);

    const tagHref = (t: string) => `/projects?tags=${encodeURIComponent(t)}`;
    const techHref = (t: string) => `/projects?tech=${encodeURIComponent(t)}`;

    return (
        <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea component={Link} href={href} sx={{ flexGrow: 1 }}>
                <CardContent>
                    <Stack spacing={0.5} mb={1}>
                        <Typography variant="h6">{project.title}</Typography>
                        {tf && (
                            <Typography variant="caption" color="text.secondary">
                                {tf}
                            </Typography>
                        )}
                    </Stack>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {project.summary}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {(project.tags || []).slice(0, 3).map((t) => (
                            <Chip
                                key={`tag-${t}`}
                                label={`#${t}`}
                                size="small"
                                component={Link as any}
                                href={tagHref(t)}
                                clickable
                                variant="outlined"
                            />
                        ))}
                        {(project.tech || []).slice(0, 3).map((t) => (
                            <Chip
                                key={`tech-${t}`}
                                label={t}
                                size="small"
                                component={Link as any}
                                href={techHref(t)}
                                clickable
                                variant="outlined"
                                color="default"
                            />
                        ))}
                    </Stack>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Typography variant="caption" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {(project.examples?.length ?? 0)} exemple{(project.examples?.length ?? 0) > 1 ? 's' : ''}
                </Typography>
                <Button size="small" component={Link} href={href}>
                    Voir le détail
                </Button>
            </CardActions>
        </Card>
    );
}
