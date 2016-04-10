import React, { Component } from 'react';
import fb from '../../utils/firebaseUtils';

export class AddReminder extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      success: false
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(fb.getAuth());

    if (!this.validDate()) {
      this.setState({
        error: 'Please enter a valid date.'
      });
      return;
    }

    if (!this.validMessage()) {
      this.setState({
        error: 'Please enter a valid message.'
      });
      return;
    }

    this.setState({
      error: false
    })

    let date = this.date.value.split('/');

    let obj = {
      timestamp: new Date(date[2], date[0] - 1, date[1]).getTime() / 1000,
      text: this.message.value,
      email: fb.getAuth().password.email
    }

    this.props.addReminder(obj);
    this.message.value = '';
    this.date.value = '';

  }
  validDate() {
    let dateRegexp = /[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4}$/;
    return dateRegexp.test(this.date.value);
  }
  validMessage(){
    if (this.message.value !== '') {
      return true;
    }

    return false;
  }
  getDate(ref) {
    this.date = ref;
  }
  getMessage(ref) {
    this.message = ref;
  }
  render() {
    let date = new Date();
    let startDate = `${date.getMonth()+1}-${date.getDate()+1}-${date.getFullYear()}`;
    let error = this.state.error ? <div className="alert alert-danger"> {this.state.error} </div> : '';
    let success = this.state.success ? <div className="alert alert-success">Reminder created.</div> : '';

    return (
      <div className="panel panel-primary">
        <div className="panel-heading"><h4 className="panel-title">Create New Reminder</h4></div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit.bind(this)}>
            {error}
            {success}
            <div className="form-group">
              <label>Date:</label>
              <div className="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-start-date={startDate}>
                  <input type="text" className="form-control" ref={this.getDate.bind(this)}/>
                  <div className="input-group-addon">
                      <span className="glyphicon glyphicon-calendar"></span>
                  </div>
              </div>
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea className="form-control" ref={this.getMessage.bind(this)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Create Reminder</button>
          </form>
        </div>
      </div>
    );
  }
}
