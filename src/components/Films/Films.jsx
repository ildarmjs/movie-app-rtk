import React from 'react'
import { MovieCard } from '../MovieCard.jsx/MovieCard'
import Slider from 'react-slick'
import { Slide } from './../../slider/slider'
import { useSelector } from 'react-redux'
import s from './Films.module.css'
import { getAllMovies, getAllSeries} from './../../features/movie/movieSlice'

export const Films = () => {
	const movies = useSelector(getAllMovies)
	const series = useSelector(getAllSeries)
	let renderMovies = ''
	let renderSeries = ''

	renderMovies =
		movies.Response === 'True' ? (
			movies.Search.map((movie, index) => (
				<MovieCard key={index} movie={movie} />
			))
		) : (
			<div className={s.movies_error}>
				<h3>{movies.Error}</h3>
			</div>
		)

	renderSeries =
		series.Response === 'True' ? (
			series.Search.map((movie, index) => (
				<MovieCard key={index} movie={movie} />
			))
		) : (
			<div className={s.series_error}>
				<h3>{series.Error}</h3>
			</div>
		)
	return (
		<div>
			<div className={s.movie_list}>
				<h2 className={s.header}>Movies</h2>
				<div className={s.slider}>
					<Slider {...Slide}>{renderMovies}</Slider>
				</div>
			</div>
			<div className={s.movie_list}>
				<h2 className={s.header}>Series</h2>
				<div className={s.slider}>
					<Slider {...Slide}>{renderSeries}</Slider>
				</div>
			</div>
		</div>
	)
}
