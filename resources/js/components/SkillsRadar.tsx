import * as React from 'react';
import {
    Card, CardContent, Stack, Typography,
    ToggleButton, ToggleButtonGroup, FormControlLabel, Switch
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
    ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip
} from 'recharts';
import { skills as rawSkills } from '@/data/skills';
import { competences } from '@/data/competences';
import { deriveSkillsWithEIL } from '@/lib/skills-derived';

type View = 'all' | 'tech' | 'soft';

export default function SkillsRadar() {
    const theme = useTheme();

    // — contrôles —
    const [includeEIL, setIncludeEIL] = React.useState(true);   // intégrer (ou pas) les EIL
    const [view, setView] = React.useState<View>('all');        // filtre: toutes/tech/humaines

    // — dataset de base —
    const merged = React.useMemo(
        () => (includeEIL ? deriveSkillsWithEIL(rawSkills, competences, 'max') : rawSkills),
        [includeEIL]
    );

    const filtered = React.useMemo(() => {
        switch (view) {
            case 'tech': return merged.filter(s => s.type === 'tech');
            case 'soft': return merged.filter(s => s.type === 'soft');
            default:     return merged;
        }
    }, [merged, view]);

    const data = React.useMemo(
        () => filtered.map(s => ({ axis: s.name, value: s.level })),
        [filtered]
    );

    return (
        <Card variant="outlined" sx={{ height: 460 }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'start', md: 'center' }} justifyContent="space-between">
                    <Typography variant="h6">Radar des compétences</Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                        <ToggleButtonGroup size="small" value={view} exclusive onChange={(_, v) => v && setView(v)}>
                            <ToggleButton value="all">Toutes</ToggleButton>
                            <ToggleButton value="tech">Techniques</ToggleButton>
                            <ToggleButton value="soft">Humaines</ToggleButton>
                        </ToggleButtonGroup>

                        <FormControlLabel
                            control={<Switch size="small" checked={includeEIL} onChange={(e)=>setIncludeEIL(e.target.checked)} />}
                            label="Inclure EIL"
                        />
                    </Stack>
                </Stack>

                <div style={{ flex: 1, minHeight: 320, color: theme.palette.primary.main }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="axis" />
                            <PolarRadiusAxis angle={30} domain={[0, 5]} tickCount={6} />
                            <Tooltip formatter={(v:any)=>[v, 'Niveau']} />
                            {/* Couleurs pilotées par la couleur primaire MUI via `currentColor` */}
                            <Radar name="Niveau" dataKey="value" stroke="currentColor" fill="currentColor" fillOpacity={0.25} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

                <Typography variant="caption" color="text.secondary">
                    Le niveau affiché provient des compétences “métier”. Quand l’option « Inclure EIL » est active,
                    les 18 compétences EIL sont intégrées de manière invisible au calcul des niveaux (0–3 → 1–5).
                </Typography>
            </CardContent>
        </Card>
    );
}
