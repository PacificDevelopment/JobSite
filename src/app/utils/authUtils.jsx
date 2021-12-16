import React, { useState, useEffect } from 'react';
import axios from 'axios';

const authUtils = {
  getUser: () => {
    const curPort = location.port;
    axios({
      method: 'GET',
      withCredentials: true,
      url: `http://localhost:${curPort}/user`,
    });
  },

  PrivateRoute: ({ children }, loggedIn) => {
    const auth = loggedIn;
    return auth ? children : <Navigate to="/login" />;
  },
};

export default authUtils;
