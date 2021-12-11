import React from 'react';
import { Box } from '@mui/material';

import JobSearchDrawer from './JobSearchDrawer.jsx';
import JobSearchProvider from './JobSearchContext.jsx';

const JobSearch = (props) => {

  const [query, setQuery] = React.useState('');



  return (
    <JobSearchProvider>
      <Box sx={{ minWidth: 120 }}>
        <JobSearchDrawer />
      </Box>
    </JobSearchProvider>
  );
}


export default JobSearch;
