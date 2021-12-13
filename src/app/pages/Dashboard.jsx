import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  useLocation, Link,
} from 'react-router-dom';
import Theme from '../Theme';

const Dashboard = function () {
  const [jobSearch, setJobSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const location = useLocation();

  useEffect(() => {
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
      <Box>
        <form onSubmit={handleSubmit}>
          <Button variant="outline" style={Theme.palette.independence}>Filter</Button>
          <TextField id="job-title" value={jobSearch} onChange={((e) => setJobSearch(e.target.value))} label="Job Title or Keyword" />
          <TextField id="location" value={locationSearch} onChange={((e) => setLocationSearch(e.target.value))} label="Search by Location" />
          <Button type="submit" variant="outline" style={Theme.palette.independence}>
            <Link to={`/dashboard?jobsearch=${jobSearch}&location=${locationSearch}`}>Search</Link>
          </Button>
        </form>
      </Box>
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
};

export default Dashboard;
