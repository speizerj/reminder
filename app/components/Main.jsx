import React, {Component} from 'react';

export class Main extends Component {
  static willTransitionTo(transition) {
    console.log(transition);
  }
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <h1>React Seed</h1>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
