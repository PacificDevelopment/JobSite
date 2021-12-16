import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Home, Dashboard, LogIn, SignUp, Jobs, Profile,
} from './pages';
import { useWindowSize } from './utils/customHooks';
import Theme from './Theme';

import NavBar from './components/NavBar';

function App() {
  const { width } = useWindowSize();
  return (
    <div data-testid="app">
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <Grid container direction="column" sx={{ width: '100vw', minHeight: '100vh' }}>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/signup" element={width < 800 ? <SignUp /> : <Home createAccount />} exact />
            <Route path="/login" element={width < 800 ? <LogIn /> : <Home />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/jobs" element={<Jobs />} exact />
          </Routes>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
