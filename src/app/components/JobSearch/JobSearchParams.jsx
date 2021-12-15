import React from 'react';
import { Stack } from '@mui/material';
import {
  Sort, Range, Experience, EmploymentType, WorkSite,
} from './RadioGroups';
import SalarySlider from './SalarySlider';

// eslint-disable-next-line react/function-component-definition
const JobSearchParams = () => (
  <Stack sx={{m:2}}>
    <Sort />
    <Range />
    <Experience />
    <EmploymentType />
    <SalarySlider />
    <WorkSite />
  </Stack>
);

export default JobSearchParams;
