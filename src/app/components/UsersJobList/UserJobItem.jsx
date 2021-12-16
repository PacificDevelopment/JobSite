import { useState, useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../PrimaryButton';

const UserJobItem = ({job}) => {
  return (
    <Card >
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
        <Typography sx={{ mb: 2.0 }} color="text.secondary">
          {job.interest_level}
        </Typography>
        <Typography variant="body2">
          {job.description}
          <br />
          {job.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Apply</Button>
      </CardActions>
    </Card>
  )
}

export default UserJobItem;