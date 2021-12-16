import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Button,
} from '@mui/material';
import axios from 'axios';
import Theme from '../Theme';
import JobSearch from '../components/JobSearch/JobSearch';
import Main from '../components/UsersJobList/Main';

function Jobs() {
  const [savedJobsList, setJobs] = useState({});
  const [interestLevel, setInterest] = useState('');

  // this is breaking
  const getSavedJobs = (interestParam) => {
    axios.get('/savedJobs')
    // results = array of objects, each object is a "job post", with the same data
    // shape as the API data (also the same as what Job List uses)
      .then((results) => {
        setJobs(results.data);
        setInterest(interestParam);
        // this returns a list of ALL saved jobs for ALL interest levels
        console.log('hopefully a saved jobs list', results.data);
      })
      .catch((err) => {
        console.log('get request failed');
      });
  };

  useEffect(() => {
    getSavedJobs();
  }, []);

  const getAppliedJobs = (interestParam) => {
    axios.get('/appliedJobs')
      .then((results) => {
        setJobs(results.data);
        setInterest(interestParam);
        console.log('hopefully a saved jobs list', results.data);
      })
      .catch((err) => {
        console.log('get request failed');
      });
  };

  const selectJobList = (event) => {
    const interestLevel = event.target.innerText;
    switch (event.target.innerText) {
      case 'APPLIED':
        getAppliedJobs(interestLevel);
        break;
      case 'EXTREMELY INTERESTED':
        getSavedJobs(interestLevel);
        break;
      case 'VERY INTERESTED':
        getSavedJobs(interestLevel);
        break;
      case 'INTERESTED':
        getSavedJobs(interestLevel);
        break;
      default:
        break;
    }
    getSavedJobs(interestLevel);
  };
  return (
    <Box>
      <Stack sx={{ m: 3 }}>
        <JobSearch />
      </Stack>
      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <h1>My Jobs</h1>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
        >
          Applied
        </Button>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
        >
          Extremely Interested
        </Button>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
        >
          Very Interested
        </Button>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
        >
          Interested
        </Button>
      </Box>
      <Main interestLevel={interestLevel} savedJobsList={savedJobsList} />
    </Box>
  );
}

export default Jobs;
