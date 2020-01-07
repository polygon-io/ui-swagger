

export function update( data ){
	return { type: 'UPDATE_APP', payload: data }
}

export function clear( data ){
	return { type: 'CLEAR_APP', payload: data }
}

