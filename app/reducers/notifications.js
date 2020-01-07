


// We dont do nested objects due to Object.apply not doing deep applys
const initialState = {

	// Current States:
	error: '',
	open: false,
	
}

function setStateToAxiosError( state, error ){
	let msg = null
	if( !error.response ){
		msg = error.message
	}else{
		msg = error.response.statusText
		if( ( error.response.data ) && error.response.data.message )
			msg = error.response.data.message
	}
	state = Object.assign({}, state, { error: msg, open: true } )
	return state
}

export default function reducer( state = initialState, action ){

	switch ( action.type ){
		case 'CLEAR_ERROR':
			state = Object.assign({}, state, { open: false }, action.payload)
			break
		case 'UPDATE_ERROR':
			state = Object.assign({}, state, action.payload)
			break
		case 'TRIGGER_ERROR':
			console.log('got error', action.payload.response)
			state = setStateToAxiosError( state, action.payload )
			break




		case 'BILLING_FAILURE':
			state = setStateToAxiosError( state, action.payload )
			break
		case 'SKETCH_SETTINGS_REMOVE_COLLAB_FAILED':
			state = setStateToAxiosError( state, action.payload )
			break
		case 'SKETCH_SETTINGS_UPDATE_COLLAB_FAILED':
			state = setStateToAxiosError( state, action.payload )
			break
		case 'SKETCH_SETTINGS_ADD_COLLAB_FAILED':
			state = setStateToAxiosError( state, action.payload )
			break
		case 'UPGRADE_MODAL_PREMIUM_FAILED':
			state = setStateToAxiosError( state, action.payload )
			break

	}

	return state

}
