import React, { useState } from 'react';
import {
  Box, Paper, Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import AuthButton from './AuthButton';
import JobSearch from '../JobSearch/JobSearch';

import PrimaryButton from '../PrimaryButton';

function AccountSelection({ createAccount, newLogIn }) {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const register = () => {
    const curPort = location.port;
    Axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: 'http://localhost:3000/register',
    });
  };

  const login = () => {
    const curPort = location.port;
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: 'http://localhost:3000/login',
    }).then(() => newLogIn());
  };

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
      <JobSearch context="Home" />
    );
  }
  return (
    <Paper
      elevation={9}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, .7)', p: 2, pr: 5, pl: 5, m: 3,
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
            <TextField
              label="Email address"
              sx={{ '&.Mui-focused': { color: '#4A485B', fontWeight: 700 } }}
              fullWidth
              onChange={createAccount
                ? (e) => setRegisterUsername(e.target.value)
                : (e) => setLoginUsername(e.target.value)}
            />
          </Paper>
          <Paper sx={{ mt: 2, mb: 1 }}>
            <TextField
              label="Enter password"
              fullWidth
              sx={{ '&.Mui-focused': { color: '#4A485B', fontWeight: 700 } }}
              onChange={createAccount
                ? (e) => setRegisterPassword(e.target.value)
                : (e) => setLoginPassword(e.target.value)}
            />
          </Paper>
          <PrimaryButton
            text="Continue with Email"
            onClick={createAccount ? register : login}
            sx={{
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
