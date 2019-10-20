interface State {
    popularMoviesList: Array<object>,
    queryMoviesList: Array<object>,
    popularMoviesView: boolean
}

// https://api.themoviedb.org/3/trending/movie/week?api_key=10ed85ef914c6fcc68550f543b4fceb6

const intialState: State = {
    popularMoviesList: [],
    queryMoviesList: [],
    popularMoviesView: true
}

export default intialState