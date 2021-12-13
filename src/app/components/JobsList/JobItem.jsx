import { useState, useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const JobItem = (props) => {
  const [displayToggle, setToggle] = useState(true);

  const jobSelect = (selectedJob) => {
    props.handleFocus(selectedJob)
    console.log('what is up yall', selectedJob);
  }
  useEffect(() => {
    console.log('useEffect in jobItem');
    if (displayToggle) {
      props.handleFocus(props.job);
      setToggle(false);
    }

  },[]);

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
        <CardActions>
        <Button size="small" onClick={(e) => {jobSelect(props.job)}}>Learn More</Button>
        </CardActions>

        </CardContent>
      </Card>

    )
}

export default JobItem;