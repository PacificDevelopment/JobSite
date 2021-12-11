import React, { useState, useContext } from 'react';
import { FormControl, FormControlLabel, FormLabel, InputLabel, RadioGroup, Radio } from '@mui/material';
import { JobSearchContext } from './JobSearchContext.jsx'


export const SortBy = () => {

  let { sortBy, setSortBy } = useContext(JobSearchContext)

  return (
    <FormControl fullWidth>
      <FormLabel id="sortBy">Sort By</FormLabel>
      <RadioGroup
        // row
        aria-label='sortBy'
        defaultValue='relevance'
        name='sortBy'
        onChange={(e) => { setSortBy(e.target.value) }}
      >
        <FormControlLabel value='relevance' label='Relevance' control={<Radio />} />
        <FormControlLabel value='date' label='Date' control={<Radio />} />
        <FormControlLabel value='salary' label='Salary' control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
}


export const Range = () => {

  let { range, setRange } = useContext(JobSearchContext)

  return (
    <FormControl fullWidth>
      <FormLabel id="range">Location Range</FormLabel>
      <RadioGroup
        // row
        aria-label='range'
        defaultValue={'anywhere'}
        name='range'
        onChange={(e) => { setRange(e.target.value) }}
      >
        <FormControlLabel value={5} label='5 miles' control={<Radio />} />
        <FormControlLabel value={20} label='20 miles' control={<Radio />} />
        <FormControlLabel value={50} label='50 miles' control={<Radio />} />
        <FormControlLabel value={100} label='100 miles' control={<Radio />} />
        <FormControlLabel value={'anywhere'} label='Anywhere' control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
}


export const Experience = () => {

  let [experience, setExperience] = useState(null)

  return (
    <FormControl fullWidth>
      <FormLabel id='experience'>Experience Level</FormLabel>
      <RadioGroup
        // row
        aria-label='experience'
        defaultValue={null}
        name='experience'
        onChange={(e) => setExperience(e.target.value)}
      >
        <FormControlLabel value={0} label='Entry Level' control={<Radio />} />
        <FormControlLabel value={1} label='Mid Level' control={<Radio />} />
        <FormControlLabel value={2} label='Senior Level' control={<Radio />} />
        <FormControlLabel value={3} label='Executive Level' control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
}
