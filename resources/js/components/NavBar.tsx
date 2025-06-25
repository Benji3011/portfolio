import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface NavBarProps {
    mode: 'light'|'dark';
    toggleMode: () => void;
}

export default function NavBar({ mode, toggleMode }: NavBarProps) {
    const sections = ['à-propos', 'projets', 'contact'];
    return (
        <AppBar position="sticky" color="transparent" elevation={0} sx={{ zIndex: 2 }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box>
                    {sections.map(sec => (
                        <Button key={sec} component="a" href={`#${sec}`} sx={{ color: 'text.primary', textTransform: 'none' }}>
                            {sec.replace('-', ' ')}
                        </Button>
                    ))}
                </Box>
                <IconButton onClick={toggleMode}>
                    {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
