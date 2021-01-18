import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CardActions from '../../Actions/Card/CardActions'
import * as CategoryActions from '../../Actions/Category/CategoryActions'
import Cards from '../../Components/Card/Cards'

const mapStateToProps = (state) => ({
    movies: state.toggleCategory.movies,
    categories: state.toggleCategory.categories,
    selectedCategories: state.toggleCategory.selectedCategories
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, CardActions, CategoryActions), dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Cards)