/* eslint-disable */
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import axios from 'axios';
import { JobSearchContext } from './JobSearchContext';
import { parseSearchInput } from '../../utils/searchUtils';
import PrimaryButton from '../PrimaryButton';


function SubmitSearchButton({setSearchResults}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const locationHook = useLocation();
  const {
    range,
    sort,
    keywords,
    location,
    experience,
    employmentType,
  } = useContext(JobSearchContext);

  const submitSearch = () => {
    // integrate page into URL, useLocation to add pagination to QS
    // search default size
    const query = [];
    (keywords) && (query.push(keywords));
    (location) && (query.push(location));
    (sort) && (query.push(sort));
    (range) && (query.push(range));
    (experience) && (query.push(experience));
    (employmentType) && (query.push(employmentType));

    const queryString = query.join('&');
    navigate(`${locationHook.pathname}?${queryString}`)
    axios.get(`http://localhost:3000/data/jobsearch?${queryString}`)
      .then((results) => {
        setSearchResults(results.data);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/data/jobsearch${locationHook.search}`)
      .then((results) => {
        setSearchResults(results.data);
      });
  }, [])

  return (
    <PrimaryButton
      onClick={submitSearch}
      text="Find Jobs"
    />
  );
}

export default SubmitSearchButton;





// export default function PrimaryButton({
//   text, onClick, styleOverride, textStyleOverride, fullWidth,
// }) {
//   return (
//     <Button
//       fullWidth={fullWidth}
//       variant="contained"
//       color="secondary"
//       onClick={onClick}
//       sx={[{
//         textTransform: 'none', p: 1, pr: 5, pl: 5, m: 2,
//       }, styleOverride]}
//     >
//       <Typography sx={[textStyleOverride]}>{text}</Typography>
//     </Button>
//   );
// }
