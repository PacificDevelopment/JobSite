import * as React from 'react';
import { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import JobSearch from '../components/JobSearch/JobSearch';
import Main from '../components/JobsList/Main';
import jobsData from '../components/JobsList/apiDataSample';

function Dashboard() {
  const [searchResults, setSearchResults] = useState(jobsData);

  return (
    <Box sx={{ flexDirection: 'column', backgroundColor: '#EDFEFF' }}>
      <Box sx={{
        width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center',
      }}
      >
        <Box sx={{ maxWidth: '50%', width: 1000 }}>
          <JobSearch setSearchResults={setSearchResults} context="jobsearch" layout="single" />
        </Box>
      </Box>
      <Typography sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 700, mr: 1 }}>
          Employers:
        </Typography>
        Post a job here
      </Typography>
      <Divider sx={{ m: 2, ml: 5, mr: 5 }} />
      <Main jobsData={searchResults.jobs} />
    </Box>
  );
}

export default Dashboard;
