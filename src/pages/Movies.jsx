import React, { useEffect, useState } from 'react'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import ClipLoader from 'react-spinners/ClipLoader'
import FourPaging from '../components/FourPaging'
import Sort from '../components/Sort'

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

  const [pageItems, setPageItems] = useState([
    ...popularMovies.results,
    ...topRatedMovies.results,
    ...upComingMovies.results
  ])

  // const [sortShow, setSortShow] = useState(false)
  // const sortSwitch = () => {
  //   setSortShow(!sortShow)
  // }

  // const sortAsc = (sortKey) => {
  //   const newItem = [...pageItems]
  //   newItem.sort((a, b) => {
  //     if(a[sortKey] > b[sortKey]) {
  //       return 1
  //     }
  //     if(a[sortKey] < b[sortKey]) {
  //       return -1
  //     }
  //     return 0
  //   })
  //   setPageItems(newItem)
  // }
  // const sortDesc = (sortKey) => {
  //   const newItem = [...pageItems]
  //   newItem.sort((a, b) => {
  //     if(a[sortKey] < b[sortKey]) {
  //       return 1
  //     }
  //     if(a[sortKey] > b[sortKey]) {
  //       return -1
  //     }
  //     return 0
  //   })
  //   setPageItems(newItem)
  // }

  if(loading) {
    return <ClipLoader color="#ffff" loading={loading}  size={150} />
  }
  return (
    <div className="center movies-page">
      {/* <div className="movies-page-menu">
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
      </div> */}
      <Sort 
        pageItems={pageItems} 
        setPageItems={setPageItems}
      />
      <FourPaging 
        pageItems={pageItems}
      />
    </div>
  )
}

export default Movies