/*eslint-disable*/
import React, { useContext, useState } from 'react';
import {
  Box, Stack, FormControl, InputLabel, Input, InputAdornment,
} from '@mui/material';
import { parseSearchInput } from '../../utils/searchUtils'
import { LocationOn, LocationOff, Tune } from '@mui/icons-material';
import { JobSearchContext } from './JobSearchContext';

export const LocationSearch = () => {
  const [anywhere, setAnywhere] = useState(false);
  const { location, setLocation } = useContext(JobSearchContext);
  const label = anywhere ? 'Anywhere' : 'Search Location';

  const LocationSearchIcon = () => {
    const icon = anywhere ? <LocationOff /> : <LocationOn sx={{ color: 'red' }} />;

    return (
      <InputAdornment
        position="end"
        onClick={() => setAnywhere(!anywhere)}
      >
        {icon}
      </InputAdornment>
    );
  };

  let handleLocationInput = (e) => setLocation(parseSearchInput(e, 'location'))

  return (

    <FormControl variant="outlined" disabled={!!anywhere}>
      <InputLabel htmlFor="location">{label}</InputLabel>
      <Input
        id="location"
        onFocus={() => setAnywhere(false)}
        onChange={handleLocationInput}
        // onChange={(e) => setLocation(`location=${e.target.value}`)}
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

  let handleKeywordsInput = (e) => setKeywords(parseSearchInput(e, 'keywords'))

  return (
    <FormControl>
      <InputLabel htmlFor="keywords">
        Search Jobs
      </InputLabel>
      <Input
        id="keywords"
        onChange={handleKeywordsInput}
        endAdornment={<FiltersIcon />}
      />
    </FormControl>
  );
};

const JobSearchBars = () => (
  <>
    <KeywordSearch />
    <LocationSearch />
  </>
);

export default JobSearchBars;
