import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

@connect(store => ({
  location: store.location,
  user: store.user,
  systemstatus: store.systemstatus
}))
class HeaderComponent extends Component {
  state = {
    open: false
  };

  // Render User info or Login/Signup buttons:
  // Render spinning loader until we know if logged in/not.
  renderUser() {
    if (!this.props.user.fetched) {
      return (
        <div className="loading has-text-centered full-width">
          <FontAwesomeIcon className="fa-spin icon fa-lg" icon="circle-notch" />
        </div>
      );
    }
    if (!this.props.user.isLoggedIn) {
      return (
        <div class="field is-grouped">
          <p class="control">
            <a href="/login" class="button is-primary">
              <span>Login</span>
            </a>
          </p>
          <p class="control">
            <a href="/signup" class="button is-primary">
              <span>Sign Up</span>
            </a>
          </p>
        </div>
      );
    }
    return (
      <div class="user-box navbar-item has-dropdown has-text-right">
        <a className="navbar-link" href="/dashboard">
          {/*<span class="tag is-purple">Pro</span>*/}
          <span class="name">{this.props.user.profile.name || "Welcome"}</span>
          <figure class="image is-32x32">
            <img
              src={this.props.user.profile.photo}
              alt=""
              className="is-rounded"
            />
          </figure>
        </a>
        <div class="navbar-dropdown" onClick={this.navbarClicked.bind(this)}>
          <a class="navbar-item" href="/dashboard">
            Dashboard
          </a>
          <a class="navbar-item" href="/dashboard/apikeys">
            API Keys
          </a>
          <a class="navbar-item" href="/docs/#getting-started">
            Documentation
          </a>
          <hr class="navbar-divider" />
          <a
            class="navbar-item"
            href={`${window.API_BASE}v1/auth/logout?r=${window.F_BASE}`}
          >
            Logout
          </a>
        </div>
      </div>
    );
  }

  navbarClicked() {
    this.setState({ open: false });
  }

  render() {
    let user = this.props.user;
    let menu = null;
    let classes = ["navbar-menu"];
    let burgerClasses = ["navbar-burger"];
    if (this.state.open) {
      classes.push("is-active");
      burgerClasses.push("is-active");
    }
    let systemStatusClasses = [];
    if (this.props.systemstatus.fetched) {
      if (this.props.systemstatus.status.systemStatus == "UP")
        systemStatusClasses.push("has-text-success");
      if (this.props.systemstatus.status.systemStatus == "DOWN")
        systemStatusClasses.push("has-text-danger");
    }
    return (
      <nav
        id="header"
        class="navbar is-primary is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container navbar__container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img class="logo-img" src="/docs/images/logo_white.svg" />
            </a>

            <a
              role="button"
              class={burgerClasses.join(" ")}
              onClick={() => this.setState({ open: !this.state.open })}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div class={classes.join(" ")} id="navMenu">
            <div class="navbar-start">
              <a href="/" className="navbar-item">
                Home
              </a>

              <div class="navbar-item has-dropdown">
                <a href="/products" className="navbar-link">
                  Products
                </a>

                <div
                  class="navbar-dropdown"
                  onClick={this.navbarClicked.bind(this)}
                >
                  <a href="/stocks" className="navbar-item">
                    US Stocks
                  </a>
                  <a href="/currencies" className="navbar-item">
                    Currencies
                  </a>
                  <a href="/crypto" className="navbar-item">
                    Crypto
                  </a>
                  <hr class="navbar-divider"></hr>
                  <a href="/enterprise" className="navbar-item">
                    Enterprise
                  </a>
                  <a href="/education" className="navbar-item">
                    Education
                  </a>
                  <a href="/open-source" className="navbar-item">
                    Open Source
                  </a>
                </div>
              </div>

              <div class="navbar-item has-dropdown">
                <a href="/getting-started" class="navbar-link">
                  Docs &amp; Resources
                </a>

                <div
                  class="navbar-dropdown"
                  onClick={this.navbarClicked.bind(this)}
                >
                  <a href="/sockets" className="navbar-item">
                    WebSockets Docs
                  </a>
                  <a href="/docs/#getting-started" className="navbar-item">
                    RESTful API Docs
                  </a>

                  <hr class="navbar-divider"></hr>
                  <a href="/getting-started" className="navbar-item">
                    Getting Started
                  </a>
                  <a href="/sample-applications" className="navbar-item">
                    Sample Code
                  </a>
                  <a href="/faqs" className="navbar-item">
                    FAQs
                  </a>
                  <a href="/system" className="navbar-item">
                    Systems Status &nbsp;{" "}
                    <span class={systemStatusClasses.join(" ")}>
                      <i class="fas fa-circle"></i>
                    </span>
                  </a>
                  <a
                    href="/glossary/us/stocks/conditions-indicators"
                    className="navbar-item"
                  >
                    Conditions and Indicators
                  </a>

                  <a
                    href="/glossary/us/stocks/market-definitions"
                    className="navbar-item"
                  >
                    Market Glossary
                  </a>
                </div>
              </div>

              <div class="navbar-item has-dropdown">
                <div
                  class="navbar-dropdown"
                  onClick={this.navbarClicked.bind(this)}
                >
                  <a href="/system" className="navbar-item">
                    System Status
                  </a>
                  <a href="/support" className="navbar-item">
                    Support
                  </a>
                </div>
              </div>

              <a href="/pricing" className="navbar-item">
                Pricing
              </a>

              <div class="navbar-item has-dropdown">
                <a href="/company" className="navbar-link">
                  Company
                </a>

                <div
                  class="navbar-dropdown"
                  onClick={this.navbarClicked.bind(this)}
                >
                  <a className="navbar-item" href="/about">
                    About Us
                  </a>
                  <a
                    className="navbar-item"
                    target="_blank"
                    href="https://polygon.io/blog/"
                  >
                    Blog
                  </a>
                  <a href="/careers" class="navbar-item">
                    Careers
                  </a>
                  <hr class="navbar-divider"></hr>
                  <a className="navbar-item" href="/contact">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <a href="/system" class="navbar-item">
                Systems
                <span
                  class={
                    systemStatusClasses.join(" ") + " icon is-small status-icon"
                  }
                >
                  <i class="fas fa-circle"></i>
                </span>
              </a>
              <div class="navbar-item ctas">{this.renderUser()}</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
