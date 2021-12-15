/* eslint-disable */
import { useSearchParams, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { Grid, Button } from '@mui/material';
import axios from 'axios';
import { JobSearchContext } from './JobSearchContext';
<<<<<<< HEAD:src/app/components/SearchJobsList/jobs/SubmitSearchButton.jsx
import { parseSearchInput } from '../../../utils/searchUtils';
=======
import { parseSearchInput } from '../../utils/searchUtils';
import PrimaryButton from '../PrimaryButton';
>>>>>>> main:src/app/components/JobSearch/SubmitSearchButton.jsx

function SubmitSearchButton(props) {
  const [searchParams, setSearchParams] = useSearchParams();
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
