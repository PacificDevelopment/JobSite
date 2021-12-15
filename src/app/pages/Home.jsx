import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import AccountSelection from '../components/home/AccountSelection';
import { useWindowSize } from '../utils/customHooks';
import Hero from '../assets/hero.png';
import Glass from '../assets/magnifying-glass.png';
import Checklist from '../assets/checklist.png';
import Click from '../assets/click 1.png';
import Job from '../assets/job 1.png';
import CustomCard from '../components/home/CustomCard';

const centerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Home({ createAccount }) {
  const { width } = useWindowSize();

  const buttons = [
    ['Find Jobs', Glass, 'Use our various filters to find the exact job you need.'],
    ['Organize Your Search', Checklist, 'Use various different filters to find the exact job you’re looking for. Save jobs you’re interested and trask responses at a glance.'],
    ['Apply In One Click', Click, 'When browsing for jobs, you can apply in one click, and we’ll send your resume to a recruiter without you ever leaving the page.'],
    ['Keep Track Of Interviews', Job, 'We’ve set up Google Calandar integration to easily track your upcoming interviews throughout your day to day.']];

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
          display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${Hero})`, backgroundSize: 'cover', p: 0,
        }}
      >
        <AccountSelection createAccount={createAccount} />
      </Grid>

      <Grid xs={4} item container>
        <Grid xs={12} sx={centerStyle}>
          <Typography variant="h4" sx={{ m: 3 }}>
            How
            {' '}
            <Typography display="inline" variant="h4" color="secondary" sx={{ fontWeight: 'bold' }}>JobSite</Typography>
            {' '}
            Works
          </Typography>
        </Grid>
        {buttons.map((buttonData, index) => (
          <CustomCard key={`Custom-card-${index + 1}`} buttonData={buttonData} centerStyle={centerStyle} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
