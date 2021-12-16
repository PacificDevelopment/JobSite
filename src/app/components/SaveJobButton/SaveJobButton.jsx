import React, { useState } from 'react';
import axios from 'axios';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

function SaveJobButton({ job }) {
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
    <div>
      { saveStarted
        ? (
          <div>
            <SecondaryButton text="Interested" onClick={handleInterestLevelClick} />
            <SecondaryButton text="Very Interested" onClick={handleInterestLevelClick} />
            <SecondaryButton text="Extremely Interested" onClick={handleInterestLevelClick} />
          </div>
        )
        : null}
      <PrimaryButton text="Save Job" onClick={handleSaveJobClick} />
    </div>
  );
}

export default SaveJobButton;
