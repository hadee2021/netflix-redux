import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader"

const Home = () => {
  const dispatch = useDispatch()
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector(
    (state) => state.movie
  )
  useEffect(() => {
    dispatch(movieAction.getMovies())
  },[])
  /*loading이 true이면 아직 데이터 도착 전이고 로딩 스피너 보임
    loading이 false이면 데이터 도착 후 로딩스피너 안보임 혹은 애러났을때
  */
  if(loading) {
    return <ClipLoader color="#ffff" loading={loading}  size={150} />
  }
  return (
    <div>
      
      <Banner movie={popularMovies.results[6]}/>

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies}/>
    </div>
  )
}

export default Home