import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  useLocation,
} from 'react-router-dom';
import JobSearch from '../components/JobSearch/JobSearch';

function Dashboard() {
  const [jobSearch, setJobSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    const url = new URLSearchParams(location.search);
    if (url.has('jobsearch')) {
      setJobSearch(url.get('jobsearch'));
    }
    if (url.has('location')) {
      setLocationSearch(url.get('location'));
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Box>
      <JobSearch />

      <h1>Employers: Post a job here</h1>
      <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box>
          <p>JobCard</p>
          <p>JobCard</p>
          <p>JobCard</p>
          <p>JobCard</p>
          <p>JobCard</p>
        </Box>
        <Box>
          SelectedJob
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
