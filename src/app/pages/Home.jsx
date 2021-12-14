import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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
        <Grid xs={12} sx={centerStyle}>
          <Typography variant="h4">
            How
            {' '}
            <Typography display="inline" variant="h4" color="secondary" sx={{ fontWeight: 'bold' }}>JobSite</Typography>
            {' '}
            Works
          </Typography>
        </Grid>
        <Grid
          xs={3}
          sx={[centerStyle, {
            flexDirection: 'column', justifyContent: 'start', padding: 5,
          }]}
        >
          <img src={Glass} alt="Find Jobs" width={75} />
          <Typography variant="h5">Find Jobs</Typography>
        </Grid>
        <Grid
          xs={3}
          sx={[centerStyle, {
            flexDirection: 'column', justifyContent: 'start', padding: 5,
          }]}
        >
          <img src={Checklist} alt="Organize Your Search" width={75} />
          <Typography variant="h5">Organize Your Search</Typography>
        </Grid>
        <Grid
          xs={3}
          sx={[centerStyle, {
            flexDirection: 'column', justifyContent: 'start', padding: 5,
          }]}
        >
          <img src={Click} alt="Apply In One Click" width={75} />
          <Typography variant="h5">Apply In One Click</Typography>
        </Grid>
        <Grid
          xs={3}
          sx={[centerStyle, {
            flexDirection: 'column', justifyContent: 'start', padding: 5,
          }]}
        >
          <img src={Job} alt="Keep Track Of Interviews" width={75} />
          <Typography variant="h5">Keep Track Of Interviews</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
