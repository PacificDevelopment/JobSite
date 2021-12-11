import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useWindowSize } from '../utils/customHooks';

export function Home() {
  const { width, height } = useWindowSize()

  if (width < 800) { //mobile rendering
    return (
      <div>
        <h1>
          Mobile Home Screen Placeholder
        </h1>
      </div>
    )
  } else { //desktop rendering
    return (
      <div>
        <div className='hero' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Box sx={{margin: 20, display: 'flex', flexDirection: 'column'}}>

            <Box>
              <TextField id="job-title" label="Job Title or Keyword" />
              <TextField id="location" label="Search by Location" />
            </Box>

            <Button variant="contained">Find Jobs</Button>

            <Link style={{ textDecoration: 'none', color: 'black'}} to="/LogIn">Been here before?</Link>

            <Box sx={{display: 'flex', flexDirection: 'row'}}>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Button sx={{backgroundColor: 'black', color: 'white'}}>Continue with Apple</Button>
                <Button sx={{backgroundColor: '#3b5998', color: 'white'}}>Continue with Facebook</Button>
                <Button sx={{backgroundColor: 'white', color: 'black'}}>Continue with Google</Button>
              </Box>

              <p>OR</p>

              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <TextField id="job-title" label="Email address" />
                <TextField id="location" label="Enter password" />
                <Button variant="contained">Continue with Email</Button>
                <Box>
                <Link style={{ textDecoration: 'none', color: 'black'}} to="/SignUp">Don't have an account yet? Sign up.</Link>
                <Link style={{ textDecoration: 'none', color: 'black'}} to="/SignUp">Forgot password?</Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>

        <Box>
          <h1>How JobSite Works</h1>
          <Button variant="contained">Find Jobs</Button>
          <Button variant="contained">Organize Your Search</Button>
          <Button variant="contained">Apply In One Click</Button>
          <Button variant="contained">Keep Track Of Interviews</Button>
        </Box>
      </div>
    )
  }
}