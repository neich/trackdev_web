import { fetchTasks } from '../utils/api'
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
