import React, { Component } from 'react';
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
    fb.base.removeBinding(this.ref);
  }
  componentWillReceiveProps() {
    fb.base.removeBinding(this.ref);
    this.init();
  }
  init() {
    this.ref = fb.base.syncState(fb.base.getAuth().uid, {
      context: this,
      asArray: true,
      state: 'reminders'
    });
  }
  render() {
    let reminders = this.state.reminders.map(function(obj, key) {
      let date = new Date(obj.alarmDate * 1000);
      let dateString = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
      return (
        <li className="list-group-item" key={key}>{obj.text} - {dateString}</li>
      );
    });
    return (
      <div>
        <h3>Active Reminders</h3>
        <ul className="list-group">
          {reminders}
        </ul>
      </div>
    );
  }
}
