import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import ParticlesBackground from '../components/ParticlesBackground';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function App() {
    const [mode, setMode] = useState<'light'|'dark'>('dark');
    const theme = useMemo(() => createTheme({
        palette: { mode, primary: { main: '#00bcd4' } }
    }), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ParticlesBackground mode={mode} />
            <NavBar mode={mode} toggleMode={() => setMode(m => m === 'light' ? 'dark' : 'light')} />
            <Box component="main">
                <Hero />
                <Projects />
                <Contact />
            </Box>
        </ThemeProvider>
    );
}
