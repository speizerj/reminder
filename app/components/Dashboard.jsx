import React, { Component } from 'react';
import {base} from '../utils/firebaseUtils';

export class Dashboard extends Component {
  render() {
      console.log(base.getAuth());
    return (
      <div>
        <h1>{this.props.params.id}</h1>
      </div>
    );
  }
}
