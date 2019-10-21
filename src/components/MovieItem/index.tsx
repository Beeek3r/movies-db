import React from 'react'
import {MovieItemInterface} from '../../interfaces';
import UnavaliablePoster from '../../assets/unavailable.png'

// const MoviesItem = (props: MovieItemInterface) => {
const MoviesItem = (props: MovieItemInterface) => {
    console.log(props)

  

    return (
        <div className="Movie-tile" onClick={()=> {
            props.history.push(`/movie/${props.movieInfo.id}`);
            props.selectMovie(props.movieInfo);
        }}>

            {props.movieInfo.poster_path ? 
            <img className="Movie-image" src={`https://image.tmdb.org/t/p/w500/${props.movieInfo.poster_path}`} />
            :
            <img className="Movie-image" src={UnavaliablePoster} />}

            <p className="Movie-title">{props.movieInfo.original_title}</p>
            <p className="Movie-date">{props.movieInfo        .release_date}</p>
        </div>
    )
}

export default MoviesItem;
