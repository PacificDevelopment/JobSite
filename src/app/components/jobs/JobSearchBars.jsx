import React from 'react';
import { TextField, Box, Stack, FormControl, InputLabel, Input, InputAdornment } from '@mui/material';


export const LocationSearch = () => {

  return (

    <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">

            </InputAdornment>
          }
        />
        </FormControl>
  )
}


export const KeywordSearch = () => {

  return (
    <TextField />
  )
}

const JobSearchBars = () => (
  <Box>
    <Stack>
      <LocationSearch />
      <KeywordSearch />
    </Stack>
  </Box>
);


export default JobSearchBars;
