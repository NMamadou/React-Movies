import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MovieActions from '../../Actions/Movie/MovieActions'
import Movies from '../../Components/Movie/Movies'

const mapStateToProps = (state) => ({
    movies: state.toggleMovies.movies,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(MovieActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Movies)