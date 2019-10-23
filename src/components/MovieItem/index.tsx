import React from 'react'
import {MovieItemInterface} from '../../interfaces';
import UnavaliablePoster from '../../assets/unavailable.png'
import moment from 'moment';

const MoviesItem = (props: MovieItemInterface) => {
    const {id,original_title, poster_path} = props.movieInfo;
    let releaseDate = moment(props.movieInfo.release_date).format('MMMM YYYY');
    let score = Math.floor(props.movieInfo.vote_average * 10);

    // User clicks on movie tile
    let selectMovie = () => {
        props.history.push(`/movie/${id}`);
        props.selectMovie(props.movieInfo);
    }

    return (
        <div className="Movie-tile" onClick={()=> {selectMovie()}}>

            {props.movieInfo.poster_path ? 
            <img className="Movie-image" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            :
            <img className="Movie-image" src={UnavaliablePoster} />}

            <div className={`Movie-upvote ${scoreColour(score)}`}>{score}%</div>

            <p className="Movie-title">{original_title}</p>
            <p className="Movie-date">{releaseDate}</p>
        </div>
    )
}

let scoreColour = (score:number) => {
    if (score < 50) return "Movie-upvote-low"
    if (score < 75 && score > 50)  return "Movie-upvote-med"
    if (score > 75) return "Movie-upvote-high"
}

export default MoviesItem;
