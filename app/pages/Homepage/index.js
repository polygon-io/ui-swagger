import React, { Component } from "react";
import { connect } from "react-redux";
import SwaggerUI from "swagger-ui";

import actions from "./../../actions/";
import { SwaggerCustomLayoutPlugin } from "../../components/SwaggerCustomLayout";

@connect(store => ({
  app: store.app,
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
    const swaggerUI = SwaggerUI({
      domNode: document.getElementById("api-data"),
      url: this.props.app.definitionLink,
      plugins: [SwaggerCustomLayoutPlugin],
      layout: "SwaggerCustomLayout"
    });
  }

  // Render
  render() {
    return (
      <div id="homepage" className="page">
        <div id="api-data" />
      </div>
    );
  }
}

export default Homepage;
