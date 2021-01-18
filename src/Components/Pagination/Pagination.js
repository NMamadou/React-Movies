import React, { Component } from 'react'

export default class Pagination extends Component {
	constructor (props) {
		super(props)

		this.state = {
			currentPage: props.currentPage,
			contentPerPage: null
		}

		this.pageNumbers = 0
	}

	componentDidMount() {
		let { movies, currentPage } = this.props

		this.manageCurrentMovies(movies, currentPage)
	}

	handlePaginate = (e) => {
		let pageNumber = null
		let { movies, currentPage } = this.props

		switch (e.target.id) {
			case 'previous':
				if (currentPage > 1) {
					pageNumber = currentPage - 1
				} else {
					pageNumber = currentPage

					return false
				}
				break
			case 'next':
				if (currentPage < this.pageNumbers) {
					pageNumber = currentPage + 1
				} else {
					pageNumber = currentPage

					return false
				}
				break
			default:
				pageNumber = e.target.id
				break
		}

        this.setState({
        	currentPage: Number(pageNumber),
        }, () => {
			this.manageCurrentMovies(movies, this.state.currentPage)
		})
	}
	
	manageCurrentMovies = (movies, currentPage) => {
		let { changeNumberOfMoviesToDisplay, contentPerPage } = this.props
		let indexOfLastTodo = currentPage * contentPerPage
		let indexOfFirstTodo = indexOfLastTodo - contentPerPage
		let currentMovies = movies.slice(indexOfFirstTodo, indexOfLastTodo)

		changeNumberOfMoviesToDisplay(currentMovies, currentPage)
	}

	displayPagination() {
		let { movies, contentPerPage } = this.props
		let pageNumbers = []
		
        for (let i = 1; i <= Math.ceil(movies.length / contentPerPage); i++) {
			pageNumbers.push(i)
		}
		
		this.pageNumbers = pageNumbers.length

        let renderPageNumbers = pageNumbers.map(number => {
			return (
				<li
					key={number}
					id={number}
					onClick={this.handlePaginate}
					className={this.state.currentPage === number ? "activePage" : {}}
				>
					{number}
				</li>
			)
        })

        return (
          	<div>
				<ul className="paginationButton">
					<li
						key="previous"
						id="previous"
						onClick={this.handlePaginate}
					>
						Previous
					</li>
					{renderPageNumbers}
					<li
						key="next"
						id="next"
						onClick={this.handlePaginate}
					>
						Next
					</li>
				</ul>
          	</div>
        )
	}

	changeContentPerPage = (e) => {
		let { changeNumberOfMoviesPerPage } = this.props

		changeNumberOfMoviesPerPage(e.target.selectedOptions[0].value)
	}

	displayContentPerPage() {
		return (
			<select
				value={this.props.contentPerPage}
				onChange={this.changeContentPerPage}
			>
				<option key="1" value="0" disabled={true}>Number per page</option>
				<option key="2" value="4">4</option>
				<option key="3" value="8">8</option>
				<option key="4" value="12">12</option>
			</select>
		)
	}

	render () {
		return (
			<div>
				<div className={this.props.contentPerPage > 4 ? "paginationContainerBis" : "paginationContainer"}>
					{ this.displayPagination() }
				</div>
				<div className="contentPerPage">
					{ this.displayContentPerPage() }
				</div>
			</div>
		)
	}
}