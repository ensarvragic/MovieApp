import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {AiFillPlayCircle} from 'react-icons/ai';
import NoImg from  '../Styles/No_image_available.svg.png';
import '../Styles/videos.css'
import { Container } from './NavBar';

const Movies = () => {
    const {toggle} = useContext(Container)
    const [moviesData, setMoviesData] = useState([])
    const Api = 'http://api.themoviedb.org/3/discover/movie'
    const Image = 'https://image.tmdb.org/t/p/w500'

    const MovieCall = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: '7e0310bec650093cdccd5b8e1e4f253d',
            }
        })
        const results = data.data.results
        setMoviesData(results)
    }
    useEffect(() => {
        MovieCall()
    }, [])
    console.log(moviesData)


  return (
    <Fragment>
        <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
        <div className='movies-container'>
        {moviesData.map((movie) => {
            return(
            <Fragment>
                <div id='container'>
                <AiFillPlayCircle color='green' fontSize={40} id='playIcon'/>
                <img src={movie.poster_path  ? `${Image}${movie.poster_path}` : NoImg} alt=''/>
                <h3>{moviesData.title}</h3>
                </div>
            </Fragment>
            )
        })}
        </div>
        </div>
    </Fragment>
  )
}

export default Movies;