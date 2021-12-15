import React from 'react';
import axios from 'axios';
import PrimaryButton from '../PrimaryButton';

const SaveJobButton = ({job}) => {
  const getUser = () => {
    const curPort = location.port;
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `http://localhost:${curPort}/user`,
    }).then((res) => {
      axios.post('/savejob', {
        data: {
          job: job,
          user: res.data,
      })
    });
  };

  const handleSaveJobClick = (e) => {
    getUser();
  }

  return(
    <PrimaryButton text={'Save Job'} onClick={handleSaveJobClick} />
  )
};

export default SaveJobButton;