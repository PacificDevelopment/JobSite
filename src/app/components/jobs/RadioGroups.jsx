/* eslint-disable */
import React, { useState, useContext } from 'react';
import {
  FormControl, FormControlLabel, FormLabel, RadioGroup, Radio,
} from '@mui/material';
import { JobSearchContext } from './JobSearchContext';

export function Sort() {
  const { sort, setSort } = useContext(JobSearchContext);

  return (
    <FormControl fullWidth>
      <FormLabel id="sort">Sort By</FormLabel>
      <RadioGroup
        aria-label="sort"
        defaultValue=""
        name="sort"
        onChange={(e) => { setSort(e.target.value); }}
      >
        <FormControlLabel value="sort=relevance" label="Relevance" control={<Radio />} />
        <FormControlLabel value="sort=date" label="Date" control={<Radio />} />
        <FormControlLabel value="sort=salary" label="Salary" control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
}

export function Range() {
  const { range, setRange } = useContext(JobSearchContext);

  return (
    <FormControl fullWidth>
      <FormLabel id="range">Location Range</FormLabel>
      <RadioGroup
        aria-label="range"
        defaultValue=""
        name="range"
        onChange={(e) => { setRange(e.target.value); }}
      >
        <FormControlLabel value="radius=5" label="5 miles" control={<Radio />} />
        <FormControlLabel value="radius=20" label="20 miles" control={<Radio />} />
        <FormControlLabel value="radius=50" label="50 miles" control={<Radio />} />
        <FormControlLabel value="radius=100" label="100 miles" control={<Radio />} />
        <FormControlLabel value="" label="Anywhere" control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
}

export function Experience() {
  const { experience, setExperience } = useContext(JobSearchContext);
  // Non-functional - Responses will have to be filtered server-side

  return (
    <FormControl fullWidth>
      <FormLabel id="experience">Experience Level</FormLabel>
      <RadioGroup
        // row
        aria-label="experience"
        defaultValue={null}
        name="experience"
        onChange={(e) => setExperience(e.target.value)}
      >
        <FormControlLabel value={'experienceLevel=entry'} label="Entry Level" control={<Radio />} />
        <FormControlLabel value={'experienceLevel=mid'} label="Mid Level" control={<Radio />} />
        <FormControlLabel value={'experienceLevel=senior'} label="Senior Level" control={<Radio />} />
        <FormControlLabel value={'experienceLevel=executive'} label="Executive Level" control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
}

export function EmploymentType() {
  const { employmentType, setEmploymentType } = useContext(JobSearchContext);

  return (
    <FormControl fullWidth>
      <FormLabel id="employmentType">Employment Type</FormLabel>
      <RadioGroup
        aria-label="employmentType"
        defaultValue={null}
        name="employmentType"
        onChange={(e) => setEmploymentType(e.target.value)}
      >
        <FormControlLabel value="employmentType=p" label="Part Time" control={<Radio />} />
        <FormControlLabel value="employmentType=f" label="Full Time" control={<Radio />} />
        <FormControlLabel value="employmentType=t" label="Temporary" control={<Radio />} />
        <FormControlLabel value="employmentType=i" label="Internship" control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
}

export function WorkSite() {
  const { workSite, setWorkSite } = useContext(JobSearchContext);

  return (
    <FormControl fullWidth>
      <FormLabel id="worksite">Work Site</FormLabel>
      <RadioGroup
        aria-label="worksite"
        defaultValue={null}
        name="worksite"
        onChange={(e) => setWorkSite(`worksite=${e.target.value}`)}
      >
        <FormControlLabel value="worksite=remote" label="Remote" control={<Radio />} />
        <FormControlLabel value="worksite=onsite" label="On Site" control={<Radio />} />
        <FormControlLabel value="" label="Mixed" control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
}
