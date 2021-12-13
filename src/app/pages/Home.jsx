import React from 'react';
import Grid from '@mui/material/Grid';
import AccountSelection from '../components/AccountSelection';
import { useWindowSize } from '../utils/customHooks';
import Hero from '../assets/hero.png';
import Glass from '../assets/magnifying-glass.png';
import Checklist from '../assets/checklist.png';
import Click from '../assets/click 1.png';
import Job from '../assets/job 1.png';

const centerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Home({ createAccount }) {
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
    <Grid container item xs={10} direction="column">
      <Grid
        item
        xs={8}
        className="hero"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${Hero})`, backgroundSize: 'cover',
        }}
      >
        <AccountSelection createAccount={createAccount} />
      </Grid>

      <Grid xs={4} item container>
        <Grid xs={12} sx={centerStyle}>How JobSite Works</Grid>
        <Grid xs={3} sx={[centerStyle, { flexDirection: 'column' }]}>
          <img src={Glass} alt="Find Jobs" width={75} />
          <p>Find Jobs</p>
        </Grid>
        <Grid xs={3} sx={[centerStyle, { flexDirection: 'column' }]}>
          <img src={Checklist} alt="Organize Your Search" width={75} />
          <p>Organize Your Search</p>
        </Grid>
        <Grid xs={3} sx={[centerStyle, { flexDirection: 'column' }]}>
          <img src={Click} alt="Apply In One Click" width={75} />
          <p>Apply In One Click</p>
        </Grid>
        <Grid xs={3} sx={[centerStyle, { flexDirection: 'column' }]}>
          <img src={Job} alt="Keep Track Of Interviews" width={75} />
          <p>Keep Track Of Interviews</p>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
