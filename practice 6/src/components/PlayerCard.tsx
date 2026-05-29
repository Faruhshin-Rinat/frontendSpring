import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { player } from '../data';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
}));

function PlayerCard() {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ display: 'flex', gap: 2, flexGrow: 1, flexDirection: {xs: 'column', md: 'row'} }}>
        <Box
          component="img"
          src={player.src}
          alt={player.name}
          sx={{
            width: {xs: '100%', md: '45%'},
            flexShrink: 0,
            borderRadius: 1,
            objectFit: 'cover',
            alignSelf: 'stretch',
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: {xs: 'center', md: 'left'}}} gutterBottom>
              {player.name}
            </Typography>
            <StyledTypography variant="body2">
              {player.text}
            </StyledTypography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button size="small" variant="contained" color="primary">
              Подробнее
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PlayerCard;