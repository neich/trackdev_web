
const initialState = {
  infoUserSprints: null
}

// Reducers:
const setSprints = (state, action) => {
  return {
    ...state,
    infoUserSprints: action.payload.infoUserSprints
  }
}

const resetSprints = (state) => {
  return {
    ...state,
    infoUserSprints: null
  }
}

// root reducer
const sprints = (state = initialState, action) => {
	switch (action.type) {
    case 'SET_SPRINTS': return setSprints(state, action)
    case 'RESET_SPRINTS': return resetSprints(state)
    default: return state
  }
}

export default sprints
