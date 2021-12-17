import { useState, useEffect } from 'react';
import * as React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function JobFocusItem({ job }) {
  const [description, setDescription] = useState(job?.description || '');

  useEffect(() => {
    axios.get('/data/jobsearchdescription', {
      params: {
        url: job?.url,
      },
    })
      .then((results) => {
        setDescription(results?.data || '');
      })
      .catch((err) => console.error(err));
  });

  if (job) {
    return (
      <Card sx={{ justifyContent: 'center' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {job.company}
          </Typography>
          <Typography variant="h5" component="div">
            {job.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {job.locations}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
          <Typography variant="body2">
            {job.date}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return null;
}

export default JobFocusItem;
