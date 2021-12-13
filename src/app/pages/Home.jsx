import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AccountSelection from '../components/AccountSelection';
import { useWindowSize } from '../utils/customHooks';

const Home = function ({ createAccount }) {
  const { width } = useWindowSize();
  if (width < 800) { // mobile rendering
    return (
      <div>
        <h1>
          Mobile Home Screen Placeholder
        </h1>
      </div>
    );
  } // desktop rendering
  return (
    <div>
      <div className="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AccountSelection createAccount={createAccount} />
      </div>

      <Box>
        <h1>How JobSite Works</h1>
        <Button variant="contained">Find Jobs</Button>
        <Button variant="contained">Organize Your Search</Button>
        <Button variant="contained">Apply In One Click</Button>
        <Button variant="contained">Keep Track Of Interviews</Button>
      </Box>
    </div>
  );
};

export default Home;
