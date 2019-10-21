// Components
export interface MovieItemInterface {
    // id: number,
    // original_title: string,
    // poster_path: string, 
    // backdrop_path: string,
    // vote_average: number,
    // overview: string,
    // release_date: string,
    movieInfo: any;
    selectMovie: (movieInfo:any) => void,
    history: any
  }

export interface MoviePageInterface {
    popularMoviesList: Array<MovieItemInterface>,
    queryMoviesList: Array<MovieItemInterface>,
    popularMoviesView: boolean
    history: any
  
    fetchPopularMovies: () => void,
    queryMovies: any,
    selectMovie: (movieInfo: any) => void
}


export interface SearchBarInterface {
  queryMovies: (query:string) => void
}



  