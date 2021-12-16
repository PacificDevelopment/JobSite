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

  const getSavedJobs = (interestParam) => {
    axios.get('/savedJobs')
      .then((results) => {
        setJobs(results.data);
        setInterest(interestParam);
      })
      .catch((err) => {
        console.log('get request to /savedJobs failed');
      });
  };

  useEffect(() => {
    getSavedJobs();
  }, []);

  // this is breaking
  const getAppliedJobs = (interestParam) => {
    axios.get('/appliedJobs')
      .then((results) => {
        setJobs(results.data.fields);
        setInterest(interestParam);
      })
      .catch((err) => {
        console.log('get request to /appliedJobs failed with interest level of', interestParam, err);
        setJobs([{}]);
        setInterest(interestParam);
      });
  };

  const selectJobList = (event) => {
    const buttonName = event.target.value;
    switch (buttonName) {
      case 'Applied':
        getAppliedJobs(buttonName);
        break;
      case 'Extremely Interested':
        getSavedJobs(buttonName);
        break;
      case 'Very Interested':
        getSavedJobs(buttonName);
        break;
      case 'Interested':
        getSavedJobs(buttonName);
        break;
      default:
        break;
    }
    getSavedJobs(buttonName);
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
          value='Applied'
        >
          Applied
        </Button>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
          value='Extremely Interested'

        >
          Extremely Interested
        </Button>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
          value='Very Interested'

        >
          Very Interested
        </Button>
        <Button
          variant="outline"
          style={Theme.palette.independence}
          onClick={selectJobList}
          value='Interested'

        >
          Interested
        </Button>
      </Box>
      <Main interestLevel={interestLevel} savedJobsList={savedJobsList} />
    </Box>
  );
}

export default Jobs;
