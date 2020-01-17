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
            <Link to="/login" class="button is-primary">
              <span>Login</span>
            </Link>
          </p>
          <p class="control">
            <Link to="/signup" class="button is-primary">
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      );
    }
    return (
      <div class="user-box navbar-item has-dropdown has-text-right">
        <Link className="navbar-link" to="/dashboard">
          {/*<span class="tag is-purple">Pro</span>*/}
          <span class="name">{this.props.user.profile.name || "Welcome"}</span>
          <figure class="image is-32x32">
            <img
              src={this.props.user.profile.photo}
              alt=""
              className="is-rounded"
            />
          </figure>
        </Link>
        <div class="navbar-dropdown" onClick={this.navbarClicked.bind(this)}>
          <Link class="navbar-item" to="/dashboard">
            Dashboard
          </Link>
          <Link class="navbar-item" to="/dashboard/apikeys">
            API Keys
          </Link>
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
        <div className="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img class="logo-img" src="/images/logo_white.svg" />
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
              <Link to="/" className="navbar-item">
                Home
              </Link>

              <div class="navbar-item has-dropdown">
                <Link to="/products" className="navbar-link">
                  Products
                </Link>

                <div
                  class="navbar-dropdown"
                  onClick={this.navbarClicked.bind(this)}
                >
                  <Link to="/stocks" className="navbar-item">
                    US Stocks
                  </Link>
                  <Link to="/currencies" className="navbar-item">
                    Currencies
                  </Link>
                  <Link to="/crypto" className="navbar-item">
                    Crypto
                  </Link>
                  <hr class="navbar-divider"></hr>
                  <Link to="/enterprise" className="navbar-item">
                    Enterprise
                  </Link>
                  <Link to="/education" className="navbar-item">
                    Education
                  </Link>
                  <Link to="/open-source" className="navbar-item">
                    Open Source
                  </Link>
                </div>
              </div>

              <div class="navbar-item has-dropdown">
                <Link to="/getting-started" class="navbar-link">
                  Docs &amp; Resources
                </Link>

                <div
                  class="navbar-dropdown"
                  onClick={this.navbarClicked.bind(this)}
                >
                  <Link to="/sockets" className="navbar-item">
                    WebSockets Docs
                  </Link>
                  <a href="/docs/#getting-started" className="navbar-item">
                    RESTful API Docs
                  </a>

                  <hr class="navbar-divider"></hr>
                  <Link to="/getting-started" className="navbar-item">
                    Getting Started
                  </Link>
                  <Link to="/sample-applications" className="navbar-item">
                    Sample Code
                  </Link>
                  <Link to="/faqs" className="navbar-item">
                    FAQs
                  </Link>
                  <Link to="/system" className="navbar-item">
                    Systems Status &nbsp;{" "}
                    <span class={systemStatusClasses.join(" ")}>
                      <i class="fas fa-circle"></i>
                    </span>
                  </Link>
                  <Link
                    to="/glossary/us/stocks/conditions-indicators"
                    className="navbar-item"
                  >
                    Conditions and Indicators
                  </Link>

                  <Link
                    to="/glossary/us/stocks/market-definitions"
                    className="navbar-item"
                  >
                    Market Glossary
                  </Link>
                </div>
              </div>

              <div class="navbar-item has-dropdown">
                <div
                  class="navbar-dropdown"
                  onClick={this.navbarClicked.bind(this)}
                >
                  <Link to="/system" className="navbar-item">
                    System Status
                  </Link>
                  <Link to="/support" className="navbar-item">
                    Support
                  </Link>
                </div>
              </div>

              <Link to="/pricing" className="navbar-item">
                Pricing
              </Link>

              <div class="navbar-item has-dropdown">
                <Link to="/company" className="navbar-link">
                  Company
                </Link>

                <div
                  class="navbar-dropdown"
                  onClick={this.navbarClicked.bind(this)}
                >
                  <Link className="navbar-item" to="/about">
                    About Us
                  </Link>
                  <a
                    className="navbar-item"
                    target="_blank"
                    href="https://polygon.io/blog/"
                  >
                    Blog
                  </a>
                  <Link to="/careers" class="navbar-item">
                    Careers
                  </Link>
                  <hr class="navbar-divider"></hr>
                  <Link className="navbar-item" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <Link to="/system" class="navbar-item">
                Systems
                <span
                  class={
                    systemStatusClasses.join(" ") + " icon is-small status-icon"
                  }
                >
                  <i class="fas fa-circle"></i>
                </span>
              </Link>
              <div class="navbar-item ctas">{this.renderUser()}</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
