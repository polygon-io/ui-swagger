
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'

export default function configureStore( ){

	const history = qhistory(
		createBrowserHistory(),
		stringify,
		parse
	)
	const middlewares = [thunkMiddleware, routerMiddleware( history )]

	let composeEnhancers = compose

	if( process.env.NODE_ENV === 'development' ){
		if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
			composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		}
		const ReduxLogger = require('redux-logger')
		const loggerMiddleware = ReduxLogger.createLogger()
		middlewares.push(loggerMiddleware)
	}

	let store = createStore(
		combineReducers({ ...reducers, router: routerReducer }),
		applyMiddleware(...middlewares)
	)
	return {
		store: store,
		history: history
	}

}
