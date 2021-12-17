import * as React from 'react';
import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import ta from 'time-ago';
import Interweave from 'interweave';
import OneClickApplyButton from '../OneClickApplyButton/OneClickApplyButton';

function UserJobItem({ job, refreshJobs }) {
  return (
    <Card
      elevation={9}
      sx={{
        m: 2, maxWidth: 900, mt: 4, backgroundColor: '#EDFEFF',
      }}
    >
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
        {/* <Typography sx={{ mb: 2.0 }} color="text.secondary">
          {job.interest_level}
        </Typography> */}
        <Typography variant="body2">
          <Interweave content={job.description} />
        </Typography>
        <Typography variant="body2">
          {ta.ago(job.date)}
        </Typography>
      </CardContent>
      <CardActions>
        <OneClickApplyButton job={job} refreshJobs={refreshJobs}/>
      </CardActions>
    </Card>
  );
}

export default UserJobItem;
