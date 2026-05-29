import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 3,
        px: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        Разработчик: Фарухшин Ринат Рустамович, группа Б9123-09.03.04 (3 подгруппа)
      </Typography>
    </Box>
  );
}

export default Footer;