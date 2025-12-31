import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='text-white w-screen aspect-video pt-[20%] px-20 absolute bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='space-x-4'>
            <button className='bg-gray-500 text-white px-8 py-4 rounded-lg text-xl hover:bg-opacity-70'>▶️Play</button>
            <button className='bg-gray-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-opacity-70'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle