import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box, Button, Popper,
} from '@mui/material';
import SecondaryButton from '../SecondaryButton';
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
      <Box xs={boxXs}>
        <SecondaryButton text="Interested" sx={sx} onClick={handleInterestLevelClick} />
        <SecondaryButton text="Very Interested" sx={sx} onClick={handleInterestLevelClick} />
        <SecondaryButton text="Extremely Interested" sx={sx} onClick={handleInterestLevelClick} />
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
      <Popper id={id} open={open} anchorEl={anchorEl} style={{ zIndex: 10 }}>
        {saveStarted ? displayPopper() : null}
      </Popper>
    </Box>
  );
}

export default SaveJobButton;
