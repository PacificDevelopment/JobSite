import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Theme from '../Theme';
import JobSearch from '../components/SearchJobsList/jobs/JobSearch';

function Jobs() {
  return (
    <Box>
      <Box>
        <Button variant="outline" style={Theme.palette.independence}>Filter</Button>
        <JobSearch />
        <TextField id="job-title" label="Job Title or Keyword" />
        <TextField id="location" label="Search by Location" />
        <Button variant="outline" style={Theme.palette.independence}>View Results</Button>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <h1>My Jobs</h1>
        <Button variant="outline" style={Theme.palette.independence}>Applied</Button>
        <Button variant="outline" style={Theme.palette.independence}>Extremely Interested</Button>
        <Button variant="outline" style={Theme.palette.independence}>Very Interested</Button>
        <Button variant="outline" style={Theme.palette.independence}>Interested</Button>
      </Box>
      <Box>
        <p>Job Card</p>
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
