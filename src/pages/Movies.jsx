import React, { useEffect, useState } from 'react'
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

  if(loading) {
    return <ClipLoader color="#ffff" loading={loading}  size={150} />
  }
  return (
    <div className="center movies-page">
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