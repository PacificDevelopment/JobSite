import { useSearchParams } from 'react-router-dom';
import {parseSearchInput} from '../../utils/searchUtils'
import React, { useContext } from 'react';
import { Button } from "@mui/material";
import { JobSearchContext } from './JobSearchContext';
import axios from 'axios'

const SubmitSearchButton = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();

  let {
    range,
    sort,
    drawer,
    salary,
    location,
    keywords,
    // datePosted,
    employmentType,
  } = useContext(JobSearchContext);

  let queryString = '';
  (keywords) && (queryString += keywords);
  (location) && (queryString += location);
  (range) && (queryString += range);

  console.log(queryString)


  return (
    <Button {...{ props }} fullWidth sx={{background: 'blue'}}>
      Submit Search
    </Button>
  )
}

export default SubmitSearchButton;

// log all variables,
// chek if truthy,
// if truthy, construct query string
// send post request to backend

// let {
// keywords,
// location,
// sort,
// radius,
// contracttype, //f or 'p' or omitted
// contractperiod, //i or t or omitted
// } = req.query // from API

