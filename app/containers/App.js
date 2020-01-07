
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom'
import actions from '../actions/index'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NotificationsBar from '../components/NotificationsBar'
import Icons from '../helpers/icons'

// Pages:
import Homepage from '../pages/Homepage'
import FourOhFour from './FourOhFour.js'

const ConnectedSwitch = connect(( store ) => ({
	location: store.location
}))( Switch )


@connect(( store ) => ({
	app: store.app,
	location: store.location,
	notifications: store.notifications,
}))
class AppContainer extends Component {

	render(){
		return (
			<div className="app_wrapper">
				<Header />
				<ConnectedSwitch>
					<Route exact path="/" component={Homepage} />
					<Route component={FourOhFour}></Route>
				</ConnectedSwitch>
				<Footer />
				<NotificationsBar />
			</div>
		)
	}


}

export default withRouter( AppContainer )
