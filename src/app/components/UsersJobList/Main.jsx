import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserJobsList from './UserJobsList';

function Main({ interestLevel, savedJobsList, refreshJobs }) {
  // const [jobsState, setJobs] = useState(savedJobsList);
  // if (jobsState !== {}) {
  //   console.log('this is jobs state', jobsState);
  //   return (
  //     <div>Visit the job search page to save and apply for jobs!</div>
  //   );
  // }
  useEffect(() => {
    // setJobs(savedJobsList);
    // console.log('state of mah jerb', jobsState);
  }, []);

  if (Array.isArray(savedJobsList) && savedJobsList === []) {
    return (
      <Container sx={{ display: 'flex' }}>
        <Typography>
          Currently building applied jobs
        </Typography>
      </Container>
    );
  }
  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <UserJobsList
        listOfJobs={savedJobsList}
        interestLevel={interestLevel}
        refreshJobs={refreshJobs}
      />
    </Box>
  );
}

export default Main;
