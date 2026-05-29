import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PlayerCard from './PlayerCard';
import CsCard from './CsCard';
import TournamentCard from './TournamentCard';
import { tournaments } from '../data';

function Content() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <PlayerCard />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <CsCard />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
            {tournaments.map((t) => (
              <TournamentCard key={t.title} src={t.src} title={t.title} text={t.text} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Content;