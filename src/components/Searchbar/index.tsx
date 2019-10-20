import React from 'react'
import {SearchBarInterface} from '../../interfaces'

const Searchbar = (props: SearchBarInterface) => {
  console.log(`from seachbar`, props)

    return (
        <div className="Search">
          <input className="Search-input" type="text" placeholder="Search for movies" onChange={(e) => props.queryMovies(e.target.value)}/>
          <button className="Search-button">
            <i className="fa fa-search" />
          </button>
        </div>
    )
}

export default Searchbar
