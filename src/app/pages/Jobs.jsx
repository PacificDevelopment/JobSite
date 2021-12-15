import React from 'react';
import {Box, Stack} from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Theme from '../Theme';
import JobSearch from '../components/JobSearch/JobSearch';

function Jobs() {
  return (
    <Box>
      <Stack sx={{m:3}}>
        <JobSearch />
      </Stack>
      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <h1>My Jobs</h1>
        <Button variant="outline" style={Theme.palette.independence}>Applied</Button>
        <Button variant="outline" style={Theme.palette.independence}>Extremely Interested</Button>
        <Button variant="outline" style={Theme.palette.independence}>Very Interested</Button>
        <Button variant="outline" style={Theme.palette.independence}>Interested</Button>
      </Box>
      <Box>
        <p>Job Card</p>r
        <p>Job Card</p>
        <p>Job Card</p>
        <p>Job Card</p>
        <p>Job Card</p>
        <p>Job Card</p>
      </Box>
    </Box>
  );
}

export default Jobs;
