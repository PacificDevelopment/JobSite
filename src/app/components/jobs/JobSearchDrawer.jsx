import React, { useContext } from 'react';
import {
  Drawer, Button, Box, Typography, Form
} from '@mui/material';
import JobSearchParams from './JobSearchParams';
import { JobSearchContext } from './JobSearchContext';

const JobSearchDrawer = () => {
  const {
    drawer, setDrawer,
  } = useContext(JobSearchContext);
  const toggleDrawer = () => setDrawer((d) => !d);
  const updateQuery = () => { };

  return (
    <>
      {/* <Button onClick={toggleDrawer} fullWidth >Search Filters</Button> */}
      <Button onClick={updateQuery} sx={{ background: 'black' }} fullWidth>Search</Button>
      <Drawer
        anchor="right"
        variant="temporary"
        open={drawer}
        onClose={toggleDrawer}
      >
        <Box role="presentation" sx={{ minWidth: 350, m: 1 }}>
          <Typography variant={'h5'}>Filters</Typography>
          <JobSearchParams />
          <Button onClick={updateQuery} label="Apply Filters" />
        </Box>
      </Drawer>
    </>
  );
};

export default JobSearchDrawer;
