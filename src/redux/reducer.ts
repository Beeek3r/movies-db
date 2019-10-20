import intialState from './state'

const AppReducer = (state = intialState, action:any) => {
    switch (action.type) {
        
        case "FETCH_POPULAR_MOVIES_SUCCESS": 
        console.log('inside reducer fetch popular')
            return {
                ...state,
                popularMoviesList: action.payload,
                popularMoviesView: true
            }

        case "QUERY_MOVIES": 
        console.log(action.payload)
            return {
                ...state,
                queryMoviesList: action.payload,
                popularMoviesView: false
            }

        default:
            console.log('default')
            return state;
    }}

export default AppReducer;