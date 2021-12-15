import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from 'axios';
import UserJobsList from './UserJobsList.jsx';

function Main() {
  const [jobsState, setJobs] = useState({});

  useEffect(() => {
    getSavedJobs();

  }, []);

  const getSavedJobs = () => {
    axios.get('/savedJobs')
      .then((results) => {
        setJobs(results.data);
        //this returns a list of ALL saved jobs for ALL interest levels
        console.log('hopefully a saved jobs list', results.data);
      })
      .catch((err) => {
        console.log('get request failed');
      });
  };

  if (jobsState !== {}) {
    console.log('this is jobs state', jobsState);
    return (<div>Nothing here until get request returns data</div>);
  }

  return (
    <Container sx={{ display: 'flex' }}>
      <Box>
        <UsersJobsList listOfJobs={jobsState} />
      </Box>
    </Container>
  );
}

export default Main;