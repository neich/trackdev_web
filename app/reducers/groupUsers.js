
const initialState = null

// Reducers:

const setGroupUsers = (state, action) => {
  return [
    ...action.payload.groupUsers
  ]
}

const resetGroupUsers = () => {
  return null
}

// root reducer
const groupUsers = (state = initialState, action) => {
	switch (action.type) {
    case 'SET_GROUP_USERS': return setGroupUsers(state, action)
    case 'RESET_GROUP_USERS': return resetGroupUsers()
    default: return state
  }
}

export default groupUsers
