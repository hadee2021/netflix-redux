import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import api from '../redux/api'
import { searchMovieAtom } from '../atom'
import { useRecoilState } from 'recoil'
const API_KEY = process.env.REACT_APP_API_KEY

const Navigation = () => {
  const [query, setQuery] = useState('')
  const[searchedMovie, setSearchedMovie] = useRecoilState(searchMovieAtom)
  const navigate = useNavigate()
  const searchMovie = async () => {
    const searchMovieApi = await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
    setSearchedMovie(searchMovieApi.data.results)
    navigate('/search')
    setQuery('')
  }
  return (
    <div className="navigation">
      <div>
        <div>
          <Link to="/" style={{color:"white"}}> 
            <img width={100} src="/PIC/로고01.png"/> 
          </Link>
        </div>
        <div>
          <Link to="/" style={{color:"white"}}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/movies" style={{color:"white"}}>
            Movies
          </Link>
        </div>
        <div>
          <Link to="/search" style={{color:"white"}}>
            Search
          </Link>
        </div>
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Search" 
          value={query || ''} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="neutral"
          onClick={searchMovie}
        >
          Search
        </Button>
      </div>
    </div>
  )
}

export default Navigation