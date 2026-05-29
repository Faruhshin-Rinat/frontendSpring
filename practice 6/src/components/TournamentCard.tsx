import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface ComponentProps {
  src: string;
  title: string;
  text: string;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  flexGrow: 1,
}));

function TournamentCard({ src, title, text }: ComponentProps) {
  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, textAlign: 'right' }} gutterBottom>
            {title}
          </Typography>
          <StyledTypography variant="body2">
            {text}
          </StyledTypography>
          <Button size="small" variant="contained" color="primary" sx={{ mt: 1 }}>
            Подробнее
          </Button>
        </Box>
        <CardMedia
          component="img"
          image={src}
          alt={title}
          sx={{
            width: 110,
            flexShrink: 0,
            borderRadius: 1,
            objectFit: 'cover',
            alignSelf: 'stretch',
          }}
        />
      </CardContent>
    </Card>
  );
}

export default TournamentCard;