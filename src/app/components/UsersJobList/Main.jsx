import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from 'axios';
import UserJobsList from './UserJobsList.jsx';

function Main({ interestLevel, savedJobsList }) {
  // const [jobsState, setJobs] = useState(savedJobsList);
console.log('saved jobs list from main', savedJobsList)
// if (jobsState !== {}) {
  //   console.log('this is jobs state', jobsState);
  //   return (
    //     <div>Visit the job search page to save and apply for jobs!</div>
    //   );
    // }
    // useEffect(() => {
    //   setJobs(savedJobsList);
    //   console.log('state of mah jerb', jobsState);
    // }, []);

    return (
    <Container sx={{ display: 'flex' }}>
      <Box>
        <UserJobsList listOfJobs={savedJobsList} interestLevel={interestLevel} />
      </Box>
    </Container>
  );
}

export default Main;
