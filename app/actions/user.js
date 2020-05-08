import axios from './../helpers/axios';

export function update(data) {
	return { type: 'UPDATE_USER', payload: data };
}

export function clear(data) {
	return { type: 'CLEAR_USER', payload: data };
}

export function fetchUser() {
	return (dispatch) => {
		dispatch({ type: 'FETCHING_USER', payload: {} });
		return axios
			.get('auth/account')
			.then((res) => {
				if (window.intercomSettings) {
					window.intercomSettings.email = res.data.email || '';
					window.intercomSettings.name = res.data.name || '';
					window.intercomSettings.user_id = res.data.name || res.data._id;
					if (typeof window.Intercom === 'function') {
						window.Intercom('update', window.intercomSettings);
					}
				}
				console.log('firing');
				return dispatch({
					type: 'FETCH_USER_FULFILLED',
					payload: res.data
				});
			})
			.then(() => {
				return axios.get('auth/account/apikey');
			})
			.then((res) => {
				return dispatch({
					type: 'UPDATE_USER',
					payload: {
						apiKey: res.data[0].key
					}
				});
			})
			.catch((err) => {
				dispatch({
					type: 'FETCH_USER_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}

export function fetchConnections() {
	return (dispatch) => {
		dispatch({ type: 'FETCHING_CONNECTIONS', payload: {} });
		return axios
			.get(`auth/connections`)
			.then((res) => {
				return dispatch({
					type: 'FETCHED_CONNECTIONS',
					payload: res.data
				});
			})
			.catch((err) => {
				dispatch({
					type: 'FETCH_CONNECTIONS_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}

export function fetchAccounting(userId) {
	return (dispatch) => {
		dispatch({ type: 'FETCHING_ACCOUNTING', payload: {} });
		return axios
			.get(`accounting/recent-access/${userId}`)
			.then((res) => {
				return dispatch({
					type: 'FETCHED_ACCOUNTING',
					payload: res.data
				});
			})
			.catch((err) => {
				dispatch({
					type: 'FETCH_ACCOUNTING_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}

export function register({ email, password }) {
	return (dispatch) => {
		dispatch({ type: 'REGISTERING_USER', payload: {} });
		return axios
			.post('auth/polygon', { email: email, password: password })
			.then((res) => {
				return Promise.all([
					dispatch(fetchUser()),
					dispatch({
						type: 'REGISTER_USER_FULFILLED',
						payload: res.data
					})
				]);
			})
			.catch((err) => {
				dispatch({
					type: 'REGISTER_USER_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}

// Send new PW along with reset code to actually change account PW:
export function sendForgotUpdate({ code, password }) {
	return (dispatch) => {
		dispatch({ type: 'FORGOTPW_USER', payload: {} });
		return axios
			.post('auth/set-password', { code, password })
			.then((res) => {
				console.log('res:', res);
				return res;
			})
			.catch((err) => {
				dispatch({
					type: 'FORGOTPW_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}

// Send the email with link to reset our password:
export function sendForgotCode({ email }) {
	return (dispatch) => {
		dispatch({ type: 'FORGOTPW_USER', payload: {} });
		return axios
			.post('auth/forgot-password', { email: email })
			.then((res) => {
				console.log('res:', res);
				return res;
			})
			.catch((err) => {
				dispatch({
					type: 'FORGOTPW_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}

export function login({ email, password }) {
	return (dispatch) => {
		dispatch({ type: 'LOGGINGIN_USER', payload: {} });
		return axios
			.post('auth/polygon/login', { email: email, password: password })
			.then((res) => {
				return Promise.all([
					dispatch(fetchUser()),
					dispatch({
						type: 'LOGIN_USER_FULFILLED',
						payload: res.data
					})
				]);
			})
			.catch((err) => {
				dispatch({
					type: 'LOGIN_USER_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}

export function updateProfessionalStatus(params) {
	return (dispatch) => {
		dispatch({ type: 'PROFSTATUS_USER_START', payload: {} });
		return axios
			.post('auth/account/update/agreement/status', params)
			.then((res) => {
				return dispatch({
					type: 'PROFSTATUS_USER_FULFILLED',
					payload: res.data
				});
			})
			.catch((err) => {
				dispatch({
					type: 'PROFSTATUS_USER_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}

export function completeNasdaqAgreement(params) {
	return (dispatch) => {
		dispatch({ type: 'NASDAQAGREEMENT_USER_START', payload: {} });
		return axios
			.post('auth/account/update/agreement/nasdaq', params)
			.then((res) => {
				return dispatch({
					type: 'NASDAQAGREEMENT_USER_FULFILLED',
					payload: res.data
				});
			})
			.catch((err) => {
				dispatch({
					type: 'NASDAQAGREEMENT_USER_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}

export function completeNyseAgreement(params) {
	return (dispatch) => {
		dispatch({ type: 'NYSEAGREEMENT_USER_START', payload: {} });
		return axios
			.post('auth/account/update/agreement/nyse', params)
			.then((res) => {
				console.log('Updated nyse Status:', res.data);
				return dispatch({
					type: 'NYSEAGREEMENT_USER_FULFILLED',
					payload: res.data
				});
			})
			.catch((err) => {
				dispatch({
					type: 'NYSEAGREEMENT_USER_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}
