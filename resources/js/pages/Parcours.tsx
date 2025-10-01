import * as React from 'react';
import { Head } from '@inertiajs/react';
import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';
import { events } from '@/data/parcours';
import Grid from "@mui/material/Grid";

/** Carte d’événement (sans la période en md+, elle est rendue à l’extérieur) */
function EventCard(props: Readonly<{
    title: string;
    subtitle?: string;
    bullets?: string[];
    chips?: string[];
    period?: string; // affichée seulement en xs
}>) {
    const { period, title, subtitle, bullets = [], chips = [] } = props;

    return (
        <Card variant="outlined">
            <CardContent>
                {/* Période visible en xs uniquement */}
                {period && (
                    <Typography
                        variant="overline"
                        color="text.secondary"
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {period}
                    </Typography>
                )}

                <Stack spacing={0.5}>
                    <Typography variant="h6">{title}</Typography>
                    {subtitle && (
                        <Typography variant="body2" color="text.secondary">
                            {subtitle}
                        </Typography>
                    )}
                </Stack>

                {!!bullets.length && (
                    <Stack component="ul" spacing={0.5} mt={1.5} pl={2}>
                        {bullets.map((b, i) => (
                            <li key={i}>
                                <Typography variant="body2">{b}</Typography>
                            </li>
                        ))}
                    </Stack>
                )}

                {!!chips.length && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1.5}>
                        {chips.map((c) => (
                            <Chip key={c} label={c} size="small" />
                        ))}
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
}

/**
 * Une ligne sur la timeline :
 * - 2 colonnes (gauche/droite) dès md, 1 colonne en xs
 * - Pastille alignée au centre exact (left:50%)
 * - Date (période) en dehors de la carte, côté opposé, alignée sur le titre
 */
function TimelineRow(props: Readonly<{
    side: 'left' | 'right';
    period: string;
    title: string;
    subtitle?: string;
    bullets?: string[];
    chips?: string[];
}>) {
    const { side, period, title, subtitle, bullets, chips } = props;
    const theme = useTheme();

    // Décalage vertical pour aligner pastille + date avec le titre de la carte
    // (correspond à ~padding top du CardContent + ligne du titre)
    const topOffset = theme.spacing(2.75); // ajuste finement si besoin (2.75/3/3.25)

    return (
        <Box
            position="relative"
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                columnGap: 0, // pas de gap, on gère le “respiration” avec pl/pr
                alignItems: 'start',
            }}
        >
            {/* Colonne gauche */}
            <Box sx={{ order: side === 'left' ? 1 : 2, pr: { md: 2 } }}>
                {side === 'left' ? (
                    <EventCard title={title} subtitle={subtitle} bullets={bullets} chips={chips} period={period} />
                ) : (
                    <Box sx={{ display: { xs: 'none', md: 'block' } }} />
                )}
            </Box>

            {/* Colonne droite */}
            <Box sx={{ order: side === 'right' ? 2 : 1, pl: { md: 2 } }}>
                {side === 'right' ? (
                    <EventCard title={title} subtitle={subtitle} bullets={bullets} chips={chips} period={period} />
                ) : (
                    <Box sx={{ display: { xs: 'none', md: 'block' } }} />
                )}
            </Box>

            {/* Pastille au centre exact */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: theme.spacing(3.5),
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            >
                <Box
                    sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
                    }}
                />
            </Box>

            {/* Date (période) à l’extérieur, côté OPPOSÉ à la carte */}
            {/** côté gauche → date à droite de la ligne ; côté droit → date à gauche de la ligne */}
            {side === 'left' ? (
                <Box
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        position: 'absolute',
                        left: 'calc(50% + 16px)', // à droite de la ligne
                        top: topOffset,
                        transform: 'translateY(-2px)',
                        zIndex: 1,
                    }}
                >
                    <Typography variant="overline" color="text.secondary">
                        {period}
                    </Typography>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        position: 'absolute',
                        right: 'calc(50% + 16px)', // à gauche de la ligne
                        top: topOffset,
                        transform: 'translateY(-2px)',
                        textAlign: 'right',
                        zIndex: 1,
                    }}
                >
                    <Typography variant="overline" color="text.secondary">
                        {period}
                    </Typography>
                </Box>
            )}
        </Box>
    );
}

export default function Parcours() {
    return (
        <Container maxWidth="lg">
            <Head title="Parcours" />

            {/* === EN-TÊTE EN 3 COLONNES === */}
            <Grid container spacing={1} sx={{ mt: 4, mb: 3 }} alignItems="baseline">
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="h6" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        Formations
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="h4" align="center" component="h1">
                        Parcours
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="h6" sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                        Expérience
                    </Typography>
                </Grid>
            </Grid>

            {/* Conteneur timeline avec ligne centrale */}
            <Box position="relative" mb={8}>
                {/* Ligne verticale pleine hauteur */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: 2,
                        bgcolor: 'divider',
                        transform: 'translateX(-50%)',
                        zIndex: 0,
                    }}
                />

                {/* Événements fusionnés (déjà triés) */}
                <Stack spacing={3}>
                    {events.map((e) => (
                        <TimelineRow
                            key={`${e.sort}-${e.title}`}
                            side={e.side}
                            period={e.period}
                            title={e.title}
                            subtitle={e.subtitle}
                            bullets={e.bullets}
                            chips={e.chips}
                        />
                    ))}
                </Stack>
            </Box>
        </Container>
    );
}
