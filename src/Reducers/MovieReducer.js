import {
	GET_MOVIES,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR,
    GET_MOVIES_TYPES
} from '../Constants/ActionTypes'

const initialState = {
    movies: [],
    types: []
}

export function toggleMovies(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state
            }
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.movies
            }
        case GET_MOVIES_ERROR:
            return {
                ...state,
                movies: action.movies
            }
        case GET_MOVIES_TYPES:
            return {
                ...state,
                types: action.types
            }
        default:
            return state
    }
}