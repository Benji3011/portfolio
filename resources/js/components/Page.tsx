import * as React from 'react';
import { Box, Container, ContainerProps } from '@mui/material';
import { Head } from '@inertiajs/react';

type PageProps = { title: string; containerProps?: ContainerProps; children: React.ReactNode };

export default function Page({ title, containerProps, children }: PageProps) {
  return (
    <Box id="main" component="section" sx={{ pt: { xs: 9, sm: 11 }, pb: { xs: 6, sm: 10 }, position: 'relative', zIndex: 2 }}>
      <Head title={title} />
      <Container maxWidth="lg" {...containerProps}>{children}</Container>
    </Box>
  );
}
