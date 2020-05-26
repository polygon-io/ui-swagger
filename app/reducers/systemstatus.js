const initialState = {
	fetched: false,
	fetching: false,
	status: {},
	lastUpdated: {}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_SSTATUS':
			state = Object.assign({}, state, action.payload);
			break;
		case 'CLEAR_SSTATUS':
			state = Object.assign({}, initialState);
			break;
		case 'FETCHING_SSTATUS':
			state = Object.assign({}, state, { fetching: true });
			break;
		case 'FETCHED_SSTATUS':
			state = Object.assign({}, state, {
				fetched: true,
				fetching: false,
				status: action.payload,
				lastUpdated: Date.now() - action.payload.lastStatusCheck
			});
			break;
	}

	return state;
}
