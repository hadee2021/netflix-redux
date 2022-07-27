import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchMovieAtom } from '../atom'
import FourPaging from '../components/FourPaging'

const MovieSearch = () => {
  const[searchedMovie] = useRecoilState(searchMovieAtom)

  const [pageItems, setPageItems] = useState(searchedMovie)
  useEffect(() => {
    setPageItems(searchedMovie)
  },[searchedMovie])

  return (
    <div className="center movie-search-page">
      <FourPaging pageItems={pageItems}/>
    </div>
  )
}

export default MovieSearch