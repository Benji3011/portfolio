import * as React from 'react';
import { Head, Link as InertiaLink } from '@inertiajs/react';
import { Container, Stack, Typography, Card, CardContent, Button, Link as MuiLink } from '@mui/material';

export default function Contact() {
  return (
      <Container maxWidth="sm" sx={{ marginBottom: screen.height < 700 ? 2 : 26 }}>
        <Head title="Contact" />
        <Stack spacing={1.5} mt={4} mb={3} textAlign="center">
          <Typography variant="h4">Contact</Typography>
          <Typography variant="body2" color="text.secondary">N’hésite pas à me joindre via un des canaux ci-dessous.</Typography>
        </Stack>

        <Card variant="outlined">
          <CardContent>
            <Stack spacing={1.5}>
              <Typography variant="body1"><strong>Email</strong> — <MuiLink href="mailto:benjamin.boudry98@gmail.com">benjamin.boudry98@gmail.com</MuiLink></Typography>
              <Typography variant="body1"><strong>Téléphone</strong> — <MuiLink href="tel:+33767989930">07 67 98 99 30</MuiLink></Typography>
              <Typography variant="body1"><strong>LinkedIn</strong> — <MuiLink href="https://www.linkedin.com/in/benjaminboudry/" target="_blank" rel="noopener">linkedin.com/in/benjaminboudry</MuiLink></Typography>
            </Stack>
            <Stack direction="row" spacing={1} mt={2} justifyContent="center">
              <Button component={InertiaLink as any} href="/projects" variant="outlined" size="small">Mes réalisations</Button>
              <Button component={InertiaLink as any} href="/competences" variant="outlined" size="small">Compétences</Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
  );
}
