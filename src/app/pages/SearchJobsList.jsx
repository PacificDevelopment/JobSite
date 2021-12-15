import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import JobSearch from '../components/JobSearch/JobSearch';
import Main from '../components/JobsList/Main';
import jobsData from '../components/JobsList/apiDataSample';

function SearchJobsList() {
  const [searchResults, setSearchResults] = useState(jobsData);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <Box>
        <JobSearch setSearchResults={setSearchResults} />
      </Box>
      <Box>
        <Main jobsData={searchResults.jobs} focusItem={searchResults.jobs[0]} />
      </Box>
    </Box>
  );
}

export default SearchJobsList;
