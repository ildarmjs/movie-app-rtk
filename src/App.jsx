import React, { useState } from 'react'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'

import { FilmInfo } from './components/FilmInfo.jsx/FilmInfo'
const App = () => {
	return (
		<div className='body '>
			<div className='wrapper'>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/movies/:imdbID' element={<FilmInfo />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
