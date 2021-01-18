import {
    GET_MOVIES_AND_CATEGORIES,
    CHANGE_SELECTED_CATEGORIES,
    DELETE_MOVIE
} from '../Constants/ActionTypes'

const initialState = {
    movies: [],
    categories: [],
    selectedCategories: []
}

export function toggleCategory(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES_AND_CATEGORIES:
            return {
                ...state,
                movies: action.movies,
                categories: action.categories
            }
        case CHANGE_SELECTED_CATEGORIES:
            return {
                ...state,
                selectedCategories: action.selectedCategories
            }
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter((item) => item.id !== action.deletedMovie)
            }
        default:
            return state
    }
}