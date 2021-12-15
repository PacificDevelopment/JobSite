import React, { useState } from 'react';
import Axios from 'axios';

function LogIn() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [data, setData] = useState(null);
  const login = () => {
    const curPort = location.port;
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: 'http://localhost:3000/login',
    });
  };
  // DO NOT DELETE, SAVE FOR DEV PURPOSES
  /*
  const getUser = () => {
    const curPort = location.port;
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `http://localhost:${curPort}/user`,
    }).then((res) => {
      console.log('gu', res.data);
      setData(res.data);
    });
  };
        <div>
        <h1>Get User(Dev Function)</h1>
        <button type="submit" onClick={getUser}>Submit</button>
        {data ? (
          <h1>
            Welcome Back
            {' '}
            {data.username}
          </h1>
        ) : null}
      </div>
  */
  return (
    <div className="App">

      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button type="submit" onClick={login}>Submit</button>
      </div>
    </div>
  );
}

export default LogIn;
