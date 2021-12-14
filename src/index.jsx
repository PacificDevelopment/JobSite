import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './app/App';
import Main from './app/components/JobsList/Main.jsx';
// import Main from './app/components/SavedJobsList/Main.jsx';

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('app'));
