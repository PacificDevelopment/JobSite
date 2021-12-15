/* eslint-disable */
import { useSearchParams, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import { JobSearchContext } from './JobSearchContext';
import { parseSearchInput } from '../../utils/searchUtils';
import CustomButton from '../CustomButton'

function SubmitSearchButton(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    range,
    sort,
    location,
    keywords,
    employmentType,
    experience,
  } = useContext(JobSearchContext);

  const submitSearch = () => {
    // integrate page into URL, useLocation to add pagination to QS
    // search default size
    const query = [];
    (sort) && (query.push(sort));
    (range) && (query.push(range));
    (keywords) && (query.push(keywords));
    (location) && (query.push(location));
    (experience) && (query.push(experience));
    (employmentType) && (query.push(employmentType));

    const queryString = query.join('&');
    console.log(queryString);

    axios.get(`http://localhost:3000/data/jobsearch?${queryString}`);
  };

  return (
    <CustomButton
      fullWidth
      onClick={submitSearch}
      text='Find Jobs'
    >
    </CustomButton>
  );
}

export default SubmitSearchButton;
