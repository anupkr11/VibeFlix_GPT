import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen text-white px-20 flex flex-col justify-center bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="space-x-4">
        <button className="bg-white text-black px-8 py-3 rounded-lg text-xl hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white px-8 py-3 rounded-lg text-xl hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
