const axios = require('axios').default;

// Fetches an array of of trending movies of this week
export const FETCH_POPULAR_MOVIES_CREATOR = () => {
    return (dispatch:any) => {
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=10ed85ef914c6fcc68550f543b4fceb6')
        .then((res:any) => dispatch(FETCH_POPULAR_MOVIES(res.data.results)))
        .catch((err:any) => console.log(err))
    }
 } 

export const FETCH_POPULAR_MOVIES = (payload: any) => {
    return {
        type: "FETCH_POPULAR_MOVIES_SUCCESS",
        payload: payload
    }
}

// Queries movies 
export const QUERY_MOVIES_CREATOR = (searchQuery:string) => {
    return (dispatch:any) => {
        if (searchQuery === '') {
            dispatch(FETCH_POPULAR_MOVIES_CREATOR());
        } else {
            let encodedSearchQuery = encodeURIComponent(searchQuery);
            axios(`https://api.themoviedb.org/3/search/movie?api_key=10ed85ef914c6fcc68550f543b4fceb6&query=${encodedSearchQuery}&page=1`)
            .then((res:any) => {
                console.log(res);
                dispatch(QUERY_MOVIES(res.data.results));
            })
        }
    }
}

export const QUERY_MOVIES = (payload: any) => {
    return {
        type: "QUERY_MOVIES",
        payload: payload,
    }
}

// Selecting Movie
export const SELECT_MOVIE = (movieInfo:any) => {
    return {
        type: "SELECT_MOVIE",
        payload: movieInfo
    }
}
