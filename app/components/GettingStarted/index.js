import React from "react";

export class GettingStarted extends React.Component {
  render() {
    return (
      <section className="columns">
        <span className="anchor" id="getting-started"></span>
        <div className="operation getting-started column is-half">
          <div className="heading">
            <h2 className="title is-2">Getting Started</h2>
          </div>
          <div className="getting-started-summary">
            <h3 className="title is-3">RESTfull APIs</h3>
            <p>
              Restful API endpoints are listed on the left menu of this page.
            </p>
            <p>
              These can be called passing your API key ( when needed ) in the
              query string. For example:
            </p>
            <pre>
              <code>
                https://api.polygon.io/v1/last/stocks/AAPL?apiKey=YOURKEY
              </code>
            </pre>
            <h3 className="title is-3">Streaming Clients</h3>
            <p>
              Polygon.io uses WebSockets as the primary way to broadcast
              real-time data. You can find more information on the WebSockets
              documentation page. <br />
              <br />
              <a href="https://polygon.io/sockets" target="_blank">
                <button className="button is-primary">
                  WebSockets Documentation
                </button>
              </a>
            </p>

            <h3 className="operation-title">Examples</h3>
            <p>
              For example code look at our github repo, feel free to put in a
              pull request to add more examples. <br />
              <br />
              <a
                href="https://github.com/Polygon-io/client-examples"
                target="_blank"
              >
                <button className="button">Examples</button>
              </a>
            </p>

            <br />
            <br />
            <h3>Update Log</h3>

            <ul>
              <li>
                <strong>Jul 8, 2019</strong>
                <ul>
                  <li>Added v2 of Dividends API</li>
                  <li>Added Financials API</li>
                  <li>Consolidated Gainers / Losers into 1 item</li>
                </ul>
              </li>
              <li>
                <strong>Feb 5, 2019</strong>
                <ul>
                  <li>Added v2 of Splits API</li>
                  <li>
                    Added 'Aggregates' API ( Custom time window agg service )
                  </li>
                  <li>Added 'Grouped Daily' API</li>
                </ul>
              </li>
              <li>
                <strong>Jan 25, 2019</strong>
                <ul>
                  <li>Added new Reference Tickers API</li>
                  <li>Changed Getting Started to websockets</li>
                  <li>Removed deprecated symbols APIs</li>
                </ul>
              </li>
              <li>
                <strong>Jan 17, 2019</strong>
                <ul>
                  <li>Added Snapshot APIs for Forex, Crypto and Stocks</li>
                </ul>
              </li>
              <li>
                <strong>Nov 30, 2018</strong>
                <ul>
                  <li>
                    Increased Query Result limits from 10k to 50k for
                    ticks/aggs.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Nov 9, 2018</strong>
                <ul>
                  <li>Added analyst ratings API endpoint for stock symbols.</li>
                  <li>
                    Added the option for stock historic aggregates to return the
                    unadjusted data.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="column is-half operation__samples"></div>
      </section>
    );
  }
}
