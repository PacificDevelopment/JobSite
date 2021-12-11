import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Home, Dashboard, LogIn, SignUp, Jobs, Profile } from './pages';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { useWindowSize } from './utils/customHooks';
import Theme from './Theme';



export default function App() {
  const { width, height } = useWindowSize();
  return (
      <div data-testid="app">
        <ThemeProvider theme={Theme}>
          <Box sx={{ flexGrow: 1 }} style={Theme.palette.azure}>
            <AppBar position="static">
              <Toolbar sx={{justifyContent: 'space-between'}}>
                <h1 style={{margin: 0}}>JobSite</h1>
                <div>
                  <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white'}} to="/">Home</Link></Button>
                  <Button color="inherit" style={Theme.palette.independence}> <Link style={{ textDecoration: 'none', color: 'white'}} to="/signup">Sign Up</Link></Button>
                  <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white'}} to="/login">Log In</Link></Button>
                  <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white'}} to="/dashboard">Dashboard</Link></Button>
                  <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white'}} to="/profile">Profile</Link></Button>
                  <Button color="inherit" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white'}} to="/jobs">Jobs</Link></Button>
                </div>
              </Toolbar>
            </AppBar>
          </Box>

          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/signup' element={width < 800 ? <SignUp /> : <Home createAccount />} exact />
            <Route path='/login' element={width < 800 ? <LogIn /> : <Home />} exact />
            <Route path='/dashboard' element={<Dashboard />} exact />
            <Route path='/profile' element={<Profile />} exact />
            <Route path='/jobs' element={<Jobs />} exact />
          </Routes>
        </ThemeProvider>
      </div>
  );
}