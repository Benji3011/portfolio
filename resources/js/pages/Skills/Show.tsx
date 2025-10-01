import * as React from 'react';
import { useMemo } from 'react';
import { Head, Link as InertiaLink, usePage } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
  Container, Stack, Typography, Chip, Card, CardContent, Button
} from '@mui/material';
import { skills, type Skill } from '@/data/skills';
import { projects } from '@/data/projects';

type PageProps = { slug?: string };

export default function SkillShow() {
  const { props } = usePage<PageProps>();
  const slug = props.slug ?? (typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean).pop() || '' : '');

  const skill: Skill | undefined = useMemo(() => skills.find(s => s.slug === slug), [slug]);
  const related = useMemo(() => projects.filter(p => skill?.relatedProjects.includes(p.slug)), [skill]);

  if (!skill) {
    return (
      <Container maxWidth="md">
        <Stack spacing={2} mt={8}>
          <Typography>Compétence introuvable.</Typography>
          <Button component={InertiaLink as any} href="/competences" variant="outlined">← Retour aux compétences</Button>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Head title={skill.name} />

      <Stack spacing={0.5} mt={4}>
        <Typography variant="overline" color="text.secondary">{skill.type === 'tech' ? 'Compétence technique' : 'Compétence humaine'}</Typography>
        <Typography variant="h4">{skill.name}</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">Niveau</Typography>
          <Stack direction="row" spacing={0.5}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Chip key={i} size="small" label={i < skill.level ? '■' : '□'} />
            ))}
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2.5} mt={3}>
        <Section title="Définition">
          <Typography variant="body2">{skill.definition}</Typography>
        </Section>

        <Section title="Éléments de preuve">
          <Stack spacing={1}>
            {skill.proofs.map((p, idx) => (
              <Typography key={idx} variant="body2">• {p.story}</Typography>
            ))}
          </Stack>
        </Section>

        <Section title="Résultats / valeur ajoutée">
          <Typography variant="body2">{skill.results}</Typography>
        </Section>

        <Section title="Autocritique">
          <Typography variant="body2">{skill.selfReview}</Typography>
        </Section>

        <Section title="Évolution / montée en compétence">
          <Typography variant="body2">{skill.evolution}</Typography>
        </Section>

        <Section title="Réalisations associées">
          <Grid container spacing={2}>
            {related.map((p) => (
              <Grid key={p.slug} size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1">{p.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{p.summary}</Typography>
                    <Stack direction="row" spacing={1} mt={1} flexWrap="wrap" useFlexGap>
                      {p.tags.slice(0,3).map(t => <Chip key={t} label={`#${t}`} size="small" />)}
                    </Stack>
                    <Button component={InertiaLink as any} href={`/projects/${p.slug}`} sx={{ mt: 1 }} size="small">Voir</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Stack direction="row" spacing={1} my={4}>
          <Button component={InertiaLink as any} href="/competences" variant="outlined">← Retour</Button>
          <Button component={InertiaLink as any} href="/projects" variant="text">Voir toutes les réalisations</Button>
        </Stack>
      </Stack>
    </Container>
  );
}

function Section({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <Stack spacing={1.2}>
      <Typography variant="subtitle1">{title}</Typography>
      {children}
    </Stack>
  );
}
