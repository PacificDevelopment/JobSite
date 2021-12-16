import React, { useState } from 'react';
import axios from 'axios';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

const SaveJobButton = ({job}) => {
  const [saveStarted, setSaveStarted] = useState(false);

  const handleSaveJobClick = (e) => {
    setSaveStarted(true);
  }

  const handleInterestLevelClick = (e) => {
    job.interest_level = e.target.textContent;
    axios({
      method: 'POST',
      url: '/saveJob',
      withCredentials:true,
      data: {
        job: job,
      },
    })
    setSaveStarted(false);
  }

  return (
    <div>
      { saveStarted
        ? (
            <div>
              <SecondaryButton text={'Interested'} onClick={handleInterestLevelClick} />
              <SecondaryButton text={'Very Interested'} onClick={handleInterestLevelClick} />
              <SecondaryButton text={'Extremely Interested'} onClick={handleInterestLevelClick} />
            </div>
          )
        : null
      }
      <PrimaryButton text={'Save Job'} onClick={handleSaveJobClick} />
    </div>
  );
};

export default SaveJobButton;
