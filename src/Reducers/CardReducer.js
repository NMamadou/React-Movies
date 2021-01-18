import {
	LIKE_MOVIE,
	DISLIKE_MOVIE
} from '../Constants/ActionTypes'

const initialState = {
    likedMovies: []
}

export function toggleCard(state = initialState, action) {
    switch (action.type) {
        case LIKE_MOVIE:
            return {
                ...state,
                likedMovies: [...state.likedMovies, action.likedMovie]
            }
        case DISLIKE_MOVIE:
            return {
                ...state,
                likedMovies: state.likedMovies.filter((item) => item !== action.likedMovie)
            }
        default:
            return state
    }
}