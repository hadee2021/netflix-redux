import api from '../api'

const API_KEY = process.env.REACT_APP_API_KEY

function getReviews(id) {
  return async (dispatch) => {
    try{
      const reviewApi = api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
      
      let [movieReview] = await Promise.all([
        reviewApi
      ]) // 전부다 올때까지 기다려
      
      dispatch({
        type: "GET_REVIEWS_SUCCESS",
        payload: { 
          reviews: movieReview.data
        }
      })
    }catch(error) {
      dispatch({type: "GET_REVIEWS_FAILURE"})
    }
    
  }
}

export const movieDetailAction = {
  getReviews
}