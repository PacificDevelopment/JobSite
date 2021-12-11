import React, { useContext } from 'react';
import { Drawer, Button } from '@mui/material';
import JobSearchParams from './JobSearchParams.jsx';
import { JobSearchContext } from './JobSearchContext.jsx';


const JobSearchDrawer = () => {
  let { drawer, setDrawer } = useContext(JobSearchContext);
  const toggleDrawer = () => setDrawer(!drawer);
  return (
    <>
      <Button onClick={toggleDrawer}>Open</Button>
      <Drawer
        anchor='right'
        variant='permanent'
        open={drawer}
      >
        <JobSearchParams />
      </Drawer>
    </>
  )
}

export default JobSearchDrawer;