import React from 'react';
import {Main} from '../components/Main';
import {Home} from '../components/Home';
import {Dashboard} from '../components/Dashboard';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {requireAuth, requireNonAuth} from '../utils/authenticated';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} onEnter={requireNonAuth}/>
      <Route path='/user/:id' component={Dashboard} onEnter={requireAuth}/>
    </Route>
  </Router>
);