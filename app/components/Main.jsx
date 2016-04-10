import React, {Component} from 'react';
import {Link} from 'react-router';
import fb from '../utils/firebaseUtils';

export class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <h1>Reminder</h1>
          </div>
          {fb.isLoggedIn() ? (
              <Link to="/logout">Log out</Link>
            ) : ''}
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
