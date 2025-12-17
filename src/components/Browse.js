import React, { useEffect } from 'react'
import Header from './Header'
import { options } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const Browse = () => {
  const dispatch = useDispatch();
  const moviesData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
    const jsonData = await data.json()
    console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results))
  }

  useEffect(() => {
    moviesData()
  }, [])

  return (
    <>
      <Header />
    </>
  )
}

export default Browse