/* eslint-disable */
import React from 'react';
import {
  Box, Button, Typography, Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Theme from '../Theme';
import ResumeAndCoverLetter from '../components/FileUpload/FileViewAndUpload';
import UploadAvatar from '../components/Profile/UploadAvatar';
import ProfileCard from '../components/Profile/ProfileCard';

function Profile() {
  return (
    <Box>
      <Box>

        <ProfileCard />
      </Box>
      <Box>
        <ResumeAndCoverLetter
          orientation={'vertical'}
          direction='row'
        />
      </Box>
      <Box>
      </Box>
      <Button variant="outlined" style={Theme.palette.independence}>Calendar</Button>
      <Button variant="outlined" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">View Jobs</Link></Button>
      <Button variant="outlined" style={Theme.palette.independence}>Reset Password</Button>

    </Box>
  );
}

export default Profile;
