import React from 'react';
import {connect} from 'react-redux';
import {FETCH_POPULAR_MOVIES_CREATOR, QUERY_MOVIES, QUERY_MOVIES_CREATOR} from '../../redux/actions';
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



  render() {

    let reviewScore = Math.floor(this.props.selectedMovie.vote_average * 10) + "%";
    let releaseDate = moment(this.props.selectedMovie).format('MMMM YYYY');
    let totalVotes = this.props.selectedMovie.vote_count;

    console.log(this.props.selectedMovie, 'From inside movie page');
    return (
      <div className="App">
          <div className="Movie-background-img" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${this.props.selectedMovie.backdrop_path}")`}}></div>
          
          <i className="Movie-back-button fas fa-arrow-left" onClick={() => this.props.history.push('/')}/>
          <div className="Movie-info" style={{display: 'flex'}}>

            {/* {Don't add extra CSS flex, it screws it} */}
            <div className="Movie-page-img-wrapper">
              <div className="Movie-page-img" style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500/${this.props.selectedMovie.poster_path}")`}}></div>
            </div>
  
            <div className="Movie-page-info-wrapper">
              <h2>{this.props.selectedMovie.title}</h2>
              <p className="Movie-page-movie-info">
                Release: {releaseDate} <br />
                User Score: {reviewScore} <br />
                Votes: {totalVotes} 
              </p>
            </div>
          </div>

          <div className="Movie-page-overview">
              <h3>Overview</h3>
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
      fetchPopularMovies: () => dispatch(FETCH_POPULAR_MOVIES_CREATOR()),
      queryMovies: (query:string) => dispatch(QUERY_MOVIES_CREATOR(query))
      }
    }

export default connect(mapStateToProps, mapDispatchToProps) (MoviePage)

