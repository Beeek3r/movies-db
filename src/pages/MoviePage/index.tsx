import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class MoviePage extends React.Component <any> {
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    if (this.props.selectedMovie === null) {
      this.props.history.push('/');
    }
  }

  // Redirects back to home page
  goBack() {
    this.props.history.push('/');
  }

  render() {
    const {vote_count, backdrop_path, poster_path} = this.props.selectedMovie
    let reviewScore = Math.floor(this.props.selectedMovie.vote_average * 10) + "%";
    let releaseDate = moment(this.props.selectedMovie).format('MMMM YYYY');

    return (
      <div className="App">
          <div className="Movie-background-img" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop_path}")`}}></div>
          
          <i className="Movie-back-button fas fa-arrow-left" onClick={() => this.goBack()}/>
          <div className="Movie-info">

            {/* {Don't add extra CSS flex, it screws it} */}
            <div className="Movie-page-img-wrapper">
              <div className="Movie-page-img" style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500${poster_path}")`}}></div>
            </div>
  
            <div className="Movie-page-info-wrapper">
              <h2>{this.props.selectedMovie.title}</h2>
              <p className="Movie-page-movie-info">
                Release: {releaseDate} <br />
                User Score: {reviewScore} <br />
                Votes: {vote_count}
              </p>
            </div>
          </div>

          <div className="Movie-page-overview">
              <h3 className="Movie-page-movie-info-subtitle">Overview</h3>
              <p className="Movie-page-movie-info">{this.props.selectedMovie.overview}</p>
          </div>
      </div>
    )
  }
}


  // Which props of my global application state do i want in this component and then to which to local props in this components do i want to map them
  const mapStateToProps = (state:any) => {
    return state
  }

// Probs don't need this, delete later
  const mapDispatchToProps = (dispatch:any) => {
    return {
      // fetchPopularMovies: () => dispatch(FETCH_POPULAR_MOVIES_CREATOR()),
      // queryMovies: (query:string) => dispatch(QUERY_MOVIES_CREATOR(query))
      }
    }

export default connect(mapStateToProps, mapDispatchToProps) (MoviePage)

