import { combineReducers } from 'redux'
import { toggleMovies } from './MovieReducer'

const rootReducer = combineReducers({
	toggleMovies
})

export default rootReducer