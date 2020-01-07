
import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/index'
import { Animation } from '../../helpers/Animations'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

@connect(( store ) => ({
	router: store.router,
	notifications: store.notifications,
}))
class NotificationsBar extends Component {

	timeout = null

	close(){
		clearTimeout( this.timeout )
		this.props.dispatch( actions.notifications.clear({}) )
	}

	componentWillReceiveProps( nextProps ){
		if( nextProps.notifications.open != this.props.notifications.open ){
			if( nextProps.notifications.open == true ){
				clearTimeout( this.timeout )
				this.timeout = setTimeout(()=>{
					this.close()
				}, 5000)
			}
		}
	}

	// Render
	render(){
		return (
			<Animation duration={400} in={this.props.notifications.open} classes="slide-trans" appear enter exit >
				<article class="global-alert message is-danger">
					<div class="message-body">
						<div className="columns">
							<div className="column">
								{this.props.notifications.error || 'Unknown Error'}
							</div>
							<div className="column is-narrow vcenter">
								<FontAwesomeIcon onClick={this.close.bind(this)} class="delete" icon={['far', 'times-circle']} />
							</div>
						</div>
					</div>
				</article>
			</Animation>
		)
	}

}

export default NotificationsBar





