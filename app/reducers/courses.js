
const initialState = {
  infoUserCourses: null,
  selectedCourse: null
}

// Reducers:
const setCourses = (state, action) => {
  return {
    ...state,
    infoUserCourses: action.payload.infoUserCourses
  }
}

const resetCourses = (state) => {
  return {
    ...state,
    infoUserCourses: null
  }
}

const setSelectedCourse = (state, action) => {
  return {
    ...state,
    selectedCourse: action.payload.selectedCourse
  }
}

const resetSelectedCourse = (state) => {
  return {
    ...state,
    selectedCourse: null
  }
}

// root reducer
const courses = (state = initialState, action) => {
	switch (action.type) {
    case 'SET_COURSES': return setCourses(state, action)
    case 'RESET_COURSES': return resetCourses(state)
    case 'SET_SELECTED_COURSE': return setSelectedCourse(state, action)
    case 'RESET_SELECTED_COURSE': return resetSelectedCourse(state)
    default: return state
  }
}

export default courses
