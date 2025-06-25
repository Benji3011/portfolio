import React from 'react';
import { Avatar, Box, Card, CardContent, Container, Grid, Typography, Button, Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const skills = [
    'TypeScript & React',
    'Node.js & Express',
    'Java & Spring Boot',
    'CI/CD & DevOps',
    'Microservices',
];

export default function Hero() {
    return (
        <Box id="à-propos" sx={{ minHeight:'100vh', py:8, position:'relative', zIndex:1 }}>
            <Container maxWidth="md">
                <Grid container spacing={4} alignItems="center">
                    {/* @ts-ignore */}
                    <Grid item><Avatar sx={{ width:150, height:150 }}>J</Avatar></Grid>
                    {/* @ts-ignore */}
                    <Grid item xs>
                        <Card sx={{ p:4, borderRadius:2, bgcolor:'background.paper' }}>
                            <CardContent>
                                <Typography variant="h3" color="primary" gutterBottom>John Doe</Typography>
                                <Typography variant="h5" gutterBottom>Master Expert en Ingénierie Logiciel</Typography>
                                <Typography paragraph>Passionné par la conception et le développement de solutions logicielles robustes et évolutives.</Typography>
                                <Box component="ul" sx={{ pl:3, mb:3 }}> {skills.map(s => <Typography component="li" key={s}>{s}</Typography>)} </Box>
                                <Box sx={{ mb:3 }}>
                                    <Link href="#" sx={{ mr:2 }}>GitHub</Link>
                                    <Link href="#">LinkedIn</Link>
                                </Box>
                                <Button variant="outlined" startIcon={<DownloadIcon />}>Télécharger CV</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
