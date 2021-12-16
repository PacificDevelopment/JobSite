import React, { useState, useEffect } from 'react';
import axios from 'axios';

const authUtils = {
  getUser: () => {
    const curPort = location.port;
    return axios({
      method: 'GET',
      withCredentials: true,
      url: `http://localhost:${curPort}/user`,
    });
  },
};

export default authUtils;
