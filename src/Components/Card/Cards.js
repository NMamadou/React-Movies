import React, { Component } from 'react'
import Card from './Card'
import Pagination from '../Pagination/Pagination'

export default class Cards extends Component {
	constructor (props) {
		super(props)

		this.state = {
			movies: null,
			likedMovies: [],
			deletedMovies: [],
			currentMoviesToDisplay: [],
			currentPage: 1,
			contentPerPage: 12
		}
	}

	componentDidUpdate(prevProps) {
		if (this.state.movie == null) {
			if ((prevProps.selectedCategories !== this.props.selectedCategories) && (this.props.selectedCategories.length > 0)) {
				this.setState({
					movies: this.props.movies.filter((item) => this.props.selectedCategories.includes(item.category)),
					currentPage: 1
				}, () => {
					this.manageDisplayedMovies(this.state.movies)
				})
			} else {
				if (this.props.selectedCategories.length === 0) {
					this.setState({
						movies: this.props.movies,
						currentPage: 1
					})
				}
			}
		}
	}

	shouldComponentUpdate(prevProps, prevState) {
        return prevState.likedMovies !== this.state.likedMovies ||
            prevState.deletedMovies !== this.state.deletedMovies ||
			prevState.currentMoviesToDisplay !== this.state.currentMoviesToDisplay ||
			prevProps.selectedCategories !== this.props.selectedCategories ||
			prevState.contentPerPage !== this.state.contentPerPage ||
			prevState.movies !== this.state.movies ||
			((prevProps.movies !== this.props.movies) && (prevProps.movies.length > 0))
    }

	changeNumberOfMoviesToDisplay = (currentMoviesToDisplay, currentPage) => {
		this.setState({
			currentMoviesToDisplay: currentMoviesToDisplay,
			currentPage: currentPage,
		})
	}

	changeNumberOfMoviesPerPage = (contentPerPage) => {
		this.setState({
			currentPage: 1,
			contentPerPage: contentPerPage
		}, () => {
			this.manageDisplayedMovies(this.state.movies)
		})
	}

	toggleLikedMovies = (isLiked, movieId) => {
		if (isLiked) {
            this.setState({likedMovies: [...this.state.likedMovies, movieId]}, () => {
				this.props.actions.likeMovie(movieId)
            })
        } else {
            this.setState({
                likedMovies: this.state.likedMovies.filter((item) => item !== movieId)
            }, () => {
				this.props.actions.dislikeMovie(movieId)
            })
        }
	}

	toggleDeletedMovies = (movieId) => {
		this.props.actions.deleteMovie(movieId)

		this.setState({
			movies: this.props.movies,
			currentMoviesToDisplay: this.state.currentMoviesToDisplay.filter((item) => item.id !== movieId)
		}, () => {
			let deletedMovies = this.state.movies.filter((item) => item.id !== movieId)

			this.manageDisplayedMovies(deletedMovies)
		})
	}

	manageDisplayedMovies = (movies) => {
		let { currentPage, contentPerPage } = this.state
		let indexOfLastTodo = currentPage * contentPerPage
		let indexOfFirstTodo = indexOfLastTodo - contentPerPage
		let currentMovies = movies.slice(indexOfFirstTodo, indexOfLastTodo)

		this.changeNumberOfMoviesToDisplay(currentMovies, currentPage)
	}

	displayCards() {
		let movies = this.state.currentMoviesToDisplay.length > 0
			? this.state.currentMoviesToDisplay
			: this.state.movies
		let { likedMovies } = this.state

		return movies.map((movie, i) => {
			return (
				<Card
					key={movie.id}
					movie={movie}
					likedMovies={likedMovies}
					toggleLikedMovies={this.toggleLikedMovies}
					toggleDeletedMovies={this.toggleDeletedMovies}
				/>
			)
		})
	}

	render () {
		let { movies } = this.state

		if (movies != null) {
			return (
				<div>
					<div className="cardsContainer">
						{ this.displayCards() }
					</div>
					<Pagination
						movies={movies}
						changeNumberOfMoviesToDisplay={this.changeNumberOfMoviesToDisplay}
						changeNumberOfMoviesPerPage={this.changeNumberOfMoviesPerPage}
						currentPage={this.state.currentPage}
						contentPerPage={this.state.contentPerPage}
					/>
				</div>
			)
		} else {
			return null
		}
	}
}