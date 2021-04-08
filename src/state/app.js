const initialState = {
  isFirstTime: true,
}

const TOGGLE_FETCH_USER = "TOGGLE_FETCH_USER"

export const toggleFetchUser = isFirstTime => ({
  type: TOGGLE_FETCH_USER,
  isFirstTime,
})

export default (state = initialState, action) => {
    
  switch (action.type) {
    case TOGGLE_FETCH_USER:
      state = { ...state, isFirstTime: action.isFirstTime }
      
      return state
    default:
      return state
  }
}
