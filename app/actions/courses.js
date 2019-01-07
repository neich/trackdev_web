import { fetchCourses } from '../utils/api'
import { setError } from './error'


export const setCourses = (infoUserCourses) => ({
  type: 'SET_COURSES',
  payload: {
		infoUserCourses
  }
})

export const resetCourses = () => ({
  type: 'RESET_COURSES'
})

export const setSelectedCourse = (selectedCourse) => ({
  type: 'SET_SELECTED_COURSE',
  payload: {
		selectedCourse
  }
})

export const resetSelectedCourse = () => ({
  type: 'RESET_SELECTED_COURSE'
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
