import React, { useContext } from 'react';
import {
  Drawer, Button, Box, Typography,
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
        <Box role="presentation" sx={{ width: 250, m: 2 }}>
          <Typography>Filters</Typography>
          <JobSearchParams />
          <Button onClick={updateQuery} label="Apply Filters" />
        </Box>
      </Drawer>
    </>
  );
};

export default JobSearchDrawer;
