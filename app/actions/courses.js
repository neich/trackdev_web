import { fetchCourses } from '../utils/api'
import { setError } from './error'


export const setCourses = (infoUserCourses) => ({
  type: 'SET_COURSES',
  payload: {
		infoUserCourses
  }
})

export const handleGetCourses = (id) => {
	return async (dispatch) => {
		try {
			const response = await fetchCourses(id);
			dispatch(setCourses(response))
		}
		catch (error) {
			return dispatch(setError(error.message))
		}
	}
}
