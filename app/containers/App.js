import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import actions from '../actions/index';
import Header from './NavbarContainer';
import Footer from './FooterContainer';
import NotificationsBar from '../components/NotificationsBar';

// Pages:
import { RestDocumentation } from '../pages/RestDocumentation';
import FourOhFour from './FourOhFour.js';

const ConnectedSwitch = connect((store) => ({
	location: store.location,
}))(Switch);

@connect((store) => ({
	app: store.app,
	location: store.location,
	notifications: store.notifications,
}))
class AppContainer extends Component {
	componentDidMount() {
		this.props
			.dispatch(actions.user.fetchUser())
			.catch(() => console.log('User not logged in... '));

		this.props.dispatch(actions.systemstatus.load());
	}
	render() {
		return (
			<div className="app_wrapper">
				<Header />
				<ConnectedSwitch>
					<Route exact path="/" component={RestDocumentation} />
					<Route exact path="/docs" component={RestDocumentation} />
					<Route component={FourOhFour}></Route>
				</ConnectedSwitch>
				<Footer />
				{this.props.notifications.open ? <NotificationsBar /> : ''}
			</div>
		);
	}
}

export default withRouter(AppContainer);
