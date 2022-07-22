import React, { useState } from 'react'
import Pagination from "react-js-pagination"
import '../css/Paging.css'

const Paging = ({currentPage, handlePageChange, count}) => {
  return (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={4}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  )
}

export default Paging