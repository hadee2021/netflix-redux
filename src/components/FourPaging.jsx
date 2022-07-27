import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Paging from './Paging'

const FourPaging = ({
  pageItems
  }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (currentPage) => {
      setCurrentPage(currentPage)
    }
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

  return (
    <div className="movie-search-items">
      {currentItems?.map((item, index) => (
        <MovieCard item={item} key={item.id + index}/>
      ))}
      <Paging 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        count={count}
      />
    </div>
  )
}

export default FourPaging