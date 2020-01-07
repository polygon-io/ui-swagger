'use strict'

import raf from 'raf/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { ConnectedRouter } from 'react-router-redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import WebFont from 'webfontloader'
import configureStore from './store/configureStore'

const { store, history } = configureStore()

window.runApp = () => {
	render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>,
		document.getElementById('root')
	)
}

WebFont.load({
	google: {
		families: [
			'Roboto:100,300,400,600',
			'Barlow:100,300,400,600',
			'Dosis:600',
		]
	}
})