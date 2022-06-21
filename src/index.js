import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('./styles/index.css');
require('./styles/App.css');
require('./styles/Project.css');
require('./styles/About.css');
require('./styles/Navbar.css');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
