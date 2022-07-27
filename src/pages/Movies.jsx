import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import ClipLoader from 'react-spinners/ClipLoader'
// import MovieCard from '../components/MovieCard'
// import Paging from '../components/Paging'
import FourPaging from '../components/FourPaging'

const Movies = () => {
  const dispatch = useDispatch()
  const {
    popularMovies,
    topRatedMovies,
    upComingMovies,
    loading
  } = useSelector(
    (state) => state.movie
  )
  
  useEffect(() => {
    dispatch(movieAction.getMovies())
  },[])

  // const [currentPage, setCurrentPage] = useState(1)
  // const handlePageChange = (currentPage) => {
  //   setCurrentPage(currentPage)
  // }

  const [pageItems, setPageItems] = useState([
    ...popularMovies.results,
    ...topRatedMovies.results,
    ...upComingMovies.results
  ])
  // const [currentItems, setCurrentItems] = useState([])
  // const [count, setCount] = useState(0)
  // const [indexOfLastItem, setIndexOfLastItem] = useState(0)
  // const [indexOfFirstItem, setIndexOfFirstItem] = useState(0)
  
  // useEffect(() => {
  //   setIndexOfLastItem(4 * currentPage)
  //   setIndexOfFirstItem(4 * (currentPage - 1) + 1)
  //   setCurrentItems(pageItems?.slice(indexOfFirstItem - 1, indexOfLastItem))
  //   setCount(pageItems?.length)
  // },[currentPage, pageItems, indexOfFirstItem])


  const [sortShow, setSortShow] = useState(false)
  const sortSwitch = () => {
    setSortShow(!sortShow)
  }

  const sortAsc = (sortKey) => {
    const newItem = [...pageItems]
    newItem.sort((a, b) => {
      if(a[sortKey] > b[sortKey]) {
        return 1
      }
      if(a[sortKey] < b[sortKey]) {
        return -1
      }
      return 0
    })
    setPageItems(newItem)
  }
  const sortDesc = (sortKey) => {
    const newItem = [...pageItems]
    newItem.sort((a, b) => {
      if(a[sortKey] < b[sortKey]) {
        return 1
      }
      if(a[sortKey] > b[sortKey]) {
        return -1
      }
      return 0
    })
    setPageItems(newItem)
  }

  if(loading) {
    return <ClipLoader color="#ffff" loading={loading}  size={150} />
  }
  return (
    <div className="center movies-page">
      <div className="movies-page-menu">
        <div className="sort" onClick={sortSwitch}>
          Sort
          {
            sortShow 
            ? <KeyboardArrowUpIcon /> 
            : <KeyboardArrowDownIcon />
          }
        </div>
        {
          sortShow &&
          <ul className="sort-ul">
            <li onClick={() => sortAsc("popularity")}>Popularity(Asc)</li>
            <li onClick={() => sortDesc("popularity")}>Popularity(Desc)</li>
            <li onClick={() => sortAsc("release_date")}>Release Day(Asc)</li>
            <li onClick={() => sortDesc("release_date")}>Release Day(Desc)</li>
            <li onClick={() => sortAsc("vote_average")}>Vote(Asc)</li>
            <li onClick={() => sortDesc("vote_average")}>Vote(Desc)</li>
          </ul>
        }
      </div>
      {/* <div className='movies-page-movie'>
        {currentItems?.map((item) => (
          <MovieCard item={item} key={item.id}/>
        ))}
        <Paging 
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          count={count}
        />
      </div> */}
      <FourPaging pageItems={pageItems}/>
    </div>
  )
}

export default Movies