// Components
export interface MovieItemInterface {
    id: number,
    original_title: string,
    poster_path: string, 
    backdrop_path: string,
    vote_average: number,
    overview: string,
    release_date: string
  }

export interface MoviePageInterface {
    popularMoviesList: Array<MovieItemInterface>,
    queryMoviesList: Array<MovieItemInterface>,
    popularMoviesView: boolean
  
    fetchPopularMovies: () => void,
    queryMovies: any
}


export interface SearchBarInterface {
  queryMovies: (query:string) => void
}



  