import { loginRequestAPI, logoutRequestAPI, fetchUserAuthedCourses } from '../utils/api'
import { setError } from './error'
import { AsyncStorage } from 'react-native'

export const setAuthedUser = (user) => ({
  type: 'SET_AUTHED_USER',
  payload: {
		id: user.id,
    name: user.name,
    email: user.email,
    token: user.token
  }
})

export const logoutAuthedUser = () => ({
  type: 'LOGOUT_AUTHED_USER'
})

export const setAuthedUserCourses = (coursesInfo) => ({
  type: 'SET_AUTHED_USER_COURSES',
  payload: {
		coursesInfo
  }
})

export const resetAuthedUserCourses = () => ({
  type: 'RESET_AUTHED_USER_COURSES',
})

export const handleGetCourses = (userId) => {
	return async (dispatch) => {
		try {
      const response = await fetchUserAuthedCourses(userId)
      dispatch(setAuthedUserCourses(response))
    }
    catch (error) {
      return dispatch(setError(error.message))
    }
	}
}

export const handleLogoutAction = () => {
	return async (dispatch) => {
		try {
      await AsyncStorage.removeItem('userToken')
      await logoutRequestAPI()
      dispatch(logoutAuthedUser())
    }
    catch (error) {
      return dispatch(setError(error.message))
    }
	}
}

export const handleLoginAction = (userEmails, type) => {
	return async (dispatch) => {
		try {
			const response = await loginRequestAPI(userEmails, type);
			if (response.message) {
				console.log('user no exist!')
				dispatch(setError(response.message))
			}
			else if (response.error && response.error.message) {
				console.log('password invalid!')
				dispatch(setError(response.error.message))
			}
			else {
        console.log('Login correcte!')
				await AsyncStorage.setItem('userToken', response.token)
				dispatch(setAuthedUser(response))
			}
		}
		catch (error) {
			return dispatch(setError(error.message))
		}
	}
}
