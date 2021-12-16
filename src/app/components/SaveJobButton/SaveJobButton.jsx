import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

function SaveJobButton({ job, sx }) {
  const [saveStarted, setSaveStarted] = useState(false);

  const handleSaveJobClick = () => {
    setSaveStarted(true);
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
