import * as types from '../../Constants/ActionTypes'
import * as APIConfig from '../../Constants/APIConfig'
import * as Routes from '../../Constants/Routes'

export const getMovies = () => ({
    type: types.GET_MOVIES,
})

export const getMoviesSuccess = (movies) => ({
    type: types.GET_MOVIES_SUCCESS,
    movies: movies
})

export const getMoviesError = (movies = []) => ({
    type: types.GET_MOVIES_ERROR,
    movies: movies
})

export const getMoviesTypes = (data) => ({
    type: types.GET_MOVIES_TYPES,
    types: data
})

export const fetchMovies = () => {
    return dispatch => {
        return fetch(Routes.GET_MOVIES_URL, {
            method: 'GET',
            headers: APIConfig.HEADERS,
        })
        .then((response) => response.json())
        .then(response => {
            if (response.length > 0) {
                let movies = []

                response.map((movie, i) => {
                    let allTypes = []
                    let types = movie.type !== null
                        ? movie.type.split(',')
                        : null
                
                    let persons = []
                    let people = movie.people !== null
                        ? movie.people.split(',')
                        : null

                    if (people) {
                        people.map((person) => {
                            persons.push(person.trim())
                        })

                        movie.people = persons
                    }

                    if (types) {
                        types.map((type) => {
                            allTypes.push(type.trim())
                        })

                        movie.type = allTypes
                    }

                    movies.push(movie)
                })

                dispatch(getMoviesSuccess(movies))
            }
        })
        .catch(error => {
            console.log(error)
            dispatch(getMoviesError())
        })
    }
}

export const fetchMoviesTypes = () => {
    return dispatch => {
        return fetch(Routes.GET_MOVIES_TYPES_URL, {
            method: 'GET',
            headers: APIConfig.HEADERS,
        })
        .then((response) => response.json())
        .then(response => {
            if (response.length > 0) {
                dispatch(getMoviesTypes(response))
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const saveNewMovie = (title, duration, moviesTypes) => {
    return dispatch => {
        return fetch(Routes.ADD_NEW_MOVIE_URL, {
            method: 'POST',
            headers: APIConfig.HEADERS,
            body: JSON.stringify({
                title: title,
                duration: duration,
                types: moviesTypes
            })
        })
        .then((response) => response.json())
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
}