import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextLogo from '../assets/TextLogo.png';
import MobileLogo from '../assets/MobileLogo.png';
import { useWindowSize } from '../utils/customHooks';
import MobilePopout from './home/MobilePopout';
import Theme from '../Theme';
import SecondaryButton from './SecondaryButton';

function NavBar() {
  const { width } = useWindowSize();
  const location = useLocation();
  const navigate = useNavigate();

  const ovalStyle = {
    position: 'absolute',
    top: -190,
    right: -180,
    borderRadius: '35%',
    width: 280,
    height: 250,
    backgroundColor: '#4A485B',
  };

  function createNavElements() {
    if (location.pathname === '/dashboard' || location.pathname === '/jobs') {
      return (
        <Box sx={{
          height: 100, display: 'flex', alignItems: 'end', pb: 2,
        }}
        >
          <SecondaryButton text="Find Jobs" selected={location.pathname === '/dashboard'} onClick={() => navigate('/dashboard')} />
          <SecondaryButton text="View Saved Jobs" selected={location.pathname === '/jobs'} onClick={() => navigate('/jobs')} />
          <SecondaryButton text="Calendar" />
        </Box>
      );
    }
    return null;
  }

  if (width < 800) {
    return (
      <Grid item xs={1} sx={[{ zIndex: 2 }, Theme.palette.azure]}>
        <AppBar position="static" elevation={0} style={{ height: '100%' }}>
          <Toolbar sx={{
            justifyContent: 'space-between', position: 'relative', overflow: 'hidden', pr: 0,
          }}
          >
            <img alt="JobSite" src={MobileLogo} height="60" />
            <Box sx={ovalStyle} />
            <MobilePopout />
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
  return (
    <Grid item xs={1} sx={Theme.palette.azure}>
      <AppBar position="static" style={{ height: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <img alt="JobSite" src={TextLogo} height="100" />
            {createNavElements()}
          </Box>
          <Box>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDeoration: 'none', color: 'white' }} to="/">Home</Link></Button>
            <Button color="inherit" style={Theme.palette.independence}>
              {' '}
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">Sign Up</Link>
            </Button>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Log In</Link></Button>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">Dashboard</Link></Button>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/profile">Profile</Link></Button>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/jobs">Jobs</Link></Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default NavBar;
