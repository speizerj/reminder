import React, { Component } from 'react';
import {ListReminders} from './ListReminders';
import {AddReminder} from './AddReminder';
import fb from '../../utils/firebaseUtils';

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      reminders: []
    };
  }
  componentDidMount() {
    this.init();
  }
  componentWillUnmount() {
    fb.removeBinding(this.ref);
  }
  componentWillReceiveProps() {
    fb.removeBinding(this.ref);
    this.init();
  }
  init() {
    this.ref = fb.syncState(fb.getAuth().uid, {
      context: this,
      asArray: true,
      state: 'reminders'
    });
  }
  addReminder(reminder) {
    this.setState({
      reminders: this.state.reminders.concat([reminder])
    });
  }
  deleteReminder(key) {
    let reminders = this.state.reminders;
    reminders.splice(key, 1);
    this.setState({
      reminders: reminders
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <AddReminder addReminder={this.addReminder.bind(this)} />
        </div>
        <div className="col-xs-12 col-sm-6">
          <ListReminders reminders={this.state.reminders} deleteReminder={this.deleteReminder.bind(this)} />
        </div>
      </div>
    );
  }
}
