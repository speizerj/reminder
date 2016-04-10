import React from 'react';
import {Main} from '../components/Main';
import {Home} from '../components/Home';
import {Dashboard} from '../components/Dashboard/Dashboard';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {requireAuth, requireNonAuth} from '../utils/authenticated';
import {Logout} from '../components/Logout';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} onEnter={requireNonAuth} />
      <Route path='/dashboard' component={Dashboard} onEnter={requireAuth} />
      <Route path='/logout' component={Logout} onEnter={requireAuth} />
    </Route>
  </Router>
);