import { useState, useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import SaveJobButton from '../SaveJobButton/SaveJobButton';
import PrimaryButton from '../PrimaryButton';

function JobItem({ handleFocus, job }) {
  const [displayToggle, setDisplayToggle] = useState(true);

  const jobSelect = (selectedJob) => {
    handleFocus(selectedJob);
  };

  // useEffect(() => {
  //   if (displayToggle) {
  //     props.handleFocus(job);
  //     setDisplayToggle(false);
  //   }
  // }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2, position: 'relative', width: 450, p: 2, backgroundColor: '#EDFEFF',
      }}
    >
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
        {job.description}
        <br />
        {job.date}
      </Typography>
      <PrimaryButton text="Learn More" onClick={(e) => { jobSelect(job); }} />
      <SaveJobButton job={job} />
    </Card>
  );
}

export default JobItem;
