import React, { useContext, useState } from 'react';
import { TextField, Box, Paper, Stack, FormControl, InputLabel, Input, OutlinedInput, InputAdornment } from '@mui/material';
import { LocationOn, LocationOff, Tune } from '@mui/icons-material';
import {JobSearchContext} from './JobSearchContext.jsx';


export const LocationSearch = () => {
  let [anywhere, setAnywhere] = useState(false);
  let [color, setColor] = useState('red');
  let {location, setLocation} = useContext(JobSearchContext)
  let label = anywhere ? 'Anywhere' : 'Search Location' //change color

  const LocationSearchIcon = () => {

    let icon = anywhere ? <LocationOff /> : ['...Search Anywhere?', <LocationOn sx={{ color: 'red' }} />] //change color

    return (
      < InputAdornment
        position="end"
        onClick={() => setAnywhere(!anywhere)}
      >
        {icon}
      </InputAdornment >
    )
  }

  return (

    <FormControl variant="outlined" disabled={anywhere ? true : false}>
      <InputLabel htmlFor="location">{label}</InputLabel>
      <Input
        id="location"
        onFocus={() => setAnywhere(false)}
        onChange={(e) => setLocation('location=' + e.target.value)}
        endAdornment={[<LocationSearchIcon />]}
      />
    </FormControl>
  )
}


export const KeywordSearch = () => {

  let {keywords, setKeywords} = useContext(JobSearchContext)

  const FiltersIcon = () => {

    let {drawer, setDrawer} = useContext(JobSearchContext)

    return (
      < InputAdornment
        position="end"
        onClick={() => setDrawer(!drawer)}
      >
        <Tune />
      </InputAdornment >
    )
  }

  return (
    <FormControl >
      <InputLabel htmlFor="keyword">
        Search Jobs
      </InputLabel>
      <Input
        id="keyword"
        onChange={e => setKeywords('keywords=' + e.target.value)}
        endAdornment={<FiltersIcon />}
      />
    </FormControl>
  )
}

const JobSearchBars = () => (
  <Box>
    <Stack>
      <KeywordSearch />
      <LocationSearch />
    </Stack>
  </Box>
);


export default JobSearchBars;
