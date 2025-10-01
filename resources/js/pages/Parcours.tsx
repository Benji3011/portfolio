import * as React from 'react';
import { Link, Head } from '@inertiajs/react';
import Grid from '@mui/material/Grid';
import {
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';

export default function Parcours() {
  return (
      <Container maxWidth="lg">
        <Head title="Parcours" />

        {/* Header */}
        <Stack spacing={1.5} mt={4} mb={3}>
          <Typography variant="h4" component="h1">Parcours</Typography>
          <Typography variant="body2" color="text.secondary">
            Expériences, formations et compétences clés.
          </Typography>
        </Stack>

        {/* 2 colonnes : Expériences (8) / Compétences & Formations (4) */}
        <Grid container spacing={2}>
          {/* Colonne gauche — Expériences */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2}>
              {/* Concepteur Développeur d'Applications (Alternance) */}
              <Card variant="outlined">
                <CardContent>
                  <Stack spacing={0.5}>
                    <Typography variant="h6">Concepteur Développeur d’Applications (Alternance)</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ECOLAND’s — Lavelanet · Nov 2022 → Fév 2023
                    </Typography>
                  </Stack>
                  <List dense>
                    <ListItem><ListItemText primary="Optimisations PHP & SQL sur services existants." /></ListItem>
                    <ListItem><ListItemText primary="Automatisation Bash (CRON) : purge cache/logs serveurs." /></ListItem>
                    <ListItem><ListItemText primary="Mise en place Docker pour exécuter Selenium." /></ListItem>
                    <ListItem><ListItemText primary="Web scraping des titres produits chez fournisseurs." /></ListItem>
                  </List>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {['PHP 8', 'SQL', 'Bash/CRON', 'Docker', 'Selenium', 'Scraping'].map(tag => (
                        <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Assistant Informatique */}
              <Card variant="outlined">
                <CardContent>
                  <Stack spacing={0.5}>
                    <Typography variant="h6">Assistant Informatique</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Mission Locale Jeune Ariège — Foix · Déc 2020 → Oct 2022
                    </Typography>
                  </Stack>
                  <List dense>
                    <ListItem>
                      <ListItemText
                          primary="Support et exploitation (poste, outils métiers), assistance utilisateurs, suivi quotidien."
                          secondary="Mise à niveau, fiabilisation et documentation légère des procédures."
                      />
                    </ListItem>
                  </List>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {['Support IT', 'Documentation', 'Outils métiers'].map(tag => (
                        <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Stagiaire Dev Web (AFPR) */}
              <Card variant="outlined">
                <CardContent>
                  <Stack spacing={0.5}>
                    <Typography variant="h6">Stagiaire Développeur Web (AFPR)</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ECOLAND’s — Lavelanet · Sep 2019 → Jan 2020
                    </Typography>
                  </Stack>
                  <List dense>
                    <ListItem><ListItemText primary="Création de modules PrestaShop." /></ListItem>
                    <ListItem><ListItemText primary="Webservice API : récupération de suivis LaPoste." /></ListItem>
                    <ListItem><ListItemText primary="Traitements CSV pour la comptabilité." /></ListItem>
                    <ListItem><ListItemText primary="Optimisation logistique pour préparations de commandes." /></ListItem>
                  </List>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {['PrestaShop', 'API', 'CSV', 'Logistique'].map(tag => (
                        <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Auto-entrepreneur */}
              <Card variant="outlined">
                <CardContent>
                  <Stack spacing={0.5}>
                    <Typography variant="h6">Auto-entrepreneur — Création de sites web</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ariège · Jan 2020 → Déc 2020
                    </Typography>
                  </Stack>
                  <List dense>
                    <ListItem><ListItemText primary="Sites vitrines et petits projets sur mesure." /></ListItem>
                    <ListItem><ListItemText primary="Apprentissages : Symfony, React, Webpack, API Platform, Material UI." /></ListItem>
                    <ListItem><ListItemText primary="Déploiement OVH, gestion DNS et nom de domaine." /></ListItem>
                    <ListItem><ListItemText primary="Gestion de projet agile (cadrage, itérations, retours rapides)." /></ListItem>
                  </List>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {['Symfony', 'React', 'API Platform', 'Material UI', 'OVH', 'Agile'].map(tag => (
                        <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          {/* Colonne droite — Compétences & Formations */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              {/* Compétences clés */}
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1">Compétences clés</Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {[
                      'Gestion de projet (Agile)',
                      'UML / Modélisation',
                      'POO / MVC',
                      'Sécurité Web (bonnes pratiques)',
                      'Communication',
                      'Anglais (courant)',
                      'Vitesse d’apprentissage',
                    ].map(skill => (
                        <Chip key={skill} label={skill} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Stack / Outils */}
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1">Stack & Outils</Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {[
                      'PHP 8',
                      'JavaScript (ES6)',
                      'HTML/CSS',
                      'SQL / Doctrine',
                      'Bash',
                      'Twig',
                      'JSON / cURL',
                      'Webpack',
                      'Symfony',
                      'React',
                      'Node.js',
                      'PrestaShop',
                      'MySQL / phpMyAdmin',
                      'Material UI',
                      'Git / GitLab',
                      'VSCode',
                      'Yarn / NPM',
                    ].map(tool => (
                        <Chip key={tool} label={tool} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Formations */}
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1">Formations</Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <List dense>
                    <ListItem>
                      <ListItemText
                          primary="Concepteur Développeur d’Applications (Bac+4) — 3WAcademy"
                          secondary="Oct 2022 → Fév 2023 (télé-présentiel)"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                          primary="Développeur Web & Web Mobile (Bac+2) — Simplon (Pamiers)"
                          secondary="Jan 2019 → Jan 2020 — Méthodes agiles, pédagogie active"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                          primary="Baccalauréat Scientifique — Lycée Les Catalins (Montélimar)"
                          secondary="2016 — Sciences de l’ingénieur, option ISN"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              {/* Liens internes */}
              <Stack direction="row" spacing={1}>
                <Button component={Link as any} href="/projects" variant="outlined" size="small">
                  Voir mes réalisations
                </Button>
                <Button component={Link as any} href="/skills" variant="outlined" size="small">
                  Compétences détaillées
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
  );
}
