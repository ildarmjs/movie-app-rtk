import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import {
	fetchAsyncMovies,
	fetchAsyncSeries,
	
} from './../../features/movie/movieSlice'
import s from './Header.module.css'
export const Header = () => {
	const [term, setTerm] = useState('')
	const dispatch = useDispatch()
	const submitHandler = e => {
		e.preventDefault()
		if (term === '') return alert('Please enter search term!')
		dispatch(fetchAsyncMovies(term))
		dispatch(fetchAsyncSeries(term))
		setTerm('')
	}
	return (
		<>
			<h1 className={s.header}>What would yoy like to watch</h1>
			<div className={s.form}>
				<div className={s.icon}>
					<BsSearch />
				</div>
				<form onSubmit={submitHandler}>
					<input
						value={term}
						onChange={e => setTerm(e.target.value)}
						type='text'
						className={s.input}
						placeholder='Search'
					/>
				</form>
			</div>

			{/* <div className='search-bar'>
				<form onSubmit={submitHandler}>
					<input
						className='input'
						type='text'
						value={term}
						placeholder='Search Movies or Shows'
						onChange={e => setTerm(e.target.value)}
					/>
				</form>
			</div> */}
		</>
	)
}
