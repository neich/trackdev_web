import { fetchGroupUsers } from '../utils/api'
import { setError } from './error'

export const setGroupUsers = (groupUsers) => ({
  type: 'SET_GROUP_USERS',
  payload: {
		groupUsers
  }
})

export const resetGroupUsers = () => ({
  type: 'RESET_GROUP_USERS'
})

export const handleGetGroupUsers = (groupId) => {
	return async (dispatch) => {
		try {
			const response = await fetchGroupUsers(groupId);
			dispatch(setGroupUsers(response))
		}
		catch (error) {
			return dispatch(setError(error.message))
		}
	}
}
