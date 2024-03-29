import React from 'react'
import './search-box.style.css'

export const SearchBox = ({placeholder, onSearchChange}) => {
    return(
        <input className='search'
          type="search"
          placeholder={placeholder}
          onChange={onSearchChange}
        />
    )
}

