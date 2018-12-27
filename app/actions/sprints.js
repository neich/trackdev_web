import { fetchSprints } from '../utils/api'
import { setError } from './error'


export const setSprints = (infoUserSprints) => ({
  type: 'SET_SPRINTS',
  payload: {
		infoUserSprints
  }
})

export const resetSprints = () => ({
  type: 'RESET_SPRINTS'
})

export const handleGetSprints = (userId, courseId) => {
	return async (dispatch) => {
		try {
			const response = await fetchSprints(userId, courseId);
			dispatch(setSprints(response))
		}
		catch (error) {
			return dispatch(setError(error.message))
		}
	}
}
