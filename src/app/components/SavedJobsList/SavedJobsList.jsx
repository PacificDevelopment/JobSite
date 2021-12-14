import *  as React from 'react';
import { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import SavedJobItem from "./SavedJobItem.jsx";
import Container from '@mui/material/Container';




const SavedJobsList = (props) => {

    return (
      <Container >
      {props.listOfJobs.map((job) =>
        <SavedJobItem  key ={job.url} job={job} handleFocus={handleFocusItem}/>
      )}
      </Container>
  );
};

export default SavedJobsList;