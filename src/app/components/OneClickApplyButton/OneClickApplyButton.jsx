import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryButton from '../PrimaryButton';

function OneClickApplyButton({ job, refreshJobs }) {
  const [safeToApply, setSaveToApply] = useState(false);

  const handleOneClick = () => {
    // check if resume exists
    axios.get('/data/getPDF/resume')
      .then((result) => {
        if (result.data === '') {
          // Send Alert (Need to upload resume, can only save jobs for now)
          alert('Please upload a resume to one click apply, instead Save this job for later.');
        } else {
          setSaveToApply(true);
        }
      });
  };

  useEffect(() => {
    const applyToJob = () => {
      const data = { job };
      axios({
        method: 'POST',
        url: '/applyToJob',
        withCredentials: true,
        data,
      })
        .then(() => {
          if (refreshJobs) {
            refreshJobs(data.interest_level);
          }
        });
    };
    if (safeToApply) {
      applyToJob();
    }
  }, [safeToApply]);

  return (
    <PrimaryButton text="One Click Apply" onClick={handleOneClick} />
  );
}

export default OneClickApplyButton;
