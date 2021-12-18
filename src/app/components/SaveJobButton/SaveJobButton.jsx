import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box, Button, Popper, Divider,
} from '@mui/material';
import PrimaryButton from '../PrimaryButton';
import authUtils from '../../utils/authUtils';

function SaveJobButton({
  job, sx, boxXs, index,
}) {
  const [saveStarted, setSaveStarted] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? `job-popper-${index}` : undefined;

  const handleSaveJobClick = async (event) => {
    let isLoggedIn = false;
    handleClick(event);

    await authUtils.getUser().then((res) => {
      isLoggedIn = res.data.loggedIn;
    });
    if (isLoggedIn) {
      setSaveStarted(true);
    } else {
      alert('You must be logged in to save jobs!');
      navigate('/');
    }
  };

  const handleInterestLevelClick = (e) => {
    const data = { job };
    data.job.interest_level = e.target.textContent;
    axios({
      method: 'POST',
      url: '/saveJob',
      withCredentials: true,
      data,
    });
    setSaveStarted(false);
  };

  function displayPopper() {
    return (
      <Box
        xs={boxXs}
        sx={{
          border: 1, p: 1, bgcolor: '#4A485B', display: 'flex', flexDirection: 'column', color: '#white',
        }}
      >
        <Button variant="text" sx={[{ textTransform: 'none' }, sx]} onClick={handleInterestLevelClick}>Interested</Button>
        <Divider sx={{ backgroundColor: 'white' }} />
        <Button
          variant="text"
          sx={[{ textTransform: 'none' }, sx]}
          onClick={handleInterestLevelClick}
        >
          Very Interested
        </Button>
        <Divider sx={{ backgroundColor: 'white' }} />
        <Button variant="text" sx={[{ textTransform: 'none' }, sx]} onClick={handleInterestLevelClick}>Extremely Interested</Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button
        aria-describedby={id}
        onClick={handleSaveJobClick}
        variant="contained"
        color="secondary"
        sx={[{
          textTransform: 'none', p: 1, pr: 5, pl: 5, mt: 2, mb: 2,
        }, sx]}
      >
        Save Job
      </Button>
      <Popper id={id} open={open} placement="top" anchorEl={anchorEl} style={{ zIndex: 10 }}>
        {saveStarted ? displayPopper() : null}
      </Popper>
    </Box>
  );
}

export default SaveJobButton;
