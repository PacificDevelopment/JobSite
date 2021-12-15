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
      <JobSearchBars>
        <SubmitSearchButton />
        <JobSearchDrawer />
      </JobSearchBars>
    </JobSearchProvider>
  );
};

export default JobSearch;
