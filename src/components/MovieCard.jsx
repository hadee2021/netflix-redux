import React from 'react'
import { Rating } from '@mui/material'
import { useSelector } from 'react-redux'
const MovieCard = ({item}) => {
  const { genreList } = useSelector((state) => state.movie)
  return (
    <div
    className='card'
      style={{backgroundImage: "url("+
      `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+
      ")"}}
    >
      <div className='overlay'>
        <h2>{item.title}</h2>
        <div className='genre-badge'>{item.genre_ids.map(id => <div>{genreList.find(item => item.id === id).name}</div>)}</div>
        <div className='rating-div'>
          <Rating name="half-rating-read" defaultValue={item.vote_average} max={10} precision={0.1} readOnly />
          <span className='rating-badge'>{item.vote_average} score</span>
          <span>{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard