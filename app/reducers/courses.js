
const initialState = {
  infoUserCourses: null
}

// Reducers:
const setCourses = (state, action) => {
  return {
    ...state,
    infoUserCourses: action.payload.infoUserCourses
  }
}

// root reducer
const courses = (state = initialState, action) => {
	switch (action.type) {
    case 'SET_COURSES': return setCourses(state, action)
    default: return state
  }
}

export default courses
