import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { csDescription } from '../data';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
}));

function CsCard() {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center' }} gutterBottom>
          Counter-Strike
        </Typography>
        <StyledTypography variant="body2">
          {csDescription}
        </StyledTypography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '8px 16px 23px' }}>
        <Button size="small" variant="contained" color="primary">
        Подробнее
        </Button>
      </Box>
    </Card>
  );
}

export default CsCard;