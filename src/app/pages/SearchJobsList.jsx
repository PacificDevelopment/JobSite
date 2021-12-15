import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import JobSearch from '../components/SearchJobsList/jobs/JobSearch';
import Main from '../components/SearchJobsList/JobsList/Main';
import jobsData from '../components/SearchJobsList/JobsList/apiDataSample';

function SearchJobsList() {
  const [searchResults, setSearchResults] = useState(jobsData);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <Box>
        <JobSearch setSearchResults={setSearchResults} />
      </Box>
      <Box>
        <Main jobsData={searchResults.jobs} />
      </Box>
    </Box>
  );
}

export default SearchJobsList;
