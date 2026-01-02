import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='p-2 w-[180px] hover:scale-110 transition-transform duration-300 ease-in-out'>
        <img src={IMG_CDN + posterPath} alt='MovieCard'
        />
    </div>
  )
}

export default MovieCard