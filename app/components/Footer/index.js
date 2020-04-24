import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";

import CompanyNews from "./../../components/CompanyNews/";

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
      <footer className="footer">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-2-tablet is-2 is-blurb">
                  <a href="/">
                    <figure class="logo-figure image is-32x32 is-pulled-left">
                      <img src="/images/logo_color.svg" />
                    </figure>
                  </a>
                  <h3 className="title is-4">
                    polygon<span class="has-text-grey">.io</span>
                  </h3>
                  <p className="subtitle is-6 is-small has-text-grey">
                    Financial market data via real-time APIs.
                  </p>

                  <ul className="bump-right">
                    <li>
                      <span class="icon has-text-link">
                        <a href="https://github.com/Polygon-io" target="_blank">
                          <i class="fab fa-github"></i>
                        </a>
                      </span>
                      <span class="icon has-text-link">
                        <a
                          href="https://www.linkedin.com/company/polygon-io/"
                          target="_blank"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </span>
                      <span class="icon has-text-link">
                        <a
                          href="https://twitter.com/polygon_io"
                          target="_blank"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                      </span>
                      <span class="icon has-text-link">
                        <a
                          href="https://www.instagram.com/polygon_io"
                          target="_blank"
                        >
                          <i class="fab fa-instagram"></i>
                        </a>
                      </span>
                      <span class="icon has-text-link">
                        <a
                          href="https://www.facebook.com/polygonio"
                          target="_blank"
                        >
                          <i class="fab fa-facebook"></i>
                        </a>
                      </span>
                    </li>
                    <li>&nbsp;</li>
                  </ul>
                  <ul className="bump-right">
                    <li>
                      <a href="/terms">Terms of Service</a>
                    </li>
                    <li>
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/eula">EULA</a>
                    </li>
                  </ul>
                  <br />
                </div>

                <div className="column is-offset-1-desktop">
                  <div className="columns is-multiline">
                    <div className="column is-12-tablet is-6-desktop">
                      <ul>
                        <li>
                          <a href="/products">
                            <strong>Products</strong>
                          </a>
                          <hr />
                          <ul>
                            <a href="/stocks">
                              <li>Stocks</li>
                            </a>
                            <a href="/currencies">
                              <li>Currencies</li>
                            </a>
                            <a href="/crypto">
                              <li>Crypto</li>
                            </a>
                          </ul>
                          <ul>
                            <a href="/enterprise">
                              <li>Enterprise</li>
                            </a>
                            <a href="/education">
                              <li>Education</li>
                            </a>
                            <a href="/open-source">
                              <li>Open Source</li>
                            </a>
                          </ul>
                        </li>
                      </ul>
                      <br />
                      <ul>
                        <li>
                          <a href="/company">
                            <strong>Company</strong>
                          </a>
                          <hr />
                          <ul>
                            <a href="/about">
                              <li>About Us</li>
                            </a>
                            <a target="_blank" href="https://polygon.io/blog/">
                              <li>Blog</li>
                            </a>
                            <a href="/careers">
                              <li>Careers</li>
                            </a>
                            <a href="/contact">
                              <li>Contact Us</li>
                            </a>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="column company-column is-offset-1-desktop is-11-tablet is-5-desktop">
                      <ul>
                        <li>
                          <a href="/getting-started">
                            <strong>Docs &amp; Resources</strong>
                          </a>
                          <hr />
                          <ul>
                            <a href="/sockets">
                              <li>WebSocket Docs</li>
                            </a>
                            <a href="/docs/#getting-started">
                              <li>RESTful API Docs</li>
                            </a>
                            <a href="/getting-started">
                              <li>Getting Started</li>
                            </a>
                            <a href="/sample-applications">
                              <li>Sample Code</li>
                            </a>
                            <a href="/faqs">
                              <li>FAQs</li>
                            </a>
                            <a href="/system">
                              <li>System Status</li>
                            </a>

                            <li>&nbsp;</li>
                          </ul>
                        </li>

                        <li>
                          <a href="/pricing">
                            <strong>Pricing</strong>
                          </a>
                        </li>
                        <hr />
                        <ul>
                          <a href="/pricing">
                            <li>View Pricing</li>
                          </a>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="column is-offset-1-desktop">
                  <ul>
                    <li>
                      <a href="/blog">
                        <strong>Company News</strong>
                      </a>
                      <hr />
                    </li>
                  </ul>

                  <div className="company-news">
                    <CompanyNews items={3} />
                  </div>
                </div>

                <div className="column disclaimer is-12 is-10-desktop">
                  <div className="content is-size-7 has-text-grey-light">
                    <p>
                      All data provided on Polygon is provided for informational
                      purposes only, and is not intended for trading or
                      investing purposes.
                    </p>

                    <p>
                      Important - Polygon provides all information as is. You
                      must not redistribute information displayed on or provided
                      by Polygon.
                    </p>

                    <p>
                      Here you can find all exchanges and markets that Polygon
                      covers. Each row includes the exchange suffix (which you
                      can add to the end of the instrument ticker to look up the
                      quote as traded on that exchange), the time delay between
                      the exchange and Polygon, and the data provider.
                    </p>

                    <p>
                      Stock prices displayed in the ticker are from a subset of
                      exchanges, this price does not represent the real-time
                      price from the SIP.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hero">
          <div className="hero-body">
            <div className="content has-text-centered">
              <p className="is-size-7 has-text-grey-light">
                Copyright &copy; 2019, Polygon.io, Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);