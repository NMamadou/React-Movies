import React, { Component } from 'react'

export default class CategoryList extends Component {
	constructor (props) {
		super(props)

		this.state = {
			selectedCategories: [],
		}
	}

	componentDidMount = () => {
		this.props.actions.fetchMovies()
	}

	changeCategory = (e) => {
		this.setState({
			selectedCategories: Array.from(e.target.selectedOptions, option => option.value)
		}, () => {
			this.props.actions.changeSelectedCategories(this.state.selectedCategories)
		})
	}

	displayCategories() {
		return (
			<select
				value={this.props.categories.filter(category => this.state.selectedCategories.includes(category))}
				onChange={this.changeCategory}
				className="multiselectContainer"
				multiple
			>
				{ this.props.categories.map((category, i) => {
					if (this.props.movies.some(movie => movie.category === category)) {
						return (
							<option className="categoryOption" key={i} value={category}>{ category }</option>
						)
					}
				}) }
			</select>
		)
	}

	render () {
		return (
			<div className="categoriesContainer">
				{ this.displayCategories() }
			</div>
		)
	}
}