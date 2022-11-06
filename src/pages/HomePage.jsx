import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Films } from '../components/Films/Films'

import {
	fetchAsyncMovies,
	fetchAsyncSeries
} from './../features/movie/movieSlice'

export const HomePage = () => {
	const dispatch = useDispatch()
	const movieText = 'Avengers'
	const serieText = 'Dexter'
	useEffect(() => {
		dispatch(fetchAsyncMovies(movieText))
		dispatch(fetchAsyncSeries(serieText))
	}, [dispatch])
	return (
		<>
			<Films/>
		</>
	)
}
