import * as React from 'react';
import Page from '@/components/Page';
import { Paper, Stack, Typography, Button, Link as MuiLink } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Contact() {
  return (
    <Page title="Contact" containerProps={{ maxWidth: 'md' }}>
      <Paper sx={{ p: { xs: 2, md: 3 } }}>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Contact
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Dispo pour échange rapide (15–20 min). Réponse sous 24h ouvrées.
        </Typography>
        <Stack spacing={1.2} sx={{ mb: 3 }}>
          <MuiLink href="mailto:ton.email@domaine.com">ton.email@domaine.com</MuiLink>
          <MuiLink href="tel:+33XXXXXXXXX">+33 X XX XX XX XX</MuiLink>
          <MuiLink href="https://www.linkedin.com/in/ton-profil/" target="_blank" rel="noreferrer">
            LinkedIn
          </MuiLink>
          <MuiLink href="https://gitlab.com/users/ton-profil/projects" target="_blank" rel="noreferrer">
            GitLab
          </MuiLink>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
          <Button href="/CV.pdf" download variant="contained" endIcon={<ArrowForwardIcon />}>
            Télécharger mon CV
          </Button>
          <Button href="/projects" variant="outlined">
            Voir mes réalisations
          </Button>
        </Stack>
      </Paper>
    </Page>
  );
}
