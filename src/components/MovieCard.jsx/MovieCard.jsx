import React from 'react'
import { Link } from 'react-router-dom'
import s from './MovieCard.module.css'

export const MovieCard = ({movie}) => {

	return (
		<div className={s.card}>
			<Link to={`/movies/${movie.imdbID}`}>
				<img
					className={s.card_image}
					src={movie.Poster}
				/>
			</Link>
		</div>

	)
}


