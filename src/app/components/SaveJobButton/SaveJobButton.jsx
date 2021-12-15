import React from 'react';
import axios from 'axios';
import PrimaryButton from '../PrimaryButton';

const SaveJobButton = ({job}) => {
  const handleSaveJobClick = (e) => {
    axios.post('/savejob', {
      data: job,
    })
  }
  return(
    <PrimaryButton text={'Save Job'} onClick={handleSaveJobClick} />
  )
};

export default SaveJobButton;