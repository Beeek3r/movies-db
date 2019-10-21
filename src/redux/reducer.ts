import intialState from './state'

const AppReducer = (state = intialState, action:any) => {
    switch (action.type) {
        
        case "FETCH_POPULAR_MOVIES_SUCCESS": 
            return {
                ...state,
                popularMoviesList: action.payload,
                popularMoviesView: true
            }

        case "QUERY_MOVIES": 
            return {
                ...state,
                queryMoviesList: action.payload,
                popularMoviesView: false
            }

        case "SELECT_MOVIE": 
        console.log('selecting movie from reducer')
            return {
                ...state,
                selectedMovie: action.payload
            }


        default:
            console.log('default')
            return state;
    }}

export default AppReducer;