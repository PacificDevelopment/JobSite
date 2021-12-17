import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import authUtils from '../../utils/authUtils';

function SaveJobButton({ job, sx }) {
  const [saveStarted, setSaveStarted] = useState(false);
  const navigate = useNavigate();

  const handleSaveJobClick = async () => {
    let isLoggedIn = false;
    await authUtils.getUser().then((res) => {
      isLoggedIn = res.data.loggedIn;
    });
    isLoggedIn ? setSaveStarted(true)
      : alert('You must be logged in to save jobs!'),
    navigate('/');
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

  return (
    <Box>
      { saveStarted
        ? (
          <Box>
            <SecondaryButton text="Interested" sx={sx} onClick={handleInterestLevelClick} />
            <SecondaryButton text="Very Interested" sx={sx} onClick={handleInterestLevelClick} />
            <SecondaryButton text="Extremely Interested" sx={sx} onClick={handleInterestLevelClick} />
          </Box>
        )
        : null}
      <PrimaryButton text="Save Job" sx={sx} onClick={handleSaveJobClick} />
    </Box>
  );
}

export default SaveJobButton;
