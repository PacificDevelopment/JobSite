import *  as React from 'react';
import { useState, useEffect} from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SearchJobs from "./SearchJobs.jsx";
import JobItem from "./JobItem.jsx";
import JobFocusItem from "./JobFocusItem.jsx";
import Container from '@mui/material/Container';




const JobsList = (props) => {


  const handleFocusItem = (targetJobItem) => {
    console.log('nm, you?', targetJobItem);
    props.mainFocusFunction(targetJobItem);
  }

  return (

      <Container >
      {props.listOfJobs.map((job) =>
        <JobItem  key ={job.url} job={job} handleFocus={handleFocusItem}/>

      )}
      </Container>



  )
}

export default JobsList;