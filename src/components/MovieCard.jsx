import React from 'react'
import { Rating } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { movieDetailAtom, genreAtom } from '../atom'

const MovieCard = ({item}) => {
  const { genreList } = useSelector((state) => state.movie)
  const navigate = useNavigate()
  const [movieDetail, setMovieDetail] = useRecoilState(movieDetailAtom)
  const [genre, setGenre] = useRecoilState(genreAtom)
  const moveToDetail = (id) => {
    setMovieDetail({...item})
    const genreArr = item.genre_ids.map(id => genreList.find(item => item.id === id).name)
    setGenre([...genreArr])
    navigate(`/movies/${id}`)
  }

  

  return (
    <div
      className='card'
      style={{backgroundImage: "url("+
      `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+
      ")"}}
      onClick={() => moveToDetail(item.id)}
    >
      <div className='overlay'>
        <h2>{item.title}</h2>
        <div className='genre-badge'>
          {item.genre_ids.map((id, index) => <div key={index}>{genreList.find(item => item.id === id).name}</div>)}
        </div>
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