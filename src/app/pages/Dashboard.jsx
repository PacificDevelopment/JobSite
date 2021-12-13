import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Theme from '../Theme';

const Dashboard = function () {
  return (
    <Box>
      <Box>
        <Button variant="outline" style={Theme.palette.independence}>Filter</Button>
        <TextField id="job-title" label="Job Title or Keyword" />
        <TextField id="location" label="Search by Location" />
        <Button variant="outline" style={Theme.palette.independence}>View Results</Button>
      </Box>
      <h1>Employers: Post a job here</h1>
      <Box>
        <Box />
      </Box>
    </Box>
  );
};

export default Dashboard;
