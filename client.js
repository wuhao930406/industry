import React from 'react';
import ReactDOM from 'react-dom';

import Login from './views/auth/Login';

// Import data
// import data from './data.json';
// Import stylesheet
// import scss from './styles/style.scss';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Login />,
  MOUNT_NODE,
);
