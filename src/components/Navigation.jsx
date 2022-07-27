import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <div>
          <Link to="/" style={{color:"white"}}> 
            <img width={100} src="/PIC/로고01.png"/> 
          </Link>
        </div>
        <div>
          <Link to="/" style={{color:"white"}}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/movies" style={{color:"white"}}>
            Movies
          </Link>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Search" />
        <Button 
          variant="contained" 
          color="neutral"
        >
          Search
        </Button>
      </div>
    </div>
  )
}

export default Navigation