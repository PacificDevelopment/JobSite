import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextLogo from '../assets/TextLogo.png';
import MobileLogo from '../assets/MobileLogo.png';
import { useWindowSize } from '../utils/customHooks';
import MobilePopout from './home/MobilePopout';
import Theme from '../Theme';

function NavBar() {
  const { width } = useWindowSize();

  const ovalStyle = {
    position: 'absolute',
    top: -190,
    right: -180,
    borderRadius: '35%',
    width: 280,
    height: 250,
    backgroundColor: '#4A485B',
  };

  if (width < 800) {
    return (
      <Grid item xs={1} sx={Theme.palette.azure}>
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
          <img alt="JobSite" src={TextLogo} height="100" />
          <div>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDeoration: 'none', color: 'white' }} to="/">Home</Link></Button>
            <Button color="inherit" style={Theme.palette.independence}>
              {' '}
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">Sign Up</Link>
            </Button>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Log In</Link></Button>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">Dashboard</Link></Button>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/profile">Profile</Link></Button>
            <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/jobs">Jobs</Link></Button>
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default NavBar;
