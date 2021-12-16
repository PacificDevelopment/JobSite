import React from 'react';
import { Box, Button, Input, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Theme from '../Theme';
import FileViewAndUpload from '../components/FileUpload/FileViewAndUpload';

function Profile() {
  return (
    <Box>
      <Box style={{ borderWidth: 1, borderColor: 'black' }}>
        <h1>Profile Picture Placeholder</h1>
        <span>FirstName LastName</span>
        <span>City, State</span>
        <Button variant="outlined" style={Theme.palette.independence}>Edit</Button>
      </Box>
      <hr />
      <Box>
        <Typography variant='h5'>Resume</Typography>
        <FileViewAndUpload fileUse='resume'/>
      </Box>
      <hr/>
      <Box>
        <Typography variant='h5'>Cover Letter</Typography>
        <FileViewAndUpload fileUse='cover_letter'/>
      </Box>
      <hr/>
      <Box>
        <h1>Contact Information Placeholder</h1>
        <Button variant="outlined" style={Theme.palette.independence}>Edit</Button>
        <span>FirstName LastName</span>
        <span>Email</span>
        <span>PhoneNumber</span>
        <span>Address</span>
        <span>City, State, Zip</span>
      </Box>
      <Button variant="outlined" style={Theme.palette.independence}>Calendar</Button>
      <Button variant="outlined" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">View Jobs</Link></Button>
      <Button variant="outlined" style={Theme.palette.independence}>Reset Password</Button>
    </Box>
  );
}

export default Profile;
