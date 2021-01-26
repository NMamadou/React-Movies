import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MovieActions from '../../Actions/Movie/MovieActions'
import EditMovie from '../../Components/Movie/EditMovie'

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
)(EditMovie)