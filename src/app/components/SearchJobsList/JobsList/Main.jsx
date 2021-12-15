import *  as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import JobsList from "./JobsList.jsx";
import JobFocusItem from "./JobFocusItem.jsx";
import JobSearch from "../jobs/JobSearch.jsx";


const Main = ({ jobsData }) => {
  // const [jobsState, setJobs] = useState(jobsData.jobs);
  const [jobFocusState, setItem] = useState({})


  const mainFocusFunction = (targetJobItem) => {
    setItem(targetJobItem);
    // console.log('targetJobItem from main', targetJobItem)
    // console.log('state from main', jobFocusState)
  }


  return (

    <Container sx={{ display: 'flex' }}>

      <Box >
        <JobsList mainFocusFunction={mainFocusFunction} listOfJobs={jobsData} />
      </Box>
      <Box sx={{ alignItems: 'center' }}>
        <JobFocusItem job={jobFocusState} />
      </Box>
    </Container>

  )
}

export default Main;


//box tasks for focus item:
//make border radius curvey
//fill right 5/7ths of screen
//scroll bar (something something overflow)
//horizontal divider between properties
//oneClickApply/detailedApply button
//save job button

//box tasks for list:
//add buttons
  //save job
  //oneClickApply
//scroll barrrr