import * as React from 'react';
import { Head } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
    Box, Card, CardContent, Chip, Container, Stack, Typography, useTheme,
    Dialog, DialogTitle, DialogContent, Avatar, Button, Link as MuiLink, Divider
} from '@mui/material';
import { events as data, type TimelineEvent } from '../data/parcours';

function EventCard({
   period, title, subtitle, chips = [], onOpen
}: Readonly<{ period?: string; title: string; subtitle?: string; chips?: string[]; onOpen: () => void; }>) {
    return (
        <Card variant="outlined">
            <CardContent>
                {period && (
                    <Typography variant="overline" color="text.secondary" sx={{ display: { xs: 'block', md: 'none' } }}>
                        {period}
                    </Typography>
                )}
                <Stack spacing={0.5}>
                    <Typography variant="h6">{title}</Typography>
                    {subtitle && <Typography variant="body2" color="text.secondary">{subtitle}</Typography>}
                </Stack>
                {!!chips.length && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1.5}>
                        {chips.map((c) => <Chip key={c} label={c} size="small" />)}
                    </Stack>
                )}
                <Stack direction="row" justifyContent="flex-end" mt={1}>
                    <Button size="small" onClick={onOpen}>Détails</Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

function TimelineRow({
    side, period, title, subtitle, chips, onOpen
}: Readonly<{ side: 'left' | 'right'; period: string; title: string; subtitle?: string; chips?: string[]; onOpen: () => void; }>) {
    const theme = useTheme();
    const topOffset = theme.spacing(3);
    return (
        <Box position="relative" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, columnGap: 0, alignItems: 'start' }}>
            <Box sx={{ order: side === 'left' ? 1 : 2, pr: { md: 2 } }}>
                {side === 'left'
                    ? <EventCard period={period} title={title} subtitle={subtitle} chips={chips} onOpen={onOpen} />
                    : <Box sx={{ display: { xs: 'none', md: 'block' } }} />}
            </Box>
            <Box sx={{ order: side === 'right' ? 2 : 1, pl: { md: 2 } }}>
                {side === 'right'
                    ? <EventCard period={period} title={title} subtitle={subtitle} chips={chips} onOpen={onOpen} />
                    : <Box sx={{ display: { xs: 'none', md: 'block' } }} />}
            </Box>

            {/* Pastille parfaitement centrée */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: topOffset, zIndex: 1, pointerEvents: 'none' }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'primary.main', boxShadow: (t) => `0 0 0 3px ${t.palette.background.paper}` }} />
            </Box>

            {/* Période à l’extérieur, côté opposé */}
            {side === 'left' ? (
                <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: 'calc(50% + 16px)', top: topOffset, transform: 'translateY(-2px)', zIndex: 1 }}>
                    <Typography variant="overline" color="text.secondary">{period}</Typography>
                </Box>
            ) : (
                <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: 'calc(50% + 16px)', top: topOffset, transform: 'translateY(-2px)', textAlign: 'right', zIndex: 1 }}>
                    <Typography variant="overline" color="text.secondary">{period}</Typography>
                </Box>
            )}
        </Box>
    );
}

function DetailsDialog({ open, onClose, ev }: Readonly<{ open: boolean; onClose: () => void; ev: TimelineEvent | null }>) {
    if (!ev) return null;
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                <Stack direction="row" spacing={1.5} alignItems="center">
                    {ev.logo && <Avatar src={ev.logo} alt={ev.org || ''} variant="rounded" sx={{ width: 32, height: 32 }} />}
                    <span>{ev.title}</span>
                </Stack>
            </DialogTitle>
            <DialogContent dividers>
                <Stack spacing={1.5}>
                    {ev.org && (
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="body2"><strong>Organisation</strong> — {ev.org}</Typography>
                            {ev.orgUrl && <MuiLink href={ev.orgUrl} target="_blank" rel="noopener">Site</MuiLink>}
                        </Stack>
                    )}
                    {ev.status && <Typography variant="body2"><strong>Statut</strong> — {ev.status}</Typography>}

                    {!!(ev.responsibilities?.length) && (
                        <>
                            <Typography variant="subtitle2">Responsabilités</Typography>
                            <Stack component="ul" spacing={0.5} pl={2}>
                                {ev.responsibilities.map((r, i) => <li key={i}><Typography variant="body2">{r}</Typography></li>)}
                            </Stack>
                            <Divider />
                        </>
                    )}

                    {!!(ev.missions?.length) && (
                        <>
                            <Typography variant="subtitle2">Missions</Typography>
                            <Stack component="ul" spacing={0.5} pl={2}>
                                {ev.missions.map((m, i) => <li key={i}><Typography variant="body2">{m}</Typography></li>)}
                            </Stack>
                            <Divider />
                        </>
                    )}

                    {!!(ev.relatedProjects?.length) && (
                        <>
                            <Typography variant="subtitle2">Réalisations associées</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {ev.relatedProjects.map((slug) => (
                                    <Chip key={slug} label={slug} component="a" href={`/projects/${slug}`} clickable size="small" />
                                ))}
                            </Stack>
                        </>
                    )}

                    {!!(ev.relatedSkills?.length) && (
                        <>
                            <Typography variant="subtitle2">Compétences associées</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {ev.relatedSkills.map((slug) => (
                                    <Chip key={slug} label={slug} component="a" href={`/skills/${slug}`} clickable size="small" variant="outlined" />
                                ))}
                            </Stack>
                        </>
                    )}

                    {ev.schoolBlurb && <Typography variant="body2">{ev.schoolBlurb}</Typography>}
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

export default function Parcours() {
    const [open, setOpen] = React.useState(false);
    const [current, setCurrent] = React.useState<TimelineEvent | null>(null);
    const events = React.useMemo(() => [...data].sort((a,b) => (a.sort < b.sort ? 1 : -1)), []);
    const handleOpen = (ev: TimelineEvent) => { setCurrent(ev); setOpen(true); };
    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth="lg">
            <Head title="Parcours" />

            {/* Header 3 colonnes */}
            <Grid container spacing={1} sx={{ mt: 4, mb: 3 }} alignItems="baseline">
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="h6" sx={{ textAlign: { xs: 'center', md: 'left' } }}>Formations</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>Parcours</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="h6" sx={{ textAlign: { xs: 'center', md: 'right' } }}>Expérience</Typography>
                </Grid>
            </Grid>

            {/* Timeline */}
            <Box position="relative" mb={8}>
                <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, bgcolor: 'divider', transform: 'translateX(-50%)', zIndex: 0 }} />
                <Stack spacing={3}>
                    {events.map((e) => (
                        <TimelineRow
                            key={`${e.sort}-${e.title}`}
                            side={e.side}
                            period={e.period}
                            title={e.title}
                            subtitle={e.subtitle}
                            chips={e.chips}
                            onOpen={() => handleOpen(e)}
                        />
                    ))}
                </Stack>
            </Box>

            <DetailsDialog open={open} onClose={handleClose} ev={current} />
        </Container>
    );
}
