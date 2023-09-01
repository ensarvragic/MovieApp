import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai';
import NoImg from  '../Styles/No_image_available.svg.png';
import '../Styles/videos.css'
import { Container } from './NavBar';



const Movies = () => {
    const {toggle, inputValue} = useContext(Container)
    const input = inputValue
    const [movieTitle, SetMovieTitle] = useState('')
    const [moviesData, setMoviesData] = useState([])
    const [trailer, setTrailer] = useState(true)
    const Shown = input ? 'search' : 'discover'
    const Api = `http://api.themoviedb.org/3/${Shown}/movie`
    const Image = 'https://image.tmdb.org/t/p/w500'

    const MovieCall = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: '7e0310bec650093cdccd5b8e1e4f253d',
                query: input
            }
        })
        const results = data.data.results
        setMoviesData(results)
    }
    useEffect(() => {
        setTimeout(() => {
            MovieCall()
        }, 100)
    }, [input])
    console.log(moviesData)

    const MoviesTitle = (movie) => {
        SetMovieTitle(movie.title)
        setTrailer(!trailer)
    }


  return (
    <Fragment>
        <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
        <div className='movies-container'>
        {moviesData.map((movie) => {
            return(
            <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => MoviesTitle(movie)} />
                <img src={movie.poster_path  ? `${Image}${movie.poster_path}` : NoImg} alt='' onClick={() => MoviesTitle(movie)}/>
                <h3  style={{margin: 15}}>{movie.title}</h3>
                </div>
            </Fragment>
            )
        })}
        <AiOutlineClose 
      id={trailer ? 'Nothing' : 'Exit1'} 
      className={toggle ? 'DarkTheme' : 'LightThemeClose'} 
      fontSize={55} 
      color='#fff'
      cursor={'pointer'}
      onClick={() => setTrailer(true)}
      />
        </div>
        </div>
    </Fragment>
  )
}

export default Movies;