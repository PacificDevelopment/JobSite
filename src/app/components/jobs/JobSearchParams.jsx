import React from 'react';
import { Box } from '@mui/material';
import { SortBy, Range } from './RadioGroups.jsx';
import SalarySlider from './SalarySlider.jsx';


const JobSearchParams = () => {

  return (
    <Box sx={{ minWidth: 120 }}>
      <SortBy />
      <Range />
      <SalarySlider />
    </Box>
  );
}


export default JobSearchParams;