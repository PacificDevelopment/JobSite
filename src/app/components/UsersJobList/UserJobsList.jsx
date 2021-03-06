import React from 'react';
import Container from '@mui/material/Container';
import UserJobItem from './UserJobItem';

function UserJobsList({ listOfJobs, interestLevel, refreshJobs }) {
  const newBucket = listOfJobs.filter((job) => {
    if (interestLevel === 'Applied') {
      return job;
    } if (job.interest_level === interestLevel) {
      return job;
    }
    return null;
  });
  // this console.log is being called TWICE whenever I click a Job List button
  // when I click Applied, it first logs a curious messed-up array
  // that might actually represent an Applied Job, but is currently in the wrong format
  // but, the second time it logs an array of all saved jobs, so that's what is
  // rendered on the page. This is incorrect! When I click Applied, I should see NO saved jobs.

  return (
    <Container>
      {newBucket.map((job) => (
        <UserJobItem
          key={job.id}
          job={job}
          refreshJobs={refreshJobs}
          interestLevel={interestLevel}
        />
      ))}
    </Container>
  );
}
export default UserJobsList;

/*
  const conditionalRender = !listOfJobs ? (<div>no jobs</div>) : listOfJobs?.map(job => {
    if (job.interest_level === interestLevel) {
      return (
        <UserJobItem
          key={job.url}
          job={job}
        />
      );
    }
  })
*/
