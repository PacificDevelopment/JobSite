import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import JobItem from './JobItem';
import JobFocusItem from './JobFocusItem';

function Main({ jobsData }) {
  // const [jobsState, setJobs] = useState(jobsData.jobs);
  const [jobFocusState, setItem] = useState(jobsData?.[0]);

  const mainFocusFunction = (targetJobItem) => {
    setItem(targetJobItem);

    // console.log('targetJobItem from main', targetJobItem)
    // console.log('state from main', jobFocusState)
  };

  useEffect(() => {
    setItem(jobsData?.[0]);
  }, [jobsData]);

  return (

    <Box sx={{
      display: 'flex', maxWidth: 1400, mr: 'auto', ml: 'auto',
    }}
    >
      <Box sx={{
        overflowY: 'auto', maxHeight: 700, width: 600, m: 2, mr: 4,
      }}
      >
        {jobsData.map((job, index) => <JobItem key={`job-${index + 1}`} handleFocus={mainFocusFunction} job={job} />)}
      </Box>
      <JobFocusItem job={jobFocusState} />
    </Box>

  );
}

export default Main;

// box tasks for focus item:
// make border radius curvey
// fill right 5/7ths of screen
// scroll bar (something something overflow)
// horizontal divider between properties
// oneClickApply/detailedApply button
// save job button

// box tasks for list:
// add buttons
// save job
// oneClickApply
// scroll barrrr
