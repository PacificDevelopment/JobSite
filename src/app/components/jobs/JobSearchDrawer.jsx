import React, { useContext } from 'react';
import { Drawer, Button, Box } from '@mui/material';
import JobSearchParams from './JobSearchParams.jsx';
import { JobSearchContext } from './JobSearchContext.jsx';


const JobSearchDrawer = () => {

  let { drawer, setDrawer, query, setQuery } = useContext(JobSearchContext);
  let toggleDrawer = () => setDrawer(!drawer);
  let updateQuery = () => {}

  return (
    <>
      {/* <Button onClick={toggleDrawer} fullWidth >Search Filters</Button> */}
      <Button onClick={updateQuery} fullWidth >Search</Button>
        <Drawer
          anchor='right'
          variant='temporary'
          open={drawer}
          onClose={toggleDrawer}
        >
      <Box role='presentation' sx={{width: 250, m: 2}}>
          <h1>Filters</h1>
          <JobSearchParams />
          <Button onClick={updateQuery} label='Apply Filters'/>
      </Box>
        </Drawer>
    </>
  )
}

export default JobSearchDrawer;
