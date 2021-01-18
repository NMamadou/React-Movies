import { combineReducers } from 'redux'
import { toggleCard } from './CardReducer'
import { toggleCategory } from './CategoryReducer'

const rootReducer = combineReducers({
	toggleCard,
	toggleCategory
})

export default rootReducer