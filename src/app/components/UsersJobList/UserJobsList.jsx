import *  as React from 'react';
import { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import UserJobItem from "./UserJobItem.jsx";
import Container from '@mui/material/Container';




const UserJobsList = (props) => {

    return (
      <Container >
      {props.listOfJobs.map((job) =>
        <UserJobItem  key ={job.url} job={job} handleFocus={handleFocusItem}/>
      )}
      </Container>
  );
};

export default UserJobsList;