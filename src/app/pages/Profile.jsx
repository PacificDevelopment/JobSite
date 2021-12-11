import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Theme from '../Theme';

export function Profile() {
  return (
    <Box>
      <Box style={{borderWidth: 1, borderColor: 'black'}}>
        <h1>Profile Picture Placeholder</h1>
        <span>FirstName LastName</span>
        <span>City, State</span>
        <Button variant="outlined" style={Theme.palette.independence}>Edit</Button>
      </Box>
      <Box>
        <h1>Resume Placeholder</h1>
        <Button variant="outlined" style={Theme.palette.independence}>Edit</Button>
        <span>My Resume</span>
        <span>Updated [date]</span>
        <Button variant="outlined" style={Theme.palette.independence}>Download .doc</Button>
        <Button variant="outlined" style={Theme.palette.independence}>Download .pdf</Button>
      </Box>
      <Box>
        <h1>My Cover Letter Placeholder</h1>
        <Button variant="outlined" style={Theme.palette.independence}>Edit</Button>
        <span>My Resume</span>
        <span>Updated [date]</span>
        <Button variant="outlined" style={Theme.palette.independence}>Download .doc</Button>
        <Button variant="outlined" style={Theme.palette.independence}>Download .pdf</Button>
      </Box>
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
      <Button variant="outlined" style={Theme.palette.independence}><Link style={{ textDecoration: 'none', color: 'white'}} to="/dashboard">View Jobs</Link></Button>
      <Button variant="outlined" style={Theme.palette.independence}>Reset Password</Button>
    </Box>
  )
}