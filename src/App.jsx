import './App.css'
import  { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import Navigation from './components/Navigation'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import MovieSearch from './pages/MovieSearch'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:id" element={<MovieDetail />}/>
          <Route path="/search" element={<MovieSearch />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
