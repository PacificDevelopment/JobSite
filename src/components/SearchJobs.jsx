import React from 'react';
import { FormControl } from '@mui/material';


const SearchJobs = (props) => {
  return (
    <FormControl>
      {props.children}
    </FormControl>
  );
};


export default SearchJobs;