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
<<<<<<< HEAD:src/app/components/SearchJobsList/jobs/JobSearch.jsx
      <Box sx={{ minWidth: 120, m: 2 }}>
        <Stack> {/* Maybe pass this in as props to change layout and reuse component around the site */}
          <JobSearchBars />
        </Stack>
        <JobSearchDrawer />
        <SubmitSearchButton setSearchResults={setSearchResults}/>
      </Box>
=======
      <JobSearchBars>
        <SubmitSearchButton />
        <JobSearchDrawer />
      </JobSearchBars>
>>>>>>> main:src/app/components/JobSearch/JobSearch.jsx
    </JobSearchProvider>
  );
};

export default JobSearch;
