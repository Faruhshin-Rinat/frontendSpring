import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { teams } from '../data';

function Teams() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3} columns={10} sx = {{justifyContent: 'center'}}>
        {teams.map((team) => (
          <Grid key={team.name} size={{ xs: 5, md: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Box
                component="img"
                src={team.src}
                alt={team.name}
                sx={{
                  width: 110,
                  height: 110,
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textAlign: 'center' }}>
                {team.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
                {team.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Teams;