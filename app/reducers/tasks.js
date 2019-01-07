
const initialState = {
  infoTasks: null,
  todoTasks: null
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

const setTodoTasks = (state, action) => {
  return {
    ...state,
    todoTasks: action.payload.todoTasks
  }
}

const resetTodoTasks = (state) => {
  return {
    ...state,
    todoTasks: null
  }
}

// root reducer
const tasks = (state = initialState, action) => {
	switch (action.type) {
    case 'SET_TASKS': return setTasks(state, action)
    case 'RESET_TASKS': return resetTasks(state)
    case 'SET_TODO_TASKS': return setTodoTasks(state, action)
    case 'RESET_TODO_TASKS': return resetTodoTasks(state)
    default: return state
  }
}

export default tasks
