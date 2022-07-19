import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { movieDetailAtom, genreAtom } from '../atom'
import { Rating, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import { movieDetailAction } from '../redux/actions/movieDetailAction'
import { useDispatch, useSelector } from 'react-redux'


const MovieDetail = () => {
  const [movieDetail] = useRecoilState(movieDetailAtom)
  const [genre] = useRecoilState(genreAtom)
  console.log('movieDetail', movieDetail)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(movieDetailAction.getReviews(movieDetail.id))
  }, [])
  const {reviews} = useSelector(state => state.review)
  console.log('reviews', reviews)

  return (
    <div className='center movie-detail-page'>
      <div className='poster-info-area'>
        <div>
          <img width={450} src={`https://image.tmdb.org/t/p/original///${movieDetail.poster_path}`} />
        </div>
        <div>
          <div>
            {genre.map((vector, index) => (<span key={index} className="rating-badge">{vector}</span>))}
          </div>
          <h2 className='movie-detail-div-layout'>{movieDetail.title}</h2>
          <div className='movie-detail-div-layout'>
            {movieDetail.overview}
          </div>
          <div className='movie-detail-rating-area'>
            <Rating name="half-rating-read" defaultValue={movieDetail.vote_average} max={10} precision={0.1} readOnly />
            <span className='rating-badge'>{movieDetail.vote_average} score</span>
          </div>
          <Typography variant="h4" component="h5" style={{ marginTop: '25px'}}>
            <PeopleIcon sx={{ fontSize: 30 }} /> <span>{movieDetail.popularity}</span>
          </Typography>
          <span>{movieDetail.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
      <div className='review-area'>
        리뷰
      </div>
    </div>
  )
}

export default MovieDetail