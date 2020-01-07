

export function update( data ){
	return { type: 'UPDATE_ERROR', payload: data }
}

export function clear( data ){
	return { type: 'CLEAR_ERROR', payload: data }
}

export function error( err ){
	return { type: 'TRIGGER_ERROR', payload: err }
}

