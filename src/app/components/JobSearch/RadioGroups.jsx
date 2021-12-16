import React, { useContext } from 'react';
import {
  FormControl, FormControlLabel, FormLabel, RadioGroup, Radio,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { JobSearchContext } from './JobSearchContext';

const radioStyle = { '&.Mui-checked': { color: '#4A485B' } };
const labelStyle = { '&.Mui-focused': { color: '#4A485B', fontWeight: 700 } };

export function Sort() {
  const { setSort } = useContext(JobSearchContext);
  const locationHook = useLocation();
  const url = new URLSearchParams(locationHook.search);

  return (
    <FormControl fullWidth>
      <FormLabel id="sort" sx={labelStyle}>Sort By</FormLabel>
      <RadioGroup
        row
        aria-label="sort"
        defaultValue={url.has('sort') ? `sort=${url.get('sort')}` : null}
        name="sort"
        onChange={(e) => { setSort(e.target.value); }}
      >
        <FormControlLabel value="sort=relevance" label="Relevance" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="sort=date" label="Date" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="sort=salary" label="Salary" control={<Radio sx={radioStyle} />} />
      </RadioGroup>
    </FormControl>
  );
}

export function Range() {
  const { setRange } = useContext(JobSearchContext);
  const locationHook = useLocation();
  const url = new URLSearchParams(locationHook.search);

  return (
    <FormControl fullWidth>
      <FormLabel id="range" sx={labelStyle}>Location Range</FormLabel>
      <RadioGroup
        aria-label="range"
        defaultValue={url.has('radius') ? `radius=${url.get('radius')}` : null}
        name="range"
        onChange={(e) => { setRange(e.target.value); }}
      >
        <FormControlLabel value="radius=5" label="5 miles" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="radius=20" label="20 miles" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="radius=50" label="50 miles" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="radius=100" label="100 miles" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="" label="Anywhere" control={<Radio sx={radioStyle} />} />
      </RadioGroup>
    </FormControl>
  );
}

export function Experience() {
  const { setExperience } = useContext(JobSearchContext);
  const locationHook = useLocation();
  const url = new URLSearchParams(locationHook.search);

  return (
    <FormControl fullWidth>
      <FormLabel id="experience" sx={labelStyle}>Experience Level</FormLabel>
      <RadioGroup
        // row
        aria-label="experience"
        defaultValue={url.has('experienceLevel') ? `experienceLevel=${url.get('experienceLevel')}` : null}
        name="experience"
        onChange={(e) => setExperience(e.target.value)}
      >
        <FormControlLabel value="experienceLevel=entry" label="Entry Level" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="experienceLevel=mid" label="Mid Level" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="experienceLevel=senior" label="Senior Level" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="experienceLevel=executive" label="Executive Level" control={<Radio sx={radioStyle} />} />
      </RadioGroup>
    </FormControl>
  );
}

export function EmploymentType() {
  const { setEmploymentType } = useContext(JobSearchContext);
  const locationHook = useLocation();
  const url = new URLSearchParams(locationHook.search);

  return (
    <FormControl fullWidth>
      <FormLabel id="employmentType" sx={labelStyle}>Employment Type</FormLabel>
      <RadioGroup
        aria-label="employmentType"
        defaultValue={url.has('employmentType') ? `employmentType=${url.get('employmentType')}` : null}
        name="employmentType"
        onChange={(e) => setEmploymentType(e.target.value)}
      >
        <FormControlLabel value="employmentType=Part Time" label="Part Time" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="employmentType=Full Time" label="Full Time" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="employmentType=Temporary" label="Temporary" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="employmentType=Internship" label="Internship" control={<Radio sx={radioStyle} />} />
      </RadioGroup>
    </FormControl>
  );
}

export function WorkSite() {
  const { setWorkSite } = useContext(JobSearchContext);
  const locationHook = useLocation();
  const url = new URLSearchParams(locationHook.search);

  return (
    <FormControl fullWidth>
      <FormLabel id="worksite" sx={labelStyle}>Work Site</FormLabel>
      <RadioGroup
        row
        aria-label="worksite"
        defaultValue={url.has('worksite') ? `worksite=${url.get('worksite')}` : null}
        name="worksite"
        onChange={(e) => setWorkSite(`worksite=${e.target.value}`)}
      >
        <FormControlLabel value="worksite=remote" label="Remote" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="worksite=onsite" label="On Site" control={<Radio sx={radioStyle} />} />
        <FormControlLabel value="" label="Mixed" control={<Radio sx={radioStyle} />} />
      </RadioGroup>
    </FormControl>
  );
}
