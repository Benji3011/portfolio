import React from 'react';
import { Box, Card, CardContent, Typography, Link } from '@mui/material';

interface Props { title: string; desc: string; link: string }

export default function FlipCard({ title, desc, link }: Props) {
    return (
        <Card sx={{ perspective:600 }}>
            <Box className="flippable" sx={{
                position:'relative', width:'100%', height:200,
                transition:'transform 0.6s', transformStyle:'preserve-3d',
                '&:hover': { transform: 'rotateY(180deg)' }
            }}>
                <CardContent sx={{ backfaceVisibility:'hidden', position:'absolute', width:'100%', height:'100%' }}>
                    <Typography variant="h6">{title}</Typography>
                </CardContent>
                <CardContent sx={{ backfaceVisibility:'hidden', position:'absolute', width:'100%', height:'100%', transform:'rotateY(180deg)', bgcolor:'background.default' }}>
                    <Typography paragraph>{desc}</Typography>
                    <Link href={link}>En savoir plus</Link>
                </CardContent>
            </Box>
        </Card>
    );
}
