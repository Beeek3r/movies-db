import React from 'react';
import logo from '../../assets/logo.png'
import {connect} from 'react-redux';
import MovieItem from '../../components/MovieItem';
import Searchbar from '../../components/Searchbar';
import {MoviePageInterface} from '../../interfaces';
import {FETCH_POPULAR_MOVIES_CREATOR, QUERY_MOVIES, QUERY_MOVIES_CREATOR, SELECT_MOVIE} from '../../redux/actions';
const axios = require('axios').default;

// <any> make a interface for that as it specifices check the types on this home page
class Home extends React.Component <MoviePageInterface> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* Remove later */}
          <img src={logo} alt="Movies dB's logo" onClick={() => this.props.fetchPopularMovies()}/> 
        </div>

        <Searchbar queryMovies={this.props.queryMovies}/>

        <div className="Movies">
          <h2 className="Movies-category">{this.props.popularMoviesView? "Popular Movies" : "Results"}</h2>
          <div className="Movies-block">

            {this.props.popularMoviesView ? 
              this.props.popularMoviesList.map((movie) => <MovieItem movieInfo={movie} selectMovie={this.props.selectMovie} history={this.props.history}/>) 
              : 
              this.props.queryMoviesList.map((movie) => <MovieItem movieInfo={movie} selectMovie={this.props.selectMovie} history={this.props.history}/>) }

          </div>
        </div>
      </div>
    )
  }
}

  // Which props of my global application state do i want in this component and then to which to local props in this components do i want to map them
  const mapStateToProps = (state:any) => {
    return state
  }

  // Which actions of my global application state do i want in this component and then to which to local actions in this components do i want to map them
  const mapDispatchToProps = (dispatch:any) => {
    return {
      fetchPopularMovies: () => dispatch(FETCH_POPULAR_MOVIES_CREATOR()),
      queryMovies: (query:string) => dispatch(QUERY_MOVIES_CREATOR(query)),
      selectMovie: (movieInfo:any) => dispatch(SELECT_MOVIE(movieInfo))
      }
    }

export default connect(mapStateToProps, mapDispatchToProps) (Home)

