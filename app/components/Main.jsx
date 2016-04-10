import React, {Component} from 'react';
import {Link} from 'react-router';
import fb from '../utils/firebaseUtils';

export class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <h1>Reminder app</h1>
          {fb.getAuth() ? (
            <div className="pull-right">
              <Link to="/logout">Log out</Link>
            </div>
            ) : ''}
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
