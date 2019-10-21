import React from 'react'
import {MovieItemInterface} from '../../interfaces';
import UnavaliablePoster from '../../assets/unavailable.png'
import moment from 'moment';

const MoviesItem = (props: MovieItemInterface) => {
    let releaseDate = moment(props.movieInfo.release_date).format('MMMM YYYY');

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
            <p className="Movie-date">{releaseDate}</p>
        </div>
    )
}

export default MoviesItem;
