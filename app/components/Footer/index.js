import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";

const ConnectedSwitch = connect(store => ({
  location: store.location
}))(Switch);

@connect(store => ({
  location: store.location
}))
class Footer extends Component {
  // Render
  render() {
    return (
      <footer class="section is-medium footer">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>
                Copyright &copy; {new Date().getFullYear()} Polygon.io, LLC -
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
