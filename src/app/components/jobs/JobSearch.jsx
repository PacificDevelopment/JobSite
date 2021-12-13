import React from 'react';
import { Box, Button } from '@mui/material';
import JobSearchDrawer from './JobSearchDrawer.jsx';
import JobSearchProvider from './JobSearchContext.jsx';
import JobSearchBars from './JobSearchBars.jsx';


const JobSearch = (props) => {

  const [query, setQuery] = React.useState({keyword: '', params: {}});

  return (
    <JobSearchProvider>
      <Box sx={{ minWidth: 120, m: 2 }}>
        <JobSearchBars />
        <JobSearchDrawer />
      </Box>
    </JobSearchProvider>
  );
}


export default JobSearch;
