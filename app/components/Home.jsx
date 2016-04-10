import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {base} from '../utils/firebaseUtils';

export class Home extends Component {
  handleSubmit() {
    base.authWithPassword({
      email: this.email.value,
      password: this.password.value
    }, function(err, data) {
      browserHistory.pushState('/user/' + data.uid);
    });

  }
  getEmail(ref) {
    this.email = ref;
  }
  getPassword(ref) {
    this.password = ref;
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-sm-push-4">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input className="form-control" type="email" placeholder="Email" ref={this.getEmail.bind(this)} />
              <input className="form-control" type="password" placeholder="Password" ref={this.getPassword.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
