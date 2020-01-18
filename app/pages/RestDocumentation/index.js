import React, { Component } from "react";
import { connect } from "react-redux";
import SwaggerClient from "swagger-client";

import actions from "./../../actions/";
import { SwaggerUI } from "../../components/SwaggerUI";

@connect(store => ({
  app: store.app,
  router: store.router,
  location: store.location
}))
class Homepage extends Component {
  state = {
    visible: {},
    swaggerClient: false,
  };

  async componentDidMount() {
    this.props.dispatch(
      actions.app.update({
        title: "Polygon.io - Real-time Stock APIs, Forex and Crypto"
      })
    );
    const swaggerClient = await new SwaggerClient(this.props.app.definitionLink);
    this.setState({
      ...this.state,
      swaggerClient,
    })
  }

  // Render
  render() {
    if (!this.state.swaggerClient) {
      return (
          <div id="homepage" className="page">
            <div>
              TODO: LOADING PAGE
            </div>
          </div>
      )
    }
    return (
      <div id="homepage" className="page">
          <SwaggerUI swaggerClient={this.state.swaggerClient} />
      </div>
    );
  }
}

export default Homepage;
