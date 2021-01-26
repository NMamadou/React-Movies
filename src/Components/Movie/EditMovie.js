import React, { Component } from 'react'

export default class EditMovie extends Component {
	constructor (props) {
		super(props)

		this.state = {
			title: '',
			duration: 0,
			inputChecked: []
		}
	}

	componentDidMount() {
		this.props.actions.fetchMoviesTypes()
	}

	handleChangeTitle = (e) => {
		this.setState({
			title: e.target.value
		})
	}

	handleChangeDuration = (e) => {
		this.setState({
			duration: e.target.value
		})
	}

	handleInputChange = (e) => {
		if (e.target.checked) {
            this.setState({inputChecked: [...this.state.inputChecked, e.target.id]})
        } else {
            this.setState({
                inputChecked: this.state.inputChecked.filter((item) => item !== e.target.id)
            })
        }
	}

	onSubmit = (e) => {
		e.preventDefault()
	}

	displayForm() {
		let { types } = this.props

		return (
			<div className="container">
				<div>
					<span className="inputTitle">Title</span>
					<input
						className="input"
						type="text"
						placeholder={'Title'}
						value={this.state.title}
						onChange={this.handleChangeTitle}
					/>
				</div>
				<div className="marginTop20">
					<span className="inputTitle">Duration</span>
					<input
						className="input"
						type="number"
						placeholder={'Duration'}
						value={this.state.duration}
						onChange={this.handleChangeDuration}
						min={0}
					/>
				</div>
				<div className="marginTop20">
					<div className="marginBottom20">
						<span>Types</span>
					</div>
					{
						types.map((type, i) => {
							return (
								<div key={type.id}>
									<label>
										<input
											name="movieType"
											type="checkbox"
											id={type.id}
											onChange={this.handleInputChange}
										/>
										&nbsp;{ type.name }
									</label>
								</div>
							)
						})
					}
				</div>
				<div
					className="submitButton"
					onClick={this.onSubmit}
				>
					Submit
				</div>
			</div>
		)
	}

	render () {
		return (
			this.displayForm()
		)
	}
}