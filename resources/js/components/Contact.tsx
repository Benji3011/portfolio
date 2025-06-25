import React from 'react';
import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';

export default function Contact() {
    return (
        <Box id="contact" sx={{ py:8, position:'relative', zIndex:1 }}>
            <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom>Contact</Typography>
                <Stack spacing={2} component="form">
                    <TextField label="Votre nom" fullWidth />
                    <TextField label="Votre email" type="email" fullWidth />
                    <TextField label="Message" multiline rows={4} fullWidth />
                    <Button variant="contained">Envoyer</Button>
                </Stack>
            </Container>
        </Box>
    );
}
