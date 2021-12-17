import * as React from 'react';
import { Box } from '@mui/material';
import UserJobItem from './UserJobItem';

function UserJobsList({ listOfJobs, interestLevel }) {
  const conditionalRender = listOfJobs === {} ? (<div>no jobs</div>) : listOfJobs.map((job) => {
    if (job.interest_level === interestLevel) {
      return (
        <UserJobItem
          key={job.url}
          job={job}
        />
      );
    }
  });
  return (
    <Box>
      {conditionalRender}
    </Box>
  );
}
export default UserJobsList;
