import { fetchTasks, fetchTodoTasks } from '../utils/api'
import { setError } from './error'

export const setTasks = (infoTasks) => ({
  type: 'SET_TASKS',
  payload: {
		infoTasks
  }
})

export const resetTasks = () => ({
  type: 'RESET_TASKS'
})

export const setTodoTasks = (todoTasks) => ({
  type: 'SET_TODO_TASKS',
  payload: {
		todoTasks
  }
})

export const resetTodoTasks = () => ({
  type: 'RESET_TODO_TASKS'
})

export const handleGetTodoTasks = (userId) => {
	return async (dispatch) => {
		try {
			const response = await fetchTodoTasks(userId);
			dispatch(setTodoTasks(response))
		}
		catch (error) {
			return dispatch(setError(error.message))
		}
	}
}

export const handleGetTasks = (storyId) => {
	return async (dispatch) => {
		try {
			const response = await fetchTasks(storyId);
			dispatch(setTasks(response))
		}
		catch (error) {
			return dispatch(setError(error.message))
		}
	}
}
