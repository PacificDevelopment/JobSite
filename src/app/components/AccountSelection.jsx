import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const AccountSelection = function ({ createAccount }) {
  function header() {
    if (createAccount) {
      return (
        <Box>
          <h1>Create an Account</h1>
          <h3>Select your preferred sign in method</h3>
        </Box>
      );
    }
    return (
      <Box>
        <Box>
          <TextField id="job-title" label="Job Title or Keyword" />
          <TextField id="location" label="Search by Location" />
        </Box>

        <Button variant="contained">Find Jobs</Button>

        <Link style={{ textDecoration: 'none', color: 'black' }} to="/LogIn">Been here before?</Link>
      </Box>
    );
  }
  return (
    <Box sx={{ margin: 20, display: 'flex', flexDirection: 'column' }}>
      {header()}
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Button sx={{ backgroundColor: 'black', color: 'white' }}>Continue with Apple</Button>
          <Button sx={{ backgroundColor: '#3b5998', color: 'white' }}>Continue with Facebook</Button>
          <Button sx={{ backgroundColor: 'white', color: 'black' }}>Continue with Google</Button>
        </Box>

        <p>OR</p>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField id="job-title" label="Email address" />
          <TextField id="location" label="Enter password" />
          <Button variant="contained">Continue with Email</Button>
          {createAccount ? null
            : (
              <Box>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/SignUp">Don&apos;t have an account yet? Sign up.</Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/SignUp">Forgot password?</Link>
              </Box>
            )}
        </Box>
      </Box>
      {createAccount ? <Link style={{ textDecoration: 'none', color: 'black' }} to="/LogIn">Already have an account? Sign-In</Link> : null}
    </Box>
  );
};

export default AccountSelection;
