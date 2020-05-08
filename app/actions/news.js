import { PublicAPI } from './../helpers/axios';

export function update(data) {
	return { type: 'UPDATE_NEWS', payload: data };
}

export function clear(data) {
	return { type: 'CLEAR_NEWS', payload: data };
}

export function fetchNews() {
	return (dispatch) => {
		dispatch({ type: 'FETCHING_NEWS', payload: {} });
		return PublicAPI.get('v1/company/news')
			.then((res) => {
				return dispatch({
					type: 'FETCH_NEWS_FULFILLED',
					payload: res.data
				});
			})
			.catch((err) => {
				dispatch({
					type: 'FETCH_NEWS_FAILED',
					payload: err
				});
				return Promise.reject(err);
			});
	};
}
