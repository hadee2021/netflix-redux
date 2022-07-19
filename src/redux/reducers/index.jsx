import { combineReducers } from "redux"
import movieReducer from "./movieReducer"
import movieDetailReducer from "./movieDetailReducer"

export default combineReducers({
  movie: movieReducer,
  review: movieDetailReducer
})