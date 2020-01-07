
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import actions from '../actions/index'

@connect(( store ) => ({
	user: store.user,
}))
class FourOhFour extends Component {

	componentDidMount(){
		this.props.dispatch( actions.app.update({ title: 'Polygon.io - 404 Page Not Found' }) )
	}

	render(){
		return (
			<div className="four-oh-four page">
				<section className="section is-medium has-text-centered">
					<div className="columns is-centered">
						<div className="column is-6">
							<h1 className="title is-1">404</h1>
							<h2 className="subtitle is-3">Page not Found</h2>
							<p>The page you requested does not exist. Please check the URL and try again.</p>
							<p>If you think this is an error, please let us know.</p>
							<div className="spacing"></div>
							<div className="columns is-centered">
								<div className="column is-6">
									<Link to="/" className="button medium primary full-width">Back Home</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}


}

export default FourOhFour
