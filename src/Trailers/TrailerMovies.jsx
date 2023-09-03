import React, { Fragment, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerMovie.css';

const TrailerMovies = ({ moviesTitle }) => {
    const [video, setVideo] = useState('');
    const [videoURL, setVideoURL] = useState('');

    const handleSearch = () => {
        setVideo(moviesTitle)
        movieTrailer(video).then((res) => {
        setVideoURL(res)
        });
    };

    useEffect(() => {
        handleSearch();
    }, [videoURL]);

    return (
        <Fragment>
            <div className='Container'>
            </div>
            <div className='player'>
                <ReactPlayer url={videoURL} controls={true} width={'1200px'} height={'600px'} muted={false} />
            </div>
        </Fragment>
    );
};

export default TrailerMovies;