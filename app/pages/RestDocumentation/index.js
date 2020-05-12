import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from './../../actions/';
import { SwaggerUI } from '../../components/SwaggerUI';

@connect((store) => ({
	app: store.app,
	router: store.router,
	location: store.location
}))
export class RestDocumentation extends Component {
	componentDidMount() {
		this.props.dispatch(
			actions.app.update({
				title: 'Polygon.io - Real-time Stock APIs, Forex and Crypto'
			})
		);
	}

	// Render
	render() {
		return (
			<div id="restdocumentation">
				<SwaggerUI {...this.props} />
			</div>
		);
	}
}

export default RestDocumentation;
