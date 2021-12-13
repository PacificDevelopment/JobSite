import React, { useContext, useState } from 'react';
import {
  Box, Stack, FormControl, InputLabel, Input, InputAdornment,
} from '@mui/material';
import { LocationOn, LocationOff, Tune } from '@mui/icons-material';
import { JobSearchContext } from './JobSearchContext';

export const LocationSearch = () => {
  const [anywhere, setAnywhere] = useState(false);
  const { location, setLocation } = useContext(JobSearchContext);
  const label = anywhere ? 'Anywhere' : 'Search Location';

  const LocationSearchIcon = () => {
    const icon = anywhere ? <LocationOff /> : ['...Search Anywhere?', <LocationOn sx={{ color: 'red' }} />];

    return (
      <InputAdornment
        position="end"
        onClick={() => setAnywhere(!anywhere)}
      >
        {icon}
      </InputAdornment>
    );
  };

  return (

    <FormControl variant="outlined" disabled={!!anywhere}>
      <InputLabel htmlFor="location">{label}</InputLabel>
      <Input
        id="location"
        onFocus={() => setAnywhere(false)}
        onChange={(e) => setLocation(`location=${e.target.value}`)}
        endAdornment={[<LocationSearchIcon />]}
      />
    </FormControl>
  );
};

export const KeywordSearch = () => {
  const { keywords, setKeywords } = useContext(JobSearchContext);
  const { drawer, setDrawer } = useContext(JobSearchContext);

  const FiltersIcon = () => {
    return (
      <InputAdornment
        position="end"
        onClick={() => setDrawer(!drawer)}
      >
        <Tune />
      </InputAdornment>
    );
  };

  return (
    <FormControl>
      <InputLabel htmlFor="keyword">
        Search Jobs
      </InputLabel>
      <Input
        id="keyword"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        endAdornment={<FiltersIcon />}
      />
    </FormControl>
  );
};

const JobSearchBars = () => (
  <Box>
    <Stack>
      <KeywordSearch />
      <LocationSearch />
    </Stack>
  </Box>
);

export default JobSearchBars;
