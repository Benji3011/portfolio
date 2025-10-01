import * as React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Avatar,
    Box,
    Button,
    Stack,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link, usePage } from '@inertiajs/react';
import { useTheme } from '@mui/material/styles';

type Props = {
    mode: 'light' | 'dark';
    toggleMode: () => void;
    userName: string;
    avatarUrl: string;
};

const NAV_ITEMS: Array<{ label: string; href: string }> = [
    { label: 'Accueil', href: '/' },
    { label: 'Présentation', href: '/presentation' },
    { label: 'Compétences', href: '/competences' },
    { label: 'Réalisations', href: '/projects' },
    { label: 'Parcours', href: '/parcours' },
    { label: 'Contact', href: '/contact' }
];

export default function NavBar({ mode, toggleMode, userName, avatarUrl }: Readonly<Props>) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = React.useState(false);
    const { url } = usePage();

    const MenuButtons = () => (
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            {NAV_ITEMS.map((item) => {
                const isActive = url === item.href || (item.href !== '/' && url.startsWith(item.href));
                return (
                    <Button
                        key={item.href}
                        component={Link as any}
                        href={item.href}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                            borderRadius: 0,
                            transition: 'color .2s, border-bottom-color .2s',
                            '&:hover': { color: theme.palette.primary.main, borderBottomColor: theme.palette.primary.main }
                        }}
                    >
                        {item.label}
                    </Button>
                );
            })}
        </Stack>
    );

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                color="transparent"
                sx={{
                    backdropFilter: 'saturate(180%) blur(10px)',
                    backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(10,10,10,0.6)',
                    borderBottom: `1px solid ${mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)'}`
                }}
            >
                <Toolbar sx={{ minHeight: 72, px: { xs: 2, sm: 4 } }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <Avatar sx={{ width: 32, height: 32 }} alt="Profil" src="/profil.jpg" />
                        <Typography variant="body2">Benjamin Boudry</Typography>
                    </Stack>

                    <Box sx={{ flexGrow: 1 }} />

                    {!isMobile ? (
                        <MenuButtons />
                    ) : (
                        <IconButton onClick={() => setOpen(true)} edge="start" sx={{ mr: 1 }}>
                            <MenuIcon />
                        </IconButton>
                    )}

                    <IconButton onClick={toggleMode} sx={{ ml: 1 }}>
                        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 280 }} role="presentation" onClick={() => setOpen(false)}>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ p: 2 }}>
                        <Avatar src={avatarUrl} alt={userName} />
                        <Typography variant="subtitle1" fontWeight={700} noWrap>
                            {userName}
                        </Typography>
                    </Stack>
                    <List>
                        {NAV_ITEMS.map((item) => {
                            const isActive = url === item.href || (item.href !== '/' && url.startsWith(item.href));
                            return (
                                <ListItemButton component={Link as any} href={item.href} key={item.href}>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{ fontWeight: isActive ? 800 : 600, color: isActive ? 'primary.main' : 'inherit' }}
                                    />
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
