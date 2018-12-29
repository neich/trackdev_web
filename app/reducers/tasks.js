
const initialState = {
  infoTasks: null
}

// Reducers:
const setTasks = (state, action) => {
  return {
    ...state,
    infoTasks: action.payload.infoTasks
  }
}

const resetTasks = (state) => {
  return {
    ...state,
    infoTasks: null
  }
}

// root reducer
const tasks = (state = initialState, action) => {
	switch (action.type) {
    case 'SET_TASKS': return setTasks(state, action)
    case 'RESET_TASKS': return resetTasks(state)
    default: return state
  }
}

export default tasks
