import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import JobSearch from '../components/JobSearch/JobSearch';
import Main from '../components/JobsList/Main';
import jobsData from '../components/JobsList/apiDataSample';

function SearchJobsList() {
  const [searchResults, setSearchResults] = useState(jobsData);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <JobSearch setSearchResults={setSearchResults} context="jobsearch" />
      <Main jobsData={searchResults.jobs} />
    </Box>
  );
}

export default SearchJobsList;
