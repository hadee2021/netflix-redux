let initialState = {
  reviews: {},
}
function movieDetailReducer(state=initialState, action) {
  let {type, payload} = action
  switch(type) {
    case "GET_REVIEWS_SUCCESS":
      return {
        ...state,
        reviews: payload.reviews,
      }
    case "GET_REVIEWS_FAILURE":
      return {...state}
    default:
      return {...state}
  }
}

export default movieDetailReducer