import React from 'react'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MovieView = () => {

    const movieId = useSelector(store => store.movies?.cardKey)

  return (
    <div className='bg-black'>
    <div className='pt-20'>
        <VideoBackground movieId={movieId}></VideoBackground>
    </div>
    </div>
  )
}

export default MovieView