import { useState, useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const JobFocusItem = (props) => {
   if (props.job){
      return (
      <Card sx={{ justifyContent: 'center' }}>
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
      </Card>
    )} else {
      return (
        <div>Hello</div>
      )
    }
}

export default JobFocusItem;