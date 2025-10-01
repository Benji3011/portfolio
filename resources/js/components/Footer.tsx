// components/Footer.tsx
import Grid from '@mui/material/Grid';
import { Box, Container, Link, Typography, Stack, IconButton, Divider,  } from '@mui/material';
import MailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitLabIcon from '@mui/icons-material/Construction'; // placeholder icône
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Footer() {
    return (
        <Box component="footer" sx={{ pb: 4, position: 'relative', zIndex: 1 }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        borderRadius: 3,
                        px: { xs: 2, sm: 3 },
                        py: { xs: 2.5, sm: 3 },
                        bgcolor: (t) =>
                            t.palette.mode === 'light' ? 'rgba(255,255,255,.7)' : 'rgba(18,18,18,.7)',
                        backdropFilter: 'blur(12px)',
                        border: (t) => `1px solid ${t.palette.divider}`,
                        boxShadow: (t) =>
                            t.palette.mode === 'dark'
                                ? '0 8px 24px rgba(0,0,0,.35)'
                                : '0 8px 24px rgba(0,0,0,.10)',
                    }}
                >
                    <Grid container spacing={3} alignItems="center">
                        {/* Coordonnées */}
                        <Grid  size={ { xs: 12, md: 6 } }>
                            <Stack spacing={1}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                    Me joindre
                                </Typography>
                                <Stack direction="row" spacing={2} alignItems="center" sx={{ opacity: .9 }}>
                                    <MailIcon fontSize="small" />
                                    <Link underline="hover" href="mailto:benjamin.boudry98@gmail.com">
                                        benjamin.boudry98@gmail.com
                                    </Link>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" sx={{ opacity: .9 }}>
                                    <PhoneIcon fontSize="small" />
                                    <Link underline="hover" href="tel:+33767989930">+33 7 67 98 99 30</Link>
                                </Stack>
                            </Stack>
                        </Grid>

                        {/* Actions */}
                        <Grid  size={ { xs: 12, md: 6 } }>
                            <Stack
                                direction="row"
                                spacing={1}
                                useFlexGap
                                flexWrap="wrap"
                                justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
                            >
                                <IconButton
                                    component={Link}
                                    href="https://www.linkedin.com/in/ton-profil"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    sx={{ '&:hover': { transform: 'translateY(-2px)' }, transition: 'all .2s' }}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton
                                    component={Link}
                                    href="https://gitlab.com/ton-espace"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitLab"
                                    sx={{ '&:hover': { transform: 'translateY(-2px)' }, transition: 'all .2s' }}
                                >
                                    <GitLabIcon />
                                </IconButton>
                                <IconButton
                                    component={Link}
                                    href="/CV.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="CV (PDF)"
                                    sx={{ '&:hover': { transform: 'translateY(-2px)' }, transition: 'all .2s' }}
                                >
                                    <DescriptionIcon />
                                </IconButton>
                                <IconButton
                                    component={Link}
                                    href="/Benjamin_Boudry.vcf"
                                    aria-label="vCard"
                                    sx={{ '&:hover': { transform: 'translateY(-2px)' }, transition: 'all .2s' }}
                                >
                                    <AccountBoxIcon />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', opacity: .7 }}>
                        © {new Date().getFullYear()} B. Boudry
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
