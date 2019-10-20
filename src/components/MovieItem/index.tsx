import React from 'react'
import {MovieItemInterface} from '../../interfaces';
import UnavaliablePoster from '../../assets/unavailable.png'

const MoviesItem = (props: MovieItemInterface) => {
    const {id,original_title, poster_path, backdrop_path, vote_average, overview, release_date} = props;
    return (
        <div className="Movie-tile">

                {poster_path ? 
                <img className="Movie-image" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                :
                <img className="Movie-image" src={UnavaliablePoster} />}

              <p className="Movie-title">{original_title}</p>
              <p className="Movie-date">{release_date}</p>
        </div>
    )
}

export default MoviesItem;
