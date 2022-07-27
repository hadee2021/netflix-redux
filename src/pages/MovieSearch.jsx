import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchMovieAtom } from '../atom'
import FourPaging from '../components/FourPaging'
import MovieCard from '../components/MovieCard'
import Paging from '../components/Paging'

const MovieSearch = () => {
  const[searchedMovie] = useRecoilState(searchMovieAtom)
  
  // const [currentPage, setCurrentPage] = useState(1)
  // const handlePageChange = (currentPage) => {
  //   setCurrentPage(currentPage)
  // }

  const [pageItems, setPageItems] = useState(searchedMovie)
  useEffect(() => {
    setPageItems(searchedMovie)
  },[searchedMovie])
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

  return (
    <div className="center movie-search-page">
      {/* <div className="movie-search-container">
        <div className="movie-search-items">
          {currentItems?.map((item) => (
            <MovieCard item={item} key={item.id}/>
          ))}
        </div>
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

export default MovieSearch