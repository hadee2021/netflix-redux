import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import ClipLoader from 'react-spinners/ClipLoader'
import MovieCard from '../components/MovieCard'

const Movies = () => {

  const [sortShow, setSortShow] = useState(false)
  const sortSwitch = () => {
    setSortShow(!sortShow)
  }
  const [filterShow, setFilterShow] = useState(false)
  const filterSwitch = () => {
    setFilterShow(!filterShow)
  }

  const dispatch = useDispatch()
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector(
    (state) => state.movie
  )
  useEffect(() => {
    dispatch(movieAction.getMovies())
  },[])

  if(loading) {
    return <ClipLoader color="#ffff" loading={loading}  size={150} />
  }
  return (
    <div className='center movies-page'>
      <div className='movies-page-sort'>
        <div className='sort' onClick={sortSwitch}>
          Sort
          {sortShow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {sortShow &&
          <ul>
            <li>popularMovies</li>
          </ul>
        }
        <div className='filter' onClick={filterSwitch}>
          Filter
          {filterShow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {filterShow &&
          <ul>
            <li>fil</li>
          </ul>
        }
      </div>
      <div className='movies-page-movie'>
        {popularMovies.results.map((item) => (
          <MovieCard item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Movies