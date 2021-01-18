import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CategoryActions from '../../Actions/Category/CategoryActions'
import CategoryList from '../../Components/Category/CategoryList'

const mapStateToProps = (state) => ({
	movies: state.toggleCategory.movies,
	categories: state.toggleCategory.categories,
	selectedCategories: state.toggleCategory.selectedCategories
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(CategoryActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CategoryList)