import React, { useState } from 'react';
import axios from 'axios';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../PrimaryButton';

function OneClickApplyButton({ job, refreshJobs }) {
  const [applyNotifyAnchor, setApplyNotifyAnchor] = useState(null);
  const handleOneClick = (e) => {
    const data = { job };
    setApplyNotifyAnchor(e.currentTarget);
    axios({
      method: 'POST',
      url: '/applyToJob',
      withCredentials: true,
      data,
    })
      .then(() => {
        if (refreshJobs) {
          setTimeout(() => refreshJobs(data.interest_level), 1000);
        } else {
          setTimeout(() => setApplyNotifyAnchor(null), 1000);
        }
      });
  };
  const handleClose = () => {
    setApplyNotifyAnchor(null);
  };
  const open = Boolean(applyNotifyAnchor);
  const popId = open ? 'simple-popover' : undefined;

  return (
    <>
      <PrimaryButton text="One Click Apply" onClick={handleOneClick} />
      <Popover
        id={popId}
        open={open}
        anchorEl={applyNotifyAnchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>Applied!</Typography>
      </Popover>
    </>
  );
}

export default OneClickApplyButton;
