import * as types from '../../Constants/ActionTypes'
import { movies$ } from '../../Helpers/movies'

export const getMoviesAndCategories = (movies = [], categories = []) => ({
    type: types.GET_MOVIES_AND_CATEGORIES,
    movies: movies,
    categories: categories
})

export const changeSelectedCategories = (selectedCategories = []) => ({
    type: types.CHANGE_SELECTED_CATEGORIES,
    selectedCategories: selectedCategories
})

export const fetchMovies = () => {
	return (dispatch) => {
        var categories = []

		movies$.then((data) => {
            if (data.length > 0) {
                data.map(movie => {
                    if (!categories.includes(movie.category)) {
                        categories.push(movie.category)
                    }
                })
                
                dispatch(getMoviesAndCategories(data, categories))
            } else {
                dispatch(getMoviesAndCategories)
            }
		}).catch((error) => {
			console.log(error)
			dispatch(getMoviesAndCategories())
		})
	}
}