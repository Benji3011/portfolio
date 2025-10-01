import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Tooltip,
} from 'recharts';

export type RadarDatum = { category: string; value: number };

export default function SkillsRadar({
                                        title,
                                        data,
                                    }: {
    title: string;
    data: RadarDatum[];
}) {
    return (
        <Paper
            sx={{
                p: { xs: 2, md: 3 },
            }}
        >
            <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
                {title}
            </Typography>
            <Box sx={{ height: 360 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
                        <PolarGrid />
                        <PolarAngleAxis dataKey="category" />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tickCount={6} />
                        <Radar
                            name="Niveau"
                            dataKey="value"
                            stroke="#3b82f6"
                            fill="#3b82f6"
                            fillOpacity={0.35}
                        />
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </Box>
            <Typography variant="caption" color="text.secondary">
                Échelle 0–100 (normalisation d’un niveau 0–3 → 0–100).
            </Typography>
        </Paper>
    );
}
