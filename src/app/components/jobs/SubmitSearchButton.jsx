import { useSearchParams, useLocation } from 'react-router-dom';
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
    salary,
    location,
    keywords,
    // datePosted,
    employmentType,
  } = useContext(JobSearchContext);

  const submitSearch = () => {
    // integrate page into URL, useLocation to add pagination to QS
    // search default size
    let query = [];
    (keywords) && (query.push(keywords));
    (location) && (query.push(location));
    (range) && (query.push(range));
    (sort) && (query.push(sort));

    let queryString = query.join('&')
    console.log(queryString)

    axios.get(`/data/jobs/?${queryString}`)

  }

  return (
    <Button
      {...{ props }}
      fullWidth
      sx={{background: 'blue'}}
      onClick={submitSearch}
    >
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
