import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "./../../actions/";

@connect(store => ({
  router: store.router,
  location: store.location
}))
class Homepage extends Component {
  state = {
    visible: {}
  };

  componentDidMount() {
    this.props.dispatch(
      actions.app.update({
        title: "Polygon.io - Real-time Stock APIs, Forex and Crypto"
      })
    );
  }

  // Render
  render() {
    return (
      <div id="homepage" class="page">
        <section class="hero is-info is-large">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Homepage - UiSwagger</h1>
              <h2 class="subtitle">Homepage subtitle</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
