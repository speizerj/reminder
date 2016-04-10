import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import fb from '../utils/firebaseUtils';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    fb.authWithPassword({
      email: this.email.value,
      password: this.password.value
    }, function(err, data) {
      if (!err) {
        browserHistory.push('/dashboard');
      } else {
        this.setState({
          error: fb.genErrorMsg(err)
        })
      }
    }.bind(this));

  }

  getEmail(ref) {
    this.email = ref;
  }

  getPassword(ref) {
    this.password = ref;
  }

  render() {
    let error = this.state.error ? <div className="alert alert-danger"> {this.state.error} </div> : '';
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-sm-push-4">
          {error}
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
