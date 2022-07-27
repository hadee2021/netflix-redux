import React, { useEffect, useState } from 'react'
import { Rating, Typography, Button } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import { Movie } from '@mui/icons-material'
import { movieDetailAction } from '../redux/actions/movieDetailAction'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MovieSlide from '../components/MovieSlide'
import TrailerModal from '../components/TrailerModal'


const MovieDetail = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(movieDetailAction.getDetails(id))
  }, [id])

  const {
    reviews,
    detail,
    relate,
    video
  } = useSelector(state => state.review)

  const [tab, setTab] = useState('')
  const reviewSwitch = () => {
    setTab('REVIEWS')
  }
  const relatedMoviesSwitch = () => {
    setTab('RELATED MOVIES')
  }
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className="center movie-detail-page">
      <div className="poster-info-area">
        <div>
          <img 
            width={450} 
            src={`https://image.tmdb.org/t/p/original///${detail.poster_path}`} 
          />
        </div>
        <div>
          <div>
            {detail.genres?.map((genre) => (
              <span key={genre.id} className="item-badge">
                {genre.name}
              </span>
            ))}
          </div>
          <h2 className="movie-detail-div-layout">
            {detail.title}
          </h2>
          <div className="movie-detail-div-layout">
            {detail.overview}
          </div>
          <div className="movie-detail-rating-area">
            <Rating
              name="half-rating-read"
              key={detail.id}
              defaultValue={detail.vote_average}
              max={10}
              precision={0.1}
              readOnly 
            />
            <span className="item-badge">
              {detail.vote_average} score
            </span>
          </div>
          <div className="movie-detail-div-layout">
            <Typography 
              variant="h4" 
              component="h5" 
              style={{ marginTop: "25px"}}
            >
              <PeopleIcon sx={{ fontSize: 30 }} /> 
              <span>{detail.popularity}</span>
            </Typography>
            <span>{detail.adult ? "청불" : "Under 18"}</span>
          </div>
          <div className="movie-detail-time-data movie-detail-div-layout">
            <div>
              <span className="item-badge">release_date</span>
              <span>{detail.release_date}</span>
            </div>
            <div>
              <span className="item-badge">runtime</span>
              <span>{detail.runtime} min</span>
            </div>
          </div>
          <Typography 
            variant="h6" 
            component="h6" 
            style={{ marginTop: "25px"}}
          >
            <Movie sx={{ fontSize: 20 }} /> 
            <Button onClick={handleOpen}>Watch Trailer</Button>
          </Typography>
          {
            open && 
            <TrailerModal 
              setOpen={setOpen} 
              videoArr={video.results} 
            />
          }
        </div>
      </div>
      <div className="movie-detail-footer">
        <ul>
          <li 
            onClick={reviewSwitch} 
            className={ tab === "REVIEWS"? "btn-toggle-on": "btn-toggle-off" }
          >
            REVIEWS ({reviews.results?.length})
          </li>
          <li 
            onClick={relatedMoviesSwitch } 
            className={ tab === "RELATED MOVIES"? "btn-toggle-on": "btn-toggle-off"}
          >
            RELATED MOVIES ({relate.results?.length})
          </li>
        </ul>
        <div className="movie-detail-footer-screen">
          {tab === "REVIEWS" && 
            <div className="review-area">
              {
                reviews.results?.map(review => (
                <div key={review.id} className="review-area-item">
                  {review.content}
                </div>
              ))}
            </div>
          }
          {tab === "RELATED MOVIES" &&
            <div className="relate-area">
              <MovieSlide movies={relate}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default MovieDetail