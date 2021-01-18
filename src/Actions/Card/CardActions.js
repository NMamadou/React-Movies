import * as types from '../../Constants/ActionTypes'

export const likeMovie = (id) => ({
    type: types.LIKE_MOVIE,
    likedMovie: id
})

export const dislikeMovie = (id) => ({
    type: types.DISLIKE_MOVIE,
    dislikedMovie: id
})

export const deleteMovie = (id) => ({
    type: types.DELETE_MOVIE,
    deletedMovie: id
})