import React from "react";

export class GettingStarted extends React.Component {
  render() {
    return (
      <section className="columns getting-started-wrapper">
        <span className="anchor" id="getting-started"></span>
        <div className="getting-started column is-half has-background-white">

          <h2 className="title is-2 gettingStarted__title">Getting Started</h2>

          <div className="getting-started-summary content">
            <h3 className="title is-3">Authentication</h3>
            <p>
              Pass your API key in the query string like follows:
            </p>
            <pre>
              
                https://api.polygon.io/v1/last/stocks/AAPL<strong>?apiKey=YOURKEY</strong>
              
            </pre>
            <h3 className="title is-3">Examples</h3>
            <p>
              For example code, visit our github, feel free to put in a
              pull request to add more examples.
            </p>
            <a
              href="https://github.com/Polygon-io"
              target="_blank"
            >
              <button className="button is-primary">Polygon.io on GitHub</button>
            </a>
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
              <a
                href="https://github.com/Polygon-io/client-examples"
                target="_blank"
              >
                <button className="button is-white is-text">Streaming Client Examples</button>
              </a>
            </p>

            <br />
            <br />
            <hr />

            {/* 
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
            </ul> */}

            <div className="container sampleapplications">

							<div className="columns is-multiline">

								<a href="https://github.com/polygon-io/client-python" target="_blank" className="column is-12-mobile is-6-tablet is-4-desktop">
									<div class="card">
										<div className="sampleImg">
											<span className="pi pi-python"></span>
										</div>
										<div class="card-content">
											<div class="media">

												<div class="media-content">
													<p class="title is-4">Python</p>
													<p class="subtitle is-6">Client Library</p>
												</div>
											</div>

											<div class="content">
												A python client library for accessing Polygon's APIs.
											</div>
										</div>
										<footer class="card-footer">
											<a href="https://github.com/polygon-io/client-python" target="_blank" className="card-footer-item">
												<span class="icon has-text-link"><i class="fab fa-github"></i></span> Python Library on Github
											</a>
										</footer>
									</div>
								</a>

								<a href="https://github.com/polygon-io/client-js" target="_blank" className="column is-12-mobile is-6-tablet is-4-desktop">
									<div class="card">
										<div className="sampleImg">
											<span className="pi pi-javascript"></span>
										</div>
										<div class="card-content">
											<div class="media">

												<div class="media-content">
													<p class="title is-4">JavaScript</p>
													<p class="subtitle is-6">Client Library</p>
												</div>
											</div>

											<div class="content">
												A javascript client library for accessing Polygon's APIs.
											</div>
										</div>
										<footer class="card-footer">
											<a href="https://github.com/polygon-io/client-js" target="_blank" className="card-footer-item">
												<span class="icon has-text-link"><i class="fab fa-github"></i></span> JavaScript Library on Github
											</a>
										</footer>
									</div>
								</a>

								<a href="https://github.com/polygon-io/client-golang" target="_blank" className="column is-12-mobile is-6-tablet is-4-desktop">
									<div class="card">
										<div className="sampleImg">
											<span className="pi pi-golang"></span>
										</div>
										<div class="card-content">
											<div class="media">

												<div class="media-content">
													<p class="title is-4">GoLang</p>
													<p class="subtitle is-6">Client Library</p>
												</div>
											</div>

											<div class="content">
												A GoLang client library for accessing Polygon's APIs.
											</div>
										</div>
										<footer class="card-footer">
											<a href="https://github.com/polygon-io/client-golang" target="_blank" className="card-footer-item">
												<span class="icon has-text-link"><i class="fab fa-github"></i></span> GoLang Library on Github
											</a>
										</footer>
									</div>
								</a>

								<a href="https://github.com/polygon-io/client-php" target="_blank" className="column is-12-mobile is-6-tablet is-4-desktop">
									<div class="card">
										<div className="sampleImg">
											<span className="pi pi-php"></span>
										</div>
										<div class="card-content">
											<div class="media">

												<div class="media-content">
													<p class="title is-4">PHP</p>
													<p class="subtitle is-6">Client Library</p>
												</div>
											</div>

											<div class="content">
												A PHP client library for accessing Polygon's APIs.
											</div>
										</div>
										<footer class="card-footer">
											<a href="https://github.com/polygon-io/client-php" target="_blank" className="card-footer-item">
												<span class="icon has-text-link"><i class="fab fa-github"></i></span> PHP Library on Github
											</a>
										</footer>
									</div>
								</a>

								<a href="https://github.com/polygon-io/client-jvm" target="_blank" className="column is-12-mobile is-6-tablet is-4-desktop">
									<div class="card">
										<div className="sampleImg">
											<span className="pi pi-kotlin"></span>
										</div>
										<div class="card-content">
											<div class="media">

												<div class="media-content">
													<p class="title is-4">Kotlin</p>
													<p class="subtitle is-6">Client Library</p>
												</div>
											</div>

											<div class="content">
												A Kotlin client library for accessing Polygon's APIs.
											</div>
										</div>
										<footer class="card-footer">
											<a href="https://github.com/polygon-io/client-jvm" target="_blank" className="card-footer-item">
												<span class="icon has-text-link"><i class="fab fa-github"></i></span> JVM Library on Github
											</a>
										</footer>
									</div>
								</a>

								<a href="https://github.com/Polygon-io/client-examples" target="_blank" className="column is-12-mobile is-6-tablet is-4-desktop">
									<div class="card">

										<div class="card-content">
											<div class="media">

												<div class="media-content">
													<p class="title is-4">WebSocket Examples</p>
													<p class="subtitle is-6">Sample Code</p>
												</div>
											</div>

											<div class="content">
											
												<p>Examples of how to connect and use Polygon.io real-time WebScokets in different languages.</p>

												

												<a href="https://github.com/Polygon-io/client-examples/blob/master/websockets/nodejs/index.js" target="_blank" className="is-block">
													<span class="icon has-text-link"><i class="fab fa-github"></i></span>
													NodeJs
												</a>
												<a href="https://github.com/Polygon-io/client-examples/blob/master/websockets/golang/main.go" target="_blank" className="is-block">
													<span class="icon has-text-link"><i class="fab fa-github"></i></span>
													GoLang
												</a>
												<a href="https://github.com/Polygon-io/client-examples/blob/master/websockets/cs/example.cs" target="_blank" className="is-block">
													<span class="icon has-text-link"><i class="fab fa-github"></i></span>
													C#
												</a>
												<a href="https://github.com/polygon-io/client-python/blob/master/websocket-example.py" target="_blank" className="is-block">
													<span class="icon has-text-link"><i class="fab fa-github"></i></span>
													Python
												</a>
											</div>
										</div>
										<footer class="card-footer">
											<a href="https://github.com/Polygon-io/client-examples" target="_blank" className="card-footer-item">
												<span class="icon has-text-link"><i class="fab fa-github"></i></span> WebSocket Examples on Github
											</a>
										</footer>
									</div>
								</a>

							</div>

						</div>
          
          </div>
        </div>
        <div className="column is-half operation__samples"></div>
      </section>
    );
  }
}
