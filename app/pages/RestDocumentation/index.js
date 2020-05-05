import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwaggerClient from 'swagger-client';

import actions from './../../actions/';
import { SwaggerUI } from '../../components/SwaggerUI';

@connect((store) => ({
	app: store.app,
	router: store.router,
	location: store.location,
}))
export class RestDocumentation extends Component {
	state = {
		visible: {},
		swaggerClient: false,
	};

	componentDidMount() {
		this.props.dispatch(
			actions.app.update({
				title: 'Polygon.io - Real-time Stock APIs, Forex and Crypto',
			})
		);
		new SwaggerClient(this.props.app.definitionLink).then((swaggerClient) => {
			this.setState({
				...this.state,
				swaggerClient,
			});
		});
	}

	// Render
	render() {
		if (!this.state.swaggerClient) {
			return (
				<div id="restdocumentation" className="page restdocumentation--loader">
					<span>
						<i
							key="restdocumentation__loader"
							className="fas fa-circle-notch fa-spin fa-3x"></i>
					</span>
				</div>
			);
		}
		return (
			<div id="restdocumentation" className="page">
				<SwaggerUI swaggerClient={this.state.swaggerClient} {...this.props} />
			</div>
		);
	}
}

export default RestDocumentation;
