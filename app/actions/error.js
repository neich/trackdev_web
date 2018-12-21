
export const setError = (error) => ({
  type: 'REQUEST_ERROR',
  payload: {
    message: error
  }
})

export const removeError = () => ({
	type: 'REMOVE_ERROR'
})
