import React from 'react'
import CardContainer from '../../Containers/Card/CardContainer'
import CategoryContainer from '../../Containers/Category/CategoryContainer'
import '../../Styles/Styles.css'

const App = () => (
	<div className="moviesContainer">
		<CategoryContainer />
		<CardContainer />
    </div>
)

export default App
