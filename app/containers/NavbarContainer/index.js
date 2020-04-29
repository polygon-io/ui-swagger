import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar } from "@polygon.io/ui-components";

@connect(store => ({
  location: store.location,
  user: store.user,
  systemstatus: store.systemstatus
}))
class NavbarContainer extends Component {
  render() {
    return (
      <Navbar user={this.props.user} systemstatus={this.props.systemstatus} />
    );
  }
}

export default NavbarContainer;
