import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faHeart, faFilm } from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'

export default class Card extends Component {
	constructor (props) {
		super(props)

		this.state = {
			liked: false,
			deleted: false,
		}
	}

	componentDidMount() {
		let { likedMovies } = this.props
		let { id } = this.props.movie

		this.setState({
			liked: likedMovies.includes(id),
		})
	}

	toggleLike = (e) => {
		let { toggleLikedMovies } = this.props
		let { id } = this.props.movie

		this.setState({
			liked: !this.state.liked
		}, () => {
			toggleLikedMovies(this.state.liked, id)
		})
	}

	deleteMovie = (e) => {
		let { toggleDeletedMovies } = this.props
		let { id } = this.props.movie

		toggleDeletedMovies(id)
	}

	render () {
		let { movie } = this.props
		let likes = this.state.liked
			? movie.likes + 1
			: movie.likes

		return (
			<div className="cardContainer">
				<div className="movieLikesButton" onClick={this.toggleLike}>
					<FontAwesomeIcon
						size="lg"
						color="black"
						icon={this.state.liked ? faHeart : farHeart}
					/>
				</div>
				<div className="movieTitle">
					<span>{ movie.title }</span>
				</div>
				<div className="movieCategory">
					<span>{ movie.category }</span>
				</div>
				<div className="movieLogo">
					<FontAwesomeIcon size="3x" color="black" icon={faFilm} />
				</div>
				<div className="movieLikesContainer">
					<div>
						<span className="movieLikesStats">{ likes }</span>
						<FontAwesomeIcon size="sm" color="black" icon={faThumbsUp} />
					</div>
					<div>
						<span className="movieLikesStats">{ movie.dislikes }</span>
						<FontAwesomeIcon size="sm" color="black" icon={faThumbsDown} />
					</div>
				</div>
				<div className="movieDeleteButton" onClick={this.deleteMovie}>
					<span className="movieDeleteText">Delete</span>
				</div>
			</div>
		)
	}
}