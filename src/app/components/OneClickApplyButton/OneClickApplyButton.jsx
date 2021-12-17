import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../PrimaryButton';

function OneClickApplyButton({ job, refreshJobs }) {
  const [safeToApply, setSaveToApply] = useState(false);
  const [applyNotifyAnchor, setApplyNotifyAnchor] = useState(null);
  const [currentTarget, setCurrentTarget] = useState({});

  const handleOneClick = (e) => {
    setCurrentTarget(e.currentTarget);
    axios.get('/data/getPDF/resume_pdf')
      .then((result) => {
        if (result.data === '') {
          alert('Please upload a resume to one click apply, instead Save this job for later.');
        } else {
          setSaveToApply(true);
        }
      });
  };

  const handleClose = () => {
    setApplyNotifyAnchor(null);
  };
  const open = Boolean(applyNotifyAnchor);
  const popId = open ? 'simple-popover' : undefined;

  useEffect(() => {
    const applyToJob = () => {
      const data = { job };
      setApplyNotifyAnchor(currentTarget);
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
    if (safeToApply) {
      applyToJob();
    }
  }, [safeToApply]);

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
