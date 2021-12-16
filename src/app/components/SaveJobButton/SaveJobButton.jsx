import React from 'react';
import axios from 'axios';
import PrimaryButton from '../PrimaryButton';

const SaveJobButton = ({job}) => {
  const handleSaveJobClick = (e) => {
    axios({
      method: 'POST',
      url: '/saveJob',
      withCredentials:true,
      data: {
        job: job,
      },
    })
  }

  return(
    <PrimaryButton text={'Save Job'} onClick={handleSaveJobClick} />
  );
};

export default SaveJobButton;
