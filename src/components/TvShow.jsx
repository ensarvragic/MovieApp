import React, { Fragment, useEffect, useContext, useState } from 'react'
import { Container } from './NavBar';
import axios from 'axios'
import NoImg from  '../Styles/No_image_available.svg.png';
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai';
import TrailerTvShows from '../Trailers/TrailerTvShow';



const TvShow = () => {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const [showData, setShowData] = useState([])
  const Shown = input ? 'search' : 'discover'
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle] = useState('')
  const Api = `http://api.themoviedb.org/3/${Shown}/tv`
  const Image = 'https://image.tmdb.org/t/p/w500'

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '7e0310bec650093cdccd5b8e1e4f253d',
        query: input
      }
    })
    const results = (data.data.results)
    setShowData(results)
  }
    useEffect(() => {
      setTimeout(() => {
        TvShows()
      }, 100)
    }, [input])
    console.log(showData)

    const TvShowTitle = (shows) => {
      setTitle(shows.name)
      setTrailer(!trailer)
    }

  return (
    <Fragment>
      <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
      <div className='movies-container'>
      {showData.map((shows) => {
        return(
          <Fragment key={shows.id}>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle 
              color='#fff' 
              fontSize={40} 
              id={trailer ? 'playIcon' : 'hide'} 
              onClick={() => TvShowTitle(shows)} 
              />
              <img src={shows.poster_path ? `${Image}${shows.poster_path}` : NoImg} alt='' onClick={() => TvShowTitle(shows)} />
              <h3 className={toggle ? 'mainColor' : 'secondaryColor'}>{shows.name}</h3>
            </div>
          </Fragment>
        )
      })};
      {trailer ? console.log() : <TrailerTvShows TvShowsTitle={title}/>}
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

export default TvShow;