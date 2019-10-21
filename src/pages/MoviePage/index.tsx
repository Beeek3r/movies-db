import React from 'react';
import {connect} from 'react-redux';
import {FETCH_POPULAR_MOVIES_CREATOR, QUERY_MOVIES, QUERY_MOVIES_CREATOR} from '../../redux/actions';

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
    return (
      <div className="App">
          <div className="Movie-background-img" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${this.props.selectedMovie.backdrop_path}")`}}></div>
          <i className="Movie-back-button fas fa-arrow-left" onClick={() => this.props.history.push('/')}/>
          <div className="Movie-info">
              <h1>{this.props.selectedMovie.title}</h1>
              <p>{this.props.selectedMovie.overview}</p>
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

