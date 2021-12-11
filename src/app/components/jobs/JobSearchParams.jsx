import React from 'react';
import { Stack } from '@mui/material';
import { SortBy, Range, Experience } from './RadioGroups.jsx';
import SalarySlider from './SalarySlider.jsx';


const JobSearchParams = () => {

  return (
    <Stack>
      <SortBy />
      <Range />
      <Experience />
      <SalarySlider />
    </Stack>
  );
}


export default JobSearchParams;