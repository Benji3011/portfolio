import * as React from 'react';
import { Stack, Button, Link as MuiLink } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { contacts } from '@/data/contacts';

export default function ContactLinks({ withCV = true }: { withCV?: boolean }) {
  return (
    <Stack spacing={1.2}>
      <MuiLink href={`mailto:${contacts.email}`}>{contacts.email}</MuiLink>
      <MuiLink href={`tel:${contacts.phone.replace(/\s/g,'')}`}>{contacts.phone}</MuiLink>
      <MuiLink href={contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</MuiLink>
      <MuiLink href={contacts.gitlab} target="_blank" rel="noreferrer">GitLab</MuiLink>
      {withCV && (
        <Button href={contacts.cvUrl} download variant="contained" endIcon={<ArrowForwardIcon />}>
          Télécharger mon CV
        </Button>
      )}
    </Stack>
  );
}
