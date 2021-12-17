import * as React from 'react';
import Container from '@mui/material/Container';
import JobItem from './JobItem';

function JobsList({ mainFocusFunction, listOfJobs = [] }) {
  const handleFocusItem = (targetJobItem) => {
    mainFocusFunction(targetJobItem);
  };

  return (

    <Container>
      {listOfJobs.map((job, index) => (
        <JobItem
          key={job.url}
          job={job}
          index={index}
          handleFocus={handleFocusItem}
        />
      ))}
    </Container>
  );
}

export default JobsList;
