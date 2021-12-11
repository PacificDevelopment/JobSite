import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Home, Dashboard, LogIn, SignUp, Jobs, Profile } from './pages';

export default function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/signup' element={<SignUp />} exact />
          <Route path='/login' element={<LogIn />} exact />
          <Route path='/dashboard' element={<Dashboard />} exact />
          <Route path='/profile' element={<Profile />} exact />
          <Route path='/jobs' element={<Jobs />} exact />
        </Routes>
      </div>
  );
}