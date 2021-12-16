import *  as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import UserJobItem from "./UserJobItem.jsx";
import Container from '@mui/material/Container';

const UserJobsList = ({ listOfJobs, interestLevel }) => {
console.log('listOfJobs',listOfJobs)
  const conditionalRender = listOfJobs === {} ? (<div>no jobs</div>) : listOfJobs.map(job => {
    if (job.interest_level === interestLevel) {

      return (
        <UserJobItem
          key={job.url}
          job={job}
        />)
    }
  })
  return (
    <Container >
      {conditionalRender}
    </Container>
  )
};
export default UserJobsList;