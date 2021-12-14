import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AuthButton from './AuthButton';

import CustomButton from './CustomButton';

function AccountSelection({ createAccount }) {
  function header() {
    if (createAccount) {
      return (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Create an Account</Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>Select your preferred sign in method</Typography>
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
    <Paper
      elevation={9}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, .7)', p: 1, pr: 5, pl: 5,
      }}
    >
      {header()}
      <Box sx={{
        display: 'flex', flexDirection: 'row',
      }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <AuthButton text="Apple" />
          <AuthButton text="Facebook" />
          <AuthButton text="Google" />
        </Box>

        <Box sx={{ mr: 2, ml: 1 }}>
          <Box sx={{ display: 'flex', pt: 2, pb: 2 }}>
            <Box sx={{
              height: 60, width: 1, borderRight: 1,
            }}
            />
            <Box sx={{
              height: 60, width: 1,
            }}
            />
          </Box>
          <Typography sx={{ alignSelf: 'center' }}>OR</Typography>
          <Box sx={{ display: 'flex', pt: 2, pb: 2 }}>
            <Box sx={{
              height: 60, width: 1, borderRight: 1,
            }}
            />
            <Box sx={{
              height: 60, width: 1,
            }}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Paper sx={{ mt: 1 }}>
            <TextField label="Email address" fullWidth />
          </Paper>
          <Paper sx={{ mt: 2, mb: 1 }}>
            <TextField label="Enter password" fullWidth />
          </Paper>
          <CustomButton
            text="Continue with Email"
            styleOverride={{
              width: 300,
              m: 0,
              mt: 1,
              mb: 1,
              p: 2,
              pl: 2,
              justifyContent: 'start',
            }}
            textStyleOverride={{
              fontWeight: 600,
            }}
          />
          {createAccount ? null
            : (
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/SignUp">
                  <Typography variant="caption">
                    Don&apos;t have an account yet? Sign up.
                  </Typography>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/SignUp">
                  <Typography variant="caption">
                    Forgot password?
                  </Typography>
                </Link>
              </Box>
            )}
        </Box>
      </Box>
      {createAccount
        ? (
          <Link
            style={{
              textDecoration: 'none', color: 'black', textAlign: 'center',
            }}
            to="/LogIn"
          >
            <Typography>Already have an account? Sign-In</Typography>
          </Link>
        ) : null}
    </Paper>
  );
}

export default AccountSelection;
