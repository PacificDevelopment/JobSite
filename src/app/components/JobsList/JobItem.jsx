import { useState, useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SaveJobButton from '../SaveJobButton/SaveJobButton';
import OneClickApplyButton from '../OneClickApplyButton/OneClickApplyButton';
import PrimaryButton from '../PrimaryButton';

const JobItem = (props) => {
  const [displayToggle, setDisplayToggle] = useState(true);

  const jobSelect = (selectedJob) => {
    props.handleFocus(selectedJob)

  }

  // useEffect(() => {
  //   if (displayToggle) {
  //     props.handleFocus(props.job);
  //     setDisplayToggle(false);
  //   }
  // }, []);

  return (
    <Card >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.job.company}
        </Typography>
        <Typography variant="h5" component="div">
          {props.job.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.job.locations}
        </Typography>
        <Typography variant="body2">
          {props.job.description}
          <br />
          {props.job.date}
        </Typography>
      </CardContent>
      <CardActions>
        <PrimaryButton text="Learn More" onClick={(e) => { jobSelect(props.job) }} />
        <SaveJobButton job={props.job} />
        <OneClickApplyButton job={props.job} />
      </CardActions>
    </Card>
  )
}

export default JobItem;