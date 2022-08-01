import api from '../api'

const API_KEY = process.env.REACT_APP_API_KEY

function getDetails(id) {
  return async (dispatch) => {
    try{
      const reviewApi = api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
      const detailApi = api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
      const relatedApi = api.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
      const videoApi = api.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      let [movieReview, detailData, relateData, videoData] = await Promise.all([
        reviewApi,
        detailApi,
        relatedApi,
        videoApi
      ]) // 전부다 올때까지 기다려
      
      dispatch({
        type: "GET_DETAIL_SUCCESS",
        payload: { 
          reviews: movieReview.data,
          detail: detailData.data,
          relate: relateData.data,
          video: videoData.data
        }
      })
    }
    catch(error) {
      dispatch({type: "GET_DETAIL_FAILURE"})
    }
  }
}

export const movieDetailAction = {
  getDetails
}