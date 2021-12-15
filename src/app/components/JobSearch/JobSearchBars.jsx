/*eslint-disable*/
import React, { useContext, useState } from 'react';
import {
  Box, Stack, FormControl, InputLabel, Input, InputAdornment,
} from '@mui/material';
import { parseSearchInput } from '../../../utils/searchUtils'
import { LocationOn, LocationOff, Tune } from '@mui/icons-material';
import { JobSearchContext } from './JobSearchContext';

export const LocationSearch = () => {
  const [anywhere, setAnywhere] = useState(false);
  const { location, setLocation } = useContext(JobSearchContext);
  const label = anywhere ? 'Anywhere' : 'Search Location';

  const LocationSearchIcon = () => {
    const icon = anywhere ? <LocationOff /> : <LocationOn sx={{color: '#85CDD2'}} />;

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
      <InputLabel color="secondary" htmlFor="location">{label}</InputLabel>
      <Input
        color="secondary"
        id="location"
        onFocus={() => setAnywhere(false)}
        onChange={handleLocationInput}
        endAdornment={[<LocationSearchIcon />]}
      />
    </FormControl>
  );
};

export const KeywordSearch = ({sx}) => {
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
    <FormControl sx={sx}>
      <InputLabel color="secondary" htmlFor="keywords">
        Search Jobs
      </InputLabel>
      <Input
        color="secondary"
        id="keywords"
        onChange={handleKeywordsInput}
        endAdornment={<FiltersIcon />}
      />
    </FormControl>
  );
};

const JobSearchBars = (props) => (
  <Stack sx={{m:1, p:1}}>
    <KeywordSearch sx={{mb: 1}} />
    <LocationSearch />
    {props.children}
  </Stack>
);

export default JobSearchBars;
