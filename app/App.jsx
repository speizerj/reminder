import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './config/routes';

ReactDOM.render(
  routes,
  document.getElementById('app')
);