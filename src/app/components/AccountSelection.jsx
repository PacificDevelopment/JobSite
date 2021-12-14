import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import AuthButton from './AuthButton';
import CustomButton from './CustomButton';

function AccountSelection({ createAccount }) {
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
      <Box style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
      }}
      >
        <Box>
          <TextField id="job-title" label="Job Title or Keyword" />
          <TextField id="location" label="Search by Location" />
        </Box>

        <CustomButton text="Find Jobs" />

        <Link style={{ textDecoration: 'none', color: 'black' }} to="/LogIn">Been here before?</Link>
      </Box>
    );
  }
  return (
    <Paper elevation={9} sx={{ backgroundColor: 'rgba(255, 255, 255, .7)', padding: 5 }}>
      {header()}
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <AuthButton text="Apple" />
          <AuthButton text="Facebook" />
          <AuthButton text="Google" />
        </Box>

        <p>OR</p>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField id="job-title" label="Email address" />
          <TextField id="location" label="Enter password" />
          <CustomButton
            text="Continue with Email"
            styleOverride={{
              width: 400,
              m: 0,
              mt: 1,
              mb: 1,
              pl: 2,
              justifyContent: 'start',
            }}
            textStyleOverride={{
              fontWeight: 600,
            }}
          />
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
    </Paper>
  );
}

export default AccountSelection;
