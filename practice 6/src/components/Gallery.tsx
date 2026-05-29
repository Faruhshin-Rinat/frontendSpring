import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { galleryImages } from '../data';

const zoomBoxSx = {
  overflow: 'hidden',
  borderRadius: 2,
  '&:hover img': { transform: 'scale(1.05)' },
};

const imgSx = {
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  transition: 'transform 0.3s ease',
  display: 'block',
};

function Gallery() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%' }}>
            {galleryImages.slice(0, 2).map((img) => (
              <Box key={img.alt} sx={{ ...zoomBoxSx, height: 175 }}>
                <Box component="img" src={img.src} alt={img.alt} sx={imgSx} />
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Box sx={{ ...zoomBoxSx, height: { xs: 300, lg: '100%' }, minHeight: 350 }}>
            <Box component="img" src={galleryImages[2].src} alt={galleryImages[2].alt} sx={imgSx} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%' }}>
            {galleryImages.slice(3).map((img) => (
              <Box key={img.alt} sx={{ ...zoomBoxSx, height: 175 }}>
                <Box component="img" src={img.src} alt={img.alt} sx={imgSx} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Gallery;