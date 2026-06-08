import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 4, p: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        Топ киберспортсменов по CS
      </Typography>
    </Box>
  );
}

export default Footer;
