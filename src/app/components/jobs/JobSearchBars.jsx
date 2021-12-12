import React, { useContext, useState } from 'react';
import { TextField, Box, Paper, Stack, FormControl, InputLabel, Input, OutlinedInput, InputAdornment } from '@mui/material';
import { LocationOn, LocationOff, Tune } from '@mui/icons-material';
import {JobSearchContext} from './JobSearchContext.jsx';


// export const LocationSearchIcon = () => {

//   let [anywhere, setAnywhere] = useState(false);
//   let icon = anywhere ? <LocationOn sx={{color:'red'}}/> : <LocationOff /> //change color

//   return (
//     < InputAdornment
//       position="end"
//       onClick={() => setAnywhere(!anywhere)}
//     >
//       {icon}
//     </InputAdornment >
//   )
// }

// export default LocationSearchIcon;


export const LocationSearch = () => {
  let [anywhere, setAnywhere] = useState(false);
  let [color, setColor] = useState('red')
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
        endAdornment={[<LocationSearchIcon />]}
      />
    </FormControl>
  )
}


export const KeywordSearch = () => {

  const LocationSearchIcon = () => {

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
        endAdornment={<LocationSearchIcon />}
      />
    </FormControl>
  )
}

const JobSearchBars = () => (
  <Box variant='presentation'>
    <Stack>
      <KeywordSearch />
      <LocationSearch />
    </Stack>
  </Box>
);


export default JobSearchBars;
