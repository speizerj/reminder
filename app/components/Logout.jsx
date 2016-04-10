import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {base, firebaseUtils} from '../utils/firebaseUtils';

export class Logout extends Component {
  componentDidMount() {
    base.unauth();
    browserHistory.push('/');
  }
  render() {
    return (
      <div>You have successfully logged out.</div>
    );
  }
}
