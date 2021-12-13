// REPLACE WITH POSTGRES POOL QUERY

// const mongoose = require('mongoose');

const user = () => {
  console.log('User  was called');
  return {
    username: 'test',
    password: 'test',
  };
};

module.exports = user;
