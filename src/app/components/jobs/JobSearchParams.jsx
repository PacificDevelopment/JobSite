import React from 'react';
import { Stack, Button, Container } from '@mui/material';
import { SortBy, Range, Experience } from './RadioGroups.jsx';
import SalarySlider from './SalarySlider.jsx';


const JobSearchParams = () => {

  return (
    <Container>
      <Stack>
        <SortBy />
        <Range />
        <Experience />
        <SalarySlider />
        <Button onClick={''} label='Apply Filters' />
      </Stack>
    </Container>
  );
}


export default JobSearchParams;