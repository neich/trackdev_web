
const error = (state = null, action) => {
	switch (action.type) {
		case 'REQUEST_ERROR' :
			return action.payload.message
		case 'REMOVE_ERROR':
			return null
		default :
			return state
	}
}

export default error
