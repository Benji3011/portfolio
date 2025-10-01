import React, { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { usePage } from '@inertiajs/react';
import ParticlesBackground from '@/components/ParticlesBackground';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type AuthUser = { name?: string; avatar_url?: string } | null;
type SharedData = { auth?: { user?: AuthUser } };

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    const theme = useMemo(
        () =>
            createTheme({
                palette: { mode },
                shape: { borderRadius: 16 },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                borderRadius: 999,
                                textTransform: 'none',
                                fontWeight: 700,
                                paddingInline: 16,
                                paddingBlock: 8,
                            },
                        },
                    },
                    MuiChip: {
                        styleOverrides: { root: { borderRadius: 999 } },
                    },
                    MuiPaper: {
                        defaultProps: { elevation: 0 },
                        styleOverrides: {
                            root: {
                                borderRadius: 16,
                                border: (t) => `1px solid ${t.palette.divider}`,
                                backgroundImage: 'none',
                            },
                        },
                    },
                    MuiCard: {
                        defaultProps: { elevation: 0 },
                        styleOverrides: {
                            root: {
                                borderRadius: 16,
                                border: (t) => `1px solid ${t.palette.divider}`,
                                backgroundImage: 'none',
                            },
                        },
                    },
                },
            }),
        [mode]
    );

    const { auth } = usePage<SharedData>().props ?? {};
    const userName = auth?.user?.name ?? 'Portfolio';
    const avatarUrl = auth?.user?.avatar_url ?? '/profil.jpg';

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ParticlesBackground mode={mode} />
            <NavBar
                mode={mode}
                toggleMode={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
                userName={userName}
                avatarUrl={avatarUrl}
            />
            <Box
                component="main"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    pt: { xs: 9, sm: 11 },
                    pb: 6,
                }}
            >
                {children}
            </Box>
            <Footer />
        </ThemeProvider>
    );
}
