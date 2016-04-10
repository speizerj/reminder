import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import fb from '../utils/firebaseUtils';

export class Logout extends Component {
  componentDidMount() {
    fb.unauth();
    browserHistory.push('/');
  }
  render() {
    return (
      <div>You have successfully logged out.</div>
    );
  }
}
