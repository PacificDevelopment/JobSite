import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import TextLogo from '../assets/TextLogo.png';
import Theme from '../Theme';

function NavBar() {
  return (
    <Grid item xs={1} style={Theme.palette.azure}>
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
