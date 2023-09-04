import React, { Fragment, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerMovie.css';

const TrailerTrending = ({ TrendTitle }) => {
    const [video, setVideo] = useState('');
    const [videoURL, setVideoURL] = useState('');

    const handleSearch = () => {
        setVideo(TrendTitle)
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

export default TrailerTrending;