import React from 'react';
import { Stack, Button, Container } from '@mui/material';
import {
  Sort, Range, Experience, EmploymentType, WorkSite,
} from './RadioGroups.jsx';
import SalarySlider from './SalarySlider.jsx';

const JobSearchParams = () => {
  return (
    <Container>
      <Stack>
        <Sort />
        <Range />
        <Experience />
        <EmploymentType />
        <SalarySlider />
        <WorkSite />
        {/* <Button onClick="" label="Apply Filters" /> */}
      </Stack>
    </Container>
  );
};

export default JobSearchParams;
