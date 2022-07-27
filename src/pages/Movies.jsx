import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import ClipLoader from 'react-spinners/ClipLoader'
import MovieCard from '../components/MovieCard'
import Paging from '../components/Paging'

const Movies = () => {

  const dispatch = useDispatch()
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector(
    (state) => state.movie
  )
  
  useEffect(() => {
    dispatch(movieAction.getMovies())
  },[])

  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage)
  }

  const [pageItems, setPageItems] = useState(popularMovies.results)
  const [currentItems, setCurrentItems] = useState([])
  const [count, setCount] = useState(0)
  const [indexOfLastItem, setIndexOfLastItem] = useState(0)
  const [indexOfFirstItem, setIndexOfFirstItem] = useState(0)
  
  useEffect(() => {
    setIndexOfLastItem(4 * currentPage)
    setIndexOfFirstItem(4 * (currentPage - 1) + 1)
    setCurrentItems(pageItems?.slice(indexOfFirstItem - 1, indexOfLastItem))
    setCount(pageItems?.length)
  },[currentPage, pageItems, indexOfFirstItem])


  const [sortShow, setSortShow] = useState(false)
  const sortSwitch = () => {
    setSortShow(!sortShow)
  }
  const [filterShow, setFilterShow] = useState(false)
  const filterSwitch = () => {
    setFilterShow(!filterShow)
  }

  if(loading) {
    return <ClipLoader color="#ffff" loading={loading}  size={150} />
  }
  return (
    <div className='center movies-page'>
      <div className='movies-page-menu'>
        <div className='sort' onClick={sortSwitch}>
          Sort
          {sortShow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {sortShow &&
          <ul className='sort-ul'>
            <li onClick={() => setPageItems(popularMovies.results)}>popularMovies(Asc)</li>
            <li onClick={() => setPageItems(popularMovies.results)}>popularMovies(Desc)</li>
            <li onClick={() => setPageItems(topRatedMovies.results)}>topRatedMovies(Asc)</li>
            <li onClick={() => setPageItems(topRatedMovies.results)}>topRatedMovies(Desc)</li>
            <li onClick={() => setPageItems(upComingMovies.results)}>upComingMovies(Asc)</li>
            <li onClick={() => setPageItems(upComingMovies.results)}>upComingMovies(Desc)</li>
          </ul>
        }
        <div className='filter' onClick={filterSwitch}>
          Filter
          {filterShow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {filterShow &&
          <ul>
            <li>filter</li>
          </ul>
        }
      </div>
      <div className='movies-page-movie'>
        {currentItems?.map((item) => (
          <MovieCard item={item} key={item.id}/>
        ))}
        <Paging 
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          count={count}
        />
      </div>
    </div>
  )
}

export default Movies