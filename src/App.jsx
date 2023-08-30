import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './App.css'

function App() {
  const [api, setApi] = useState("")

  const fetchData = () => {
    Axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d8244dd6')
    .then((response) => {
      console.log(response);
      const myRepo = response.data
      setApi(myRepo)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
   <>React MovieApp</>
  )
}

export default App
