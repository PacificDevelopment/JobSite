import * as React from 'react';
import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import JobSearch from '../components/JobSearch/JobSearch';
import Main from '../components/JobsList/Main';
import jobsData from '../components/JobsList/apiDataSample';

function Dashboard() {
  const [searchResults, setSearchResults] = useState(jobsData);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <Paper
        elevation={2}
        square
        sx={{
          width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#EDFEFF', p: 1, mb: 2,
        }}
      >
        <Box sx={{ maxWidth: '50%', width: 1000 }}>
          <JobSearch setSearchResults={setSearchResults} context="jobsearch" layout="single" />
        </Box>
        <Typography sx={{
          textAlign: 'center', display: 'flex', justifyContent: 'center', mb: 1,
        }}
        >
          <Typography sx={{ fontWeight: 700, mr: 1 }}>
            Employers:
          </Typography>
          Post a job here
        </Typography>
      </Paper>
      <Main jobsData={searchResults.jobs} />
    </Box>
  );
}

export default Dashboard;
