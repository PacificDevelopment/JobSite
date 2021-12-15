/*eslint-disable*/
import React from 'react';
import { Box, Stack } from '@mui/material';
import JobSearchDrawer from './JobSearchDrawer';
import JobSearchProvider from './JobSearchContext';
import JobSearchBars from './JobSearchBars';
import SubmitSearchButton from './SubmitSearchButton';

const JobSearch = ({setSearchResults}) => {

  return (
    <JobSearchProvider>
      <JobSearchBars>
        <SubmitSearchButton setSearchResults={setSearchResults} />
        <JobSearchDrawer />
      </JobSearchBars>
    </JobSearchProvider>
  );
};

export default JobSearch;
