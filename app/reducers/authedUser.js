
const initialState = {
  id: null,
  name: null,
  email: null,
  token: null,
  coursesInfo: null
}

// Reducers:
const setAuthedUser = (state, action) => {
  return {
    ...state,
    id: action.payload.id,
    name: action.payload.name,
    email: action.payload.email,
    token: action.payload.token
  }
}

const logoutAuthedUser = (state) => {
  return {
    ...state,
    id: null,
    name: null,
    email: null,
    token: null,
    coursesInfo: null
  }
}

const setAuthedUserCourses = (state, action) => {
  return {
    ...state,
    coursesInfo: action.payload.coursesInfo
  }
}

// root reducer
const authedUser = (state = initialState, action) => {
	switch (action.type) {
    case 'SET_AUTHED_USER': return setAuthedUser(state, action)
    case 'LOGOUT_AUTHED_USER': return logoutAuthedUser(state)
    case 'SET_AUTHED_USER_COURSES': return setAuthedUserCourses(state, action)
    default: return state
  }
}

export default authedUser
