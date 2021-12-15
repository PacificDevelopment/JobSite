/* eslint-disable */
import React, { useContext } from 'react';
import { Drawer, Box, Typography } from '@mui/material';
import JobSearchParams from './JobSearchParams';
import { JobSearchContext } from './JobSearchContext';

const JobSearchDrawer = () => {
  const { drawer, setDrawer } = useContext(JobSearchContext);
  const toggleDrawer = () => setDrawer((d) => !d);
  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={drawer}
      onClose={toggleDrawer}
    >
      <Box sx={{ minWidth: 250, m: 3 }}>
        <Typography variant={'h5'}>Filters</Typography>
        <JobSearchParams />
      </Box>
    </Drawer>
  );
};

export default JobSearchDrawer;
