import React from 'react';
import axios from 'axios';
import PrimaryButton from '../PrimaryButton';

function OneClickApplyButton({ job, refreshJobs }) {
  const handleOneClick = () => {
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

  return (
    <PrimaryButton text="One Click Apply" onClick={handleOneClick} />
  );
}

export default OneClickApplyButton;
