import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Footer } from "@polygon.io/ui-components";
import { connect } from "react-redux";

import actions from "../../actions";

@connect(store => ({
  location: store.location,
  news: store.news
}))
class FooterContainer extends Component {
  componentDidMount() {
    this.props.dispatch(actions.news.fetchNews());
  }

  // Render
  render() {
    return <Footer newsItems={3} news={this.props.news} />;
  }
}

export default withRouter(FooterContainer);
