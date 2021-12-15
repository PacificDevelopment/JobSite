import *  as React from 'react';
import { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import JobsSearch from "../jobs/JobSearch.jsx";

import Main from "../JobsList/Main.jsx";

const SearchJobsList () => {

  return(
    <JobSearch/>
    <Main/>

  )
}

export default SearchJobsList;