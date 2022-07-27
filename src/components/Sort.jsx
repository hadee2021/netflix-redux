import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const Sort = ({pageItems, setPageItems}) => {
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
  return (
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
  )
}

export default Sort