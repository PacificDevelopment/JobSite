import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './app/components/SavedJobsList/Main.jsx';

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('app'));
