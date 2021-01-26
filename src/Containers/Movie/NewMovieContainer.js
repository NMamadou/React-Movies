import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MovieActions from '../../Actions/Movie/MovieActions'
import NewMovie from '../../Components/Movie/NewMovie'

const mapStateToProps = (state) => ({
    movies: state.toggleMovies.movies,
    types: state.toggleMovies.types
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(MovieActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewMovie)