/*eslint-disable*/
import React from 'react';
import { Box, Stack } from '@mui/material';
import JobSearchDrawer from './JobSearchDrawer';
import JobSearchProvider from './JobSearchContext';
import JobSearchBars from './JobSearchBars';
import SubmitSearchButton from './SubmitSearchButton';

const JobSearch = () => {
  return (
    <JobSearchProvider>
      <Box sx={{ minWidth: 300, m: 2 }}>
        <Stack>
          <JobSearchBars />
        </Stack>
        <JobSearchDrawer />
        <SubmitSearchButton />
      </Box>
    </JobSearchProvider>
  );
};

export default JobSearch;
