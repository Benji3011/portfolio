import * as React from 'react';
import { Paper, Typography, Divider, PaperProps } from '@mui/material';

type SectionProps = PaperProps & { title?: string };

export default function Section({ title, children, sx, ...props }: SectionProps) {
  return (
    <Paper sx={{ p: { xs: 2, md: 3 }, ...sx }} {...props}>
      {title && (
        <>
          <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>{title}</Typography>
          <Divider sx={{ mb: 2 }} />
        </>
      )}
      {children}
    </Paper>
  );
}
