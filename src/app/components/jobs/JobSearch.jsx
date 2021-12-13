import React from 'react';
import { Box, Stack } from '@mui/material';
import JobSearchDrawer from './JobSearchDrawer';
import JobSearchProvider, { JobSearchContext } from './JobSearchContext';
import JobSearchBars from './JobSearchBars';
import SubmitSearchButton from './SubmitSearchButton';

const JobSearch = () => {

  return (
    <JobSearchProvider>
      <Box sx={{ minWidth: 120, m: 2 }}>
        <Stack> {/* Maybe pass this in as props to reuse component around the site */}
          <JobSearchBars />
        </Stack>
        <JobSearchDrawer />
        <SubmitSearchButton />
      </Box>
    </JobSearchProvider>
  );
};

export default JobSearch;
