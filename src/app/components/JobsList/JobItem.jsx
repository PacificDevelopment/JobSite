import React, { useState, useEffect } from 'react';
import { Card, Box, Typography } from '@mui/material';
import Interweave from 'interweave';
import ta from 'time-ago';
import SaveJobButton from '../SaveJobButton/SaveJobButton';
import PrimaryButton from '../PrimaryButton';

function JobItem({ handleFocus, job, selected }) {
  const [displayToggle, setDisplayToggle] = useState(true);

  const jobSelect = (selectedJob) => {
    handleFocus(selectedJob);
  };

  useEffect(() => {
    console.log('selected', selected);
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2, position: 'relative', width: 450, p: 2, backgroundColor: '#EDFEFF', borderColor: '#9096A3', borderRadius: 2, borderWidth: selected ? 3 : 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
    >
      <Typography sx={{ mb: 1 }} variant="h5" component="div">
        {job.title}
      </Typography>
      <Typography sx={{ fontSize: 14, mb: 1, fontWeight: 700 }} color="text.primary" gutterBottom>
        {job.company}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {job.locations}
      </Typography>
      <Typography variant="body2">
        <Interweave content={job.description} />
      </Typography>
      <Box sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 4,
      }}
      >
        <Typography>
          {ta.ago(job.date)}
        </Typography>
        <PrimaryButton sx={{ mb: 0, mt: 0 }} text="Learn More" onClick={(e) => { jobSelect(job); }} />
        <SaveJobButton sx={{ mb: 0, mt: 0 }} job={job} />
      </Box>
    </Card>
  );
}

export default JobItem;
