import React from 'react';
import { Stack, Container } from '@mui/material';
import {
  Sort, Range, Experience, EmploymentType, WorkSite,
} from './RadioGroups';
import SalarySlider from './SalarySlider';

// eslint-disable-next-line react/function-component-definition
const JobSearchParams = () => (
  <Container>
    <Stack>
      <Sort />
      <Range />
      <Experience />
      <EmploymentType />
      <SalarySlider />
      <WorkSite />
    </Stack>
  </Container>
);

export default JobSearchParams;
