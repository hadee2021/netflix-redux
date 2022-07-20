let initialState = {
  reviews: {},
  detail: {},
  relate: {},
  video: {},
}
function movieDetailReducer(state=initialState, action) {
  let {type, payload} = action
  switch(type) {
    case "GET_DETAIL_SUCCESS":
      return {
        ...state,
        reviews: payload.reviews,
        detail: payload.detail,
        relate: payload.relate,
        video: payload.video
      }
    case "GET_DETAIL_FAILURE":
      return {...state}
    default:
      return {...state}
  }
}

export default movieDetailReducer