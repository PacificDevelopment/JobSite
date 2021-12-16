import React, { useState, useEffect } from 'react';
import {
  Box, Stack, Button,
} from '@mui/material';
import axios from 'axios';
import Theme from '../Theme';
import Typography from '@mui/material/Typography';
import JobSearch from '../components/JobSearch/JobSearch';
import Main from '../components/UsersJobList/Main';

function Jobs() {
  const [savedJobsList, setJobs] = useState([]);
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
        console.log('got applied jobs', results.data)
      })
      .catch((err) => {
        console.log('get request to /appliedJobs failed');
      });
  };

  const selectJobList = (event) => {
    const interestLevel = event.target.value;
    switch (event.target.value) {
      case 'Applied':
        getAppliedJobs(interestLevel);
        break;
      case 'Extremely Interested':
        getSavedJobs(interestLevel);
        break;
      case 'Very Interested':
        getSavedJobs(interestLevel);
        break;
      case 'Interested':
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
        <Typography>My Jobs</Typography>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
          value={'Applied'}
        >
          Applied
        </Button>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
          value={'Extremely Interested'}

        >
          Extremely Interested
        </Button>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
          value={'Very Interested'}

        >
          Very Interested
        </Button>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
          value={'Interested'}

        >
          Interested
        </Button>
      </Box>
      <Main interestLevel={interestLevel} savedJobsList={savedJobsList} />
    </Box>
  );
}

export default Jobs;
