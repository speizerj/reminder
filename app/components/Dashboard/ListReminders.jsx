import React, { Component } from 'react';

export class ListReminders extends Component {
  constructor() {
    super();
  }
  handleDelete(key, e) {
    e.preventDefault();
    this.props.deleteReminder(key);
  }
  render() {
    this.props.reminders.sort(function(a, b) {
      return a.timestamp - b.timestamp;
    });
    let reminders = this.props.reminders.map(function(obj, key) {
      let date = new Date(obj.timestamp * 1000);
      let dateString = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
      return (
        <li className="list-group-item" key={key}>
          <h4>Date: {dateString}</h4>
          <p><strong>Message:</strong> {obj.text}</p>
          <button type="button" className="btn btn-danger reminder__delete-btn" onClick={this.handleDelete.bind(this, key)}>Delete</button>
        </li>
      );
    }.bind(this));

    console.log(reminders);
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><h4 className="panel-title">Active Reminders</h4></div>
        <ul className="list-group">
          {reminders}
        </ul>
      </div>
    );
  }
}
