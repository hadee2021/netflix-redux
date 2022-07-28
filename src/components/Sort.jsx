import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const Sort = ({pageItems, setPageItems}) => {
  const [sortShow, setSortShow] = useState(false)
  const sortSwitch = () => {
    setSortShow(!sortShow)
  }

  const sortItem = (sortKey, desc) => {
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
    if(desc) {
      newItem.reverse()
    }
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
          <li onClick={() => sortItem("popularity")}>Popularity(Asc)</li>
          <li onClick={() => sortItem("popularity", "desc")}>Popularity(Desc)</li>
          <li onClick={() => sortItem("release_date")}>Release Day(Asc)</li>
          <li onClick={() => sortItem("release_date", "desc")}>Release Day(Desc)</li>
          <li onClick={() => sortItem("vote_average")}>Vote(Asc)</li>
          <li onClick={() => sortItem("vote_average", "desc")}>Vote(Desc)</li>
        </ul>
      }
    </div>
  )
}

export default Sort