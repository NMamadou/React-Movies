import React, { Component } from 'react'
import DataTable from '@bit/adeoy.utils.data-table'
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default class Movies extends Component {
	constructor (props) {
		super(props)

		this.state = {
			isTriggeredNewMovie: false
		}
	}

	componentDidMount() {
		this.props.actions.fetchMovies()
	}

	displayData() {
		let { movies } = this.props
		let data = []
		let columns = []

		movies.map((movie, i) => {
			let result = {
				id: movie.id,
				title: movie.title,
				duration: movie.duration,
				types: movie.type,
				people: movie.people
			}

			data.push(result)
		})

		columns = [
			{
				title: "Id",
				data: "id"
			},
			{
				title: "Title",
				data: "title"
			},
			{
				title: 'Duration',
				data: "duration"
			},
			{
				title: 'Types',
				format: (row) => row.types !== null
					? row.types.map((value, i) =>
						<span key={i}>{ row.types[i+1] ? `${value}, ` : value}</span>
					)
					: null
			},
			{
				title: "People",
				format: (row) => row.people !== null
					? <ul>
						{row.people.map((person, i) =>
							<li key={i}>{ person }</li>
						)}
					</ul>
					: null
			},
			{
				title: "Actions",
				format: (row) => <div className="editMovieButton">
					<Link to={`/edit/${row.id}`}>
						<FontAwesomeIcon
							size="lg"
							color="black"
							icon={faPencilAlt}
						/>
					</Link>
				</div>
			}
		]

		return (
			<div key={2} className="container">
				<Container>
					<DataTable
						data={data}
						columns={columns}
						striped={true}
						hover={true}
						responsive={true}
					/>
				</Container>
			</div>
		)
	}

	displayNewMovieButton() {
		return (
			<Link to="/new">
				<div
					key={1}
					className="newMovieButton"
				>
					New Movie
				</div>
			</Link>
		)
	}

	render () {
		return (
			<div>
				{ this.displayNewMovieButton() }
				{ this.displayData() }
			</div>
		)
	}
}