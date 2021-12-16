import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import UserJobItem from "./UserJobItem.jsx";
import Container from '@mui/material/Container';

const UserJobsList = ({ listOfJobs, interestLevel }) => {
  console.log(listOfJobs);

  const newBucket = listOfJobs.filter(job => {
    if(interestLevel === 'Applied') {
      return job;
    } else if(job.interest_level === interestLevel){
      return job;
    }
  })

  console.log('list of jobs', listOfJobs)
  return (
    <Container >
      {newBucket.map(job => <UserJobItem key={job.url} job={job} />)}
    </Container>
  )
};
export default UserJobsList;

/*
  const conditionalRender = !listOfJobs ? (<div>no jobs</div>) : listOfJobs?.map(job => {
    if (job.interest_level === interestLevel) {

      return (
        <UserJobItem
          key={job.url}
          job={job}
        />)
    }
  })
*/