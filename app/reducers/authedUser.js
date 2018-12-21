
const initialState = {
  name: null,
  email: null,
  token: null
}

// Reducers:
const setAuthedUser = (state, action) => {
  return {
    ...state,
    name: action.payload.name,
    email: action.payload.email,
    token: action.payload.token
  }
}

const logoutAuthedUser = (state) => {
  return {
    ...state,
    name: null,
    email: null,
    token: null
  }
}

// root reducer
const authedUser = (state = initialState, action) => {
	switch (action.type) {
    case 'SET_AUTHED_USER': return setAuthedUser(state, action)
    case 'LOGOUT_AUTHED_USER': return logoutAuthedUser(state)
    default: return state
  }
}

export default authedUser
