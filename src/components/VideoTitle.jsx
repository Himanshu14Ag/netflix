import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button type="button" className='bg-white p-4 text-xl text-bold rounded-lg text-black px-12 hover:bg-opacity-80'>▶️ Play</button>
        <button type="button" className='mx-3 bg-gray-500 p-4 text-xl bg-opacity-50 text-bold rounded-lg text-white px-12 hover:bg-opacity-20'>ℹ️ More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle