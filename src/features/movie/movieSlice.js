import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies',
	async term => {
		const response = await axios.get(
			`https://omdbapi.com/?apiKey=fc1fef96&s=${term}&type=movie`
		)
		return response.data
	}
)

export const fetchAsyncSeries = createAsyncThunk(
	'movies/fetchAsyncSeries',
	async term => {
		const response = await axios.get(
			`https://omdbapi.com/?apiKey=fc1fef96&s=${term}&type=series`
		)
		return response.data
	}
)

export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk(
	'movies/fetchAsyncMovieOrSeriesDetail',
	async id => {
		const response = await axios.get(
			`https://omdbapi.com/?apiKey=fc1fef96&i=${id}&Plot=full`
		)
		return response.data
	}
)

const initialState = {
	movies: [],
	series: [],
	selectMovieOrSeries: [],
}

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log('Pending')
		},
		[fetchAsyncMovies.fulfilled]: (state, action) => {
			console.log('Fetched Successfully!')
			state.movies = action.payload
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log('Rejected!')
		},
		[fetchAsyncSeries.fulfilled]: (state, action) => {
			console.log('Fetched Successfully!')
			state.series = action.payload
		},
		[fetchAsyncMovieOrSeriesDetail.fulfilled]: (state, action) => {
			console.log('Fetched Successfully!')
			state.selectMovieOrSeries = action.payload
		},
	},
})

export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = state => state.movies.movies
export const getAllSeries = state => state.movies.series
export const getSelectedMovieOrSeries = state =>
	state.movies.selectMovieOrSeries
export default movieSlice.reducer
