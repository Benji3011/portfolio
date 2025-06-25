import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import FlipCard from './FlipCard';

const data = [
    { title: 'Projet A', desc: 'Description A', link: '#' },
    { title: 'Projet B', desc: 'Description B', link: '#' },
    { title: 'Projet C', desc: 'Description C', link: '#' },
];

export default function Projects() {
    return (
        <Box id="projets" sx={{ py:8, bgcolor:'background.paper', position:'relative', zIndex:1 }}>
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>Projets</Typography>
                <Grid container spacing={4}>
                    {data.map(p => (
                        // @ts-ignore
                        <Grid item xs={12} sm={6} md={4} key={p.title}>
                            <FlipCard title={p.title} desc={p.desc} link={p.link} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
