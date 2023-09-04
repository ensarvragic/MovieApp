import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './NavBar';
import {AiOutlineClose, AiFillPlayCircle} from 'react-icons/ai';
import NoImg from  '../Styles/No_image_available.svg.png';
import '../Styles/videos.css'


const Trends = () => {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const [trendTitle, setTrendTitle] = useState('')
  const [trendArray, setTrendArray] = useState([])
  const [trailer, setTrailer] = useState(true)
  const Api = 'http://api.themoviedb.org/3'
  const trendShown= '/trending/all/week'
  const Image = 'https://image.tmdb.org/t/p/w500'
 

  const Trends = async () => {
    const data = await axios.get(`${Api}${trendShown}`,{
      params: {
        api_key: '7e0310bec650093cdccd5b8e1e4f253d'
      }
    })
    const results = data.data.results
    setTrendArray(results)
  }

  useEffect(() =>{ 
    setTimeout(() => {
      Trends()
    }, 100)
  }, [input])

  const TrendTitle = (trend) => {
    setTrendTitle(trend.title)
    setTrailer(!trailer)
  }

  return (
    <Fragment>
      <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
      <div className='movies-container'>
        {trendArray.map((trend) => {
          return(
            <Fragment key={trend}>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => TrendTitle(trend)} />
              <img src={trend.poster_path ? `${Image}${trend.poster_path}` : NoImg} alt='' onClick={() => TrendTitle(trend)} />
              <h3 className={toggle ? 'mainColor' : 'secondaryColor'}>{trend.title}</h3>
            </div>
            </Fragment>
          )
        })}
        {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle}/>}
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

export default  Trends;