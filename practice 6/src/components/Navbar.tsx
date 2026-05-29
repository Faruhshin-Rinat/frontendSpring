import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface ComponentProps {
  active: string;
}

const navLinks = ['Главная страница', 'Топ киберспортсменов', 'Турниры', 'О игроке'];

function Navbar({ active }: ComponentProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 1, bgcolor: 'grey.100' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: 2 }}>

          <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 400, px: 1 }}>
            CS Киберспорт
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navLinks.map((link, i) => (
              <Link
                key={link}
                href="#"
                underline="none"
                sx={{
                  px: 1,
                  py: 0.5,
                  fontSize: '0.95rem',
                  color: active === String(i + 1) ? 'success.main' : 'text.primary',
                  fontWeight: active === String(i + 1) ? 700 : 400,
                  '&:hover': { color: 'success.main' },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuList>
                  {navLinks.map((link, i) => (
                    <MenuItem
                      key={link}
                      sx={
                        active === String(i + 1)
                          ? { color: 'success.main', fontWeight: 700 }
                          : { '&:hover': { color: 'success.main' } }
                      }
                    >
                      {link}
                    </MenuItem>
                  ))}
                </MenuList>
              </Box>
            </Drawer>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;