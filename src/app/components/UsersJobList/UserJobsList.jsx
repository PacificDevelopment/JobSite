import *  as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import UserJobItem from "./UserJobItem.jsx";
import Container from '@mui/material/Container';

const UserJobsList = ({ listOfJobs, interestLevel }) => {
  const conditionalRender = listOfJobs.map(job => {
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