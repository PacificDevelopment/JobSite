import React, { useState } from 'react';
import Axios from 'axios';

const LogIn = function () {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [data, setData] = useState(null);
  const login = () => {
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: 'http://localhost:3000/login',
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:3000/user',
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
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

      <div>
        <h1>Get User</h1>
        <button type="submit" onClick={getUser}>Submit</button>
        {data ? (
          <h1>
            Welcome Back
            {' '}
            {data.username}
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default LogIn;
