import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './NavBar';
import {AiOutlineClose, AiFillPlayCircle} from 'react-icons/ai';

const Trends = () => {
  const {toggle} = useContext(Container)
  const [trendArray, setTrendArray] = useState([])
  const [trailer, setTrailer] = useState(true)
  const Api = 'http://api.themoviedb.org/3'
  const trendShown= '/trending/all/week'

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
    Trends()
  }, [])

  const TrendTitle = () => {
    
  }

  return (
    <Fragment>
      <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
      <div className='movies-container'>
        {trendArray.map(() => {
          return(
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => TrendTitle(movie)} />
            </div>
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

export default  Trends;