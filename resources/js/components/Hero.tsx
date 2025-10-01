// resources/js/components/Hero.tsx
import * as React from 'react';
import { useMemo } from 'react';
import { Box, Stack, Typography, Paper, Chip, Button, Avatar } from '@mui/material';
import { Link } from '@inertiajs/react';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { contacts } from '@/data/contacts';

// Constantes extraites
const TECHNICAL_SKILLS = [
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'Java',
    'Spring Boot',
    'Laravel',
    'SQL',
    'Docker',
    'CI/CD'
] as const;

const SOFT_SKILLS = [
    'Leadership tech',
    'Communication',
    'Pragmatisme',
    'Esprit critique'
] as const;

// Styles extraits
const heroStyles = {
    backgroundDecor: {
        position: 'absolute' as const,
        inset: -24,
        zIndex: 0,
        pointerEvents: 'none' as const,
        background: (t: any) =>
            t.palette.mode === 'light'
                ? 'radial-gradient(600px 300px at 60% 40%, rgba(99,102,241,.12), transparent 60%)'
                : 'radial-gradient(600px 300px at 60% 40%, rgba(99,102,241,.22), transparent 60%)',
        maskImage: 'radial-gradient(60% 40% at 60% 40%, black 60%, transparent 100%)',
    },
    paper: {
        p: { xs: 2.5, md: 3.5 },
        backdropFilter: 'blur(6px)',
        position: 'relative' as const,
        zIndex: 1,
    },
    avatar: {
        width: 64,
        height: 64,
        fontSize: 28,
        fontWeight: 800,
    },
    titleGradient: {
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: '-.01em',
        background: 'linear-gradient(90deg,#8b5cf6 0%, #ec4899 70%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    },
    skillSection: {
        minWidth: 260,
        flex: 1,
    },
} as const;

// Interface TypeScript
interface HeroProps {
    className?: string;
}

export default function Hero({ className }: Readonly<HeroProps>) {
    // Memoization des chips pour éviter les re-renders
    const technicalSkillChips = useMemo(
        () =>
            TECHNICAL_SKILLS.map((skill) => (
                <Chip
                    key={skill}
                    size="small"
                    label={skill}
                    variant="outlined"
                />
            )),
        []
    );

    const softSkillChips = useMemo(
        () =>
            SOFT_SKILLS.map((skill) => (
                <Chip
                    key={skill}
                    size="small"
                    label={skill}
                />
            )),
        []
    );

    return (
        <Box sx={{ position: 'relative' }} className={className}>
            {/* Décor discret derrière le contenu */}
            <Box
                aria-hidden="true"
                sx={heroStyles.backgroundDecor}
            />

            <Paper sx={heroStyles.paper}>
                <Stack spacing={2.5}>
                    {/* Titre + avatar */}
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        useFlexGap
                        flexWrap="wrap"
                    >
                        <Avatar
                            variant="rounded"
                            sx={heroStyles.avatar}
                            aria-label="Avatar de Benjamin Boudry"
                        >
                            B
                        </Avatar>

                        <Box>
                            <Typography
                                component="h1"
                                variant="h3"
                                sx={heroStyles.titleGradient}
                            >
                                Benjamin Boudry
                            </Typography>
                            <Typography color="text.secondary">
                                Master Expert en Ingénierie Logiciel
                            </Typography>
                        </Box>
                    </Stack>

                    {/* Pitch */}
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 800, lineHeight: 1.3 }}
                    >
                        Je conçois des systèmes robustes, mesurables et maintenables — au service de la performance et de l'équipe.
                    </Typography>
                    <Typography color="text.secondary">
                        Focus : architectures pragmatiques, pipelines CI/CD rationnalisés, performances et UX dev-friendly.
                    </Typography>

                    {/* Groupes de chips */}
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={2}
                        useFlexGap
                        flexWrap="wrap"
                    >
                        <Stack spacing={1} sx={heroStyles.skillSection}>
                            <Typography variant="overline" sx={{ opacity: 0.8 }}>
                                Compétences techniques
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                useFlexGap
                                flexWrap="wrap"
                            >
                                {technicalSkillChips}
                            </Stack>
                        </Stack>

                        <Stack spacing={1} sx={heroStyles.skillSection}>
                            <Typography variant="overline" sx={{ opacity: 0.8 }}>
                                Compétences humaines
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                useFlexGap
                                flexWrap="wrap"
                            >
                                {softSkillChips}
                            </Stack>
                        </Stack>
                    </Stack>

                    {/* Actions */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={1.2}
                        useFlexGap
                        flexWrap="wrap"
                        aria-label="Actions principales"
                    >
                        <Button
                            component={Link}
                            href="/competences"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            aria-label="Consulter mes compétences détaillées"
                        >
                            Compétences
                        </Button>
                        <Button
                            component={Link}
                            href="/projects"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            aria-label="Découvrir mes réalisations"
                        >
                            Réalisations
                        </Button>
                        <Button
                            component={Link}
                            href="/contact"
                            variant="outlined"
                            aria-label="Me contacter directement"
                        >
                            Me contacter
                        </Button>
                        <Button
                            href={contacts?.cvUrl ?? '/CV.pdf'}
                            download
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            aria-label="Télécharger mon CV au format PDF"
                        >
                            Télécharger CV
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
}
