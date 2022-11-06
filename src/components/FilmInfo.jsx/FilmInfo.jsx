import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchAsyncMovieOrSeriesDetail,
	getSelectedMovieOrSeries,
} from './../../features/movie/movieSlice'
import { BiArrowBack } from 'react-icons/bi'
import s from './FilmInfo.module.css'
import { Link } from 'react-router-dom'

export const FilmInfo = () => {
	const { imdbID } = useParams()
	const dispatch = useDispatch()
	const data = useSelector(getSelectedMovieOrSeries)
	useEffect(() => {
		dispatch(fetchAsyncMovieOrSeriesDetail(imdbID))
	}, [dispatch, imdbID])
	return (
		<div>
			{Object.keys(data).length === 0 ? (
				<div className={s.loader}>Loading...</div>
			) : (
				<>
					<div>
						<Link to='/'>
							<BiArrowBack className={s.arrow_back} />
						</Link>

						<div className={s.card}>
							<div className={s.card__item}>
								<h1 className={s.card__header}>{data.Title}</h1>
								<div className={s.card__year}>
									<span>{data.Year} - </span>
									<span>{data.Genre} / </span>
									<span>{data.Runtime}</span>
									<p></p>
								</div>
								<div className={s.card__rate}>
									<p>Rating: {data.imdbRating} </p>
									<p>Released: {data.Released}</p>
								</div>
								<hr />
								<div className={s.card__cast}>
									<h2>Cast</h2>
									<p>{data.Actors}</p>
								</div>
							</div>
							<div>
								<div className='mb-4'>
									<img
										className='rounded-[15px] w-[100%] xl:w-full lg:w-4/5 md:w-4/5 sm:w-4/6'
										src={data.Poster}
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
