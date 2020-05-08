import React from 'react';

const redirectTo = (url) => {
	window.open(url, '_blank');
};

const GettingStarted = () => {
	return (
		<section className="columns getting-started-wrapper">
			<span className="anchor" id="getting-started"></span>
			<div className="getting-started column is-half has-background-white">
				<h2 className="title is-2 gettingStarted__title">Getting Started</h2>

				<div className="getting-started-summary content">
					<h3 className="title is-3">Authentication</h3>
					<p>Pass your API key in the query string like follows:</p>
					<pre>
						https://api.polygon.io/v1/last/stocks/AAPL
						<strong>?apiKey=YOURKEY</strong>
					</pre>
					<h3 className="title is-3">Examples</h3>
					<p>
						For example code, visit our github, feel free to put in a pull
						request to add more examples.
					</p>
					<a href="https://github.com/Polygon-io" target="_blank">
						<button className="button is-primary">Polygon.io on GitHub</button>
					</a>
					<h3 className="title is-3">Streaming Clients</h3>
					<p>
						Polygon.io uses WebSockets as the primary way to broadcast real-time
						data. You can find more information on the WebSockets documentation
						page. <br />
						<br />
						<a href="https://polygon.io/sockets" target="_blank">
							<button className="button is-primary">
								WebSockets Documentation
							</button>
						</a>
						<a
							href="https://github.com/Polygon-io/client-examples"
							target="_blank">
							<button className="button is-white is-text">
								Streaming Client Examples
							</button>
						</a>
					</p>

					<br />
					<br />
					<hr />

					<div className="container sampleapplications">
						<div className="columns is-multiline">
							<div
								onClick={() =>
									redirectTo('https://github.com/polygon-io/client-python')
								}
								className="column is-12-mobile is-6-tablet is-4-desktop">
								<div className="card">
									<div className="sampleImg">
										<span className="pi pi-python"></span>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-content">
												<p className="title is-4">Python</p>
												<p className="subtitle is-6">Client Library</p>
											</div>
										</div>

										<div className="content">
											A python client library for accessing Polygon's APIs.
										</div>
									</div>
									<footer className="card-footer">
										<a
											href="https://github.com/polygon-io/client-python"
											target="_blank"
											onClick={(e) => e.stopPropagation()}
											className="card-footer-item">
											<span className="icon has-text-link">
												<i className="fab fa-github"></i>
											</span>
											Python Library on Github
										</a>
									</footer>
								</div>
							</div>

							<div
								onClick={() =>
									redirectTo('https://github.com/polygon-io/client-js')
								}
								className="column is-12-mobile is-6-tablet is-4-desktop">
								<div className="card">
									<div className="sampleImg">
										<span className="pi pi-javascript"></span>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-content">
												<p className="title is-4">JavaScript</p>
												<p className="subtitle is-6">Client Library</p>
											</div>
										</div>

										<div className="content">
											A javascript client library for accessing Polygon's APIs.
										</div>
									</div>
									<footer className="card-footer">
										<a
											href="https://github.com/polygon-io/client-js"
											target="_blank"
											onClick={(e) => e.stopPropagation()}
											className="card-footer-item">
											<span className="icon has-text-link">
												<i className="fab fa-github"></i>
											</span>
											JavaScript Library on Github
										</a>
									</footer>
								</div>
							</div>

							<div
								onClick={() =>
									redirectTo('https://github.com/polygon-io/client-golang')
								}
								className="column is-12-mobile is-6-tablet is-4-desktop">
								<div className="card">
									<div className="sampleImg">
										<span className="pi pi-golang"></span>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-content">
												<p className="title is-4">GoLang</p>
												<p className="subtitle is-6">Client Library</p>
											</div>
										</div>

										<div className="content">
											A GoLang client library for accessing Polygon's APIs.
										</div>
									</div>
									<footer className="card-footer">
										<a
											href="https://github.com/polygon-io/client-golang"
											target="_blank"
											onClick={(e) => e.stopPropagation()}
											className="card-footer-item">
											<span className="icon has-text-link">
												<i className="fab fa-github"></i>
											</span>
											GoLang Library on Github
										</a>
									</footer>
								</div>
							</div>

							<div
								onClick={() =>
									redirectTo('https://github.com/polygon-io/client-php')
								}
								className="column is-12-mobile is-6-tablet is-4-desktop">
								<div className="card">
									<div className="sampleImg">
										<span className="pi pi-php"></span>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-content">
												<p className="title is-4">PHP</p>
												<p className="subtitle is-6">Client Library</p>
											</div>
										</div>

										<div className="content">
											A PHP client library for accessing Polygon's APIs.
										</div>
									</div>
									<footer className="card-footer">
										<a
											href="https://github.com/polygon-io/client-php"
											target="_blank"
											onClick={(e) => e.stopPropagation()}
											className="card-footer-item">
											<span className="icon has-text-link">
												<i className="fab fa-github"></i>
											</span>
											PHP Library on Github
										</a>
									</footer>
								</div>
							</div>

							<div
								onClick={() =>
									redirectTo('https://github.com/polygon-io/client-jvm')
								}
								className="column is-12-mobile is-6-tablet is-4-desktop">
								<div className="card">
									<div className="sampleImg">
										<span className="pi pi-kotlin"></span>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-content">
												<p className="title is-4">Kotlin</p>
												<p className="subtitle is-6">Client Library</p>
											</div>
										</div>

										<div className="content">
											A Kotlin client library for accessing Polygon's APIs.
										</div>
									</div>
									<footer className="card-footer">
										<a
											href="https://github.com/polygon-io/client-jvm"
											target="_blank"
											onClick={(e) => e.stopPropagation()}
											className="card-footer-item">
											<span className="icon has-text-link">
												<i className="fab fa-github"></i>
											</span>
											JVM Library on Github
										</a>
									</footer>
								</div>
							</div>

							<div
								onClick={() =>
									redirectTo('https://github.com/Polygon-io/client-examples')
								}
								className="column is-12-mobile is-6-tablet is-4-desktop">
								<div className="card">
									<div className="card-content">
										<div className="media">
											<div className="media-content">
												<p className="title is-4">WebSocket Examples</p>
												<p className="subtitle is-6">Sample Code</p>
											</div>
										</div>

										<div className="content">
											<p>
												Examples of how to connect and use Polygon.io real-time
												WebScokets in different languages.
											</p>

											<a
												href="https://github.com/Polygon-io/client-examples/blob/master/websockets/nodejs/index.js"
												target="_blank"
												onClick={(e) => e.stopPropagation()}
												className="is-block">
												<span className="icon has-text-link">
													<i className="fab fa-github"></i>
												</span>
												NodeJs
											</a>
											<a
												href="https://github.com/Polygon-io/client-examples/blob/master/websockets/golang/main.go"
												target="_blank"
												onClick={(e) => e.stopPropagation()}
												className="is-block">
												<span className="icon has-text-link">
													<i className="fab fa-github"></i>
												</span>
												GoLang
											</a>
											<a
												href="https://github.com/Polygon-io/client-examples/blob/master/websockets/cs/example.cs"
												target="_blank"
												onClick={(e) => e.stopPropagation()}
												className="is-block">
												<span className="icon has-text-link">
													<i className="fab fa-github"></i>
												</span>
												C#
											</a>
											<a
												href="https://github.com/polygon-io/client-python/blob/master/websocket-example.py"
												target="_blank"
												onClick={(e) => e.stopPropagation()}
												className="is-block">
												<span className="icon has-text-link">
													<i className="fab fa-github"></i>
												</span>
												Python
											</a>
										</div>
									</div>
									<footer className="card-footer">
										<a
											href="https://github.com/Polygon-io/client-examples"
											target="_blank"
											onClick={(e) => e.stopPropagation()}
											className="card-footer-item">
											<span className="icon has-text-link">
												<i className="fab fa-github"></i>
											</span>
											WebSocket Examples on Github
										</a>
									</footer>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="column is-half operation__samples"></div>
		</section>
	);
};

export default GettingStarted;
