
import React, { Component } from 'react'


export default class ExampleBoundary extends Component {
	state = { error: null }
	componentDidCatch( error, errorInfo ){
		this.setState({ error })
	}
	render() {
		if( this.state.error ){
			return (
				<div className="snap">
					<p>We're sorry — something's gone wrong.</p>
					<p>Our team has been notified.</p>
				</div>
			)
		} else {
			//when there's not an error, render children untouched
			return this.props.children
		}
	}
}