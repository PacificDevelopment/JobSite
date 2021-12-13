import React from 'react';
import { Box, Button } from '@mui/material';
import JobSearchDrawer from './JobSearchDrawer';
import JobSearchProvider from './JobSearchContext';
import JobSearchBars from './JobSearchBars';

const JobSearch = () => {
  // const [query, setQuery] = React.useState({ keyword: '', params: {} });

  return (
    <JobSearchProvider>
      <Box sx={{ minWidth: 120, m: 2 }}>
        <JobSearchBars />
        <JobSearchDrawer />
        <Button sx={{ background: '#000' }}>Button</Button>
      </Box>
    </JobSearchProvider>
  );
};

export default JobSearch;
