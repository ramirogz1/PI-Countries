const initialState = {
  countries: [],
  activities: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES": 
    return {
      ...state,
      countries: action.payload
    }
    case "GET_ACTIVITIES": 
    return {
      ...state,
      activity: action.payload
    }
    default:
      return state;
  }
}

export default rootReducer;
