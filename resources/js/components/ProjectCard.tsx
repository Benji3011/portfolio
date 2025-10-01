import * as React from 'react';
import { Link } from '@inertiajs/react';
import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    Typography,
    Stack,
    Chip,
    Button,
} from '@mui/material';
import type { Project } from '@/data/projects';

type Props = {
    project: Project;
    href?: string;
};

export default function ProjectCard({ project, href }: Readonly<Props>) {
    const link = href ?? `/projects/${project.slug}`;

    return (
        <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea component={Link} href={link} sx={{ flexGrow: 1 }}>
                <CardContent>
                    <Typography variant="h6" component="h3">
                        {project.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {project.summary}
                    </Typography>

                    {/* tags */}
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1.5}>
                        {project.tags.slice(0, 4).map((t) => (
                            <Chip key={t} label={`#${t}`} size="small" variant="outlined" />
                        ))}
                        {project.tags.length > 4 && (
                            <Chip label={`+${project.tags.length - 4}`} size="small" variant="outlined" />
                        )}
                    </Stack>

                    {/* tech */}
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                        {project.tech.slice(0, 3).map((t) => (
                            <Chip key={t} label={t} size="small" />
                        ))}
                        {project.tech.length > 3 && (
                            <Chip label={`+${project.tech.length - 3}`} size="small" />
                        )}
                    </Stack>

                    {/* highlights (2) */}
                    <Stack mt={1.5} spacing={0.5}>
                        {project.highlights.slice(0, 2).map((h, i) => (
                            <Typography key={i} variant="body2">
                                • {h}
                            </Typography>
                        ))}
                    </Stack>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Typography variant="caption" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {project.examples?.length ?? 0} exemple{(project.examples?.length ?? 0) > 1 ? 's' : ''}
                </Typography>
                <Button size="small" component={Link} href={link}>
                    Voir le détail
                </Button>
            </CardActions>
        </Card>
    );
}
