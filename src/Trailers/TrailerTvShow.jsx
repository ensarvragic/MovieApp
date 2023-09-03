import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'  
import movieTrailer from 'movie-trailer'
import '../Styles/TrailerMovie.css'

const TrailerTvShows = ({TvShowsTitle}) => {
    const [video, setVideo] = useState('')
    const [videoURL, setVideoURL] = useState('https://youtu.be/sa91-dTv9Gk')

    const handleSearch = () => {
            setVideo(TvShowsTitle)
            movieTrailer(video).then((res) => {
            setVideoURL(res)
        });
    }

    useEffect(() => {
        handleSearch()
    },[videoURL])

  return (
    <Fragment>
        <div className='container'>

        </div>
        <div className='player'>
            <ReactPlayer url={videoURL} controls={true} width={'1200px'} height={'600px'} muted={false}/>
        </div>
    </Fragment>
  )
}

export default TrailerTvShows