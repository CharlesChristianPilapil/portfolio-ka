import React from 'react'
import Homehero from './Homehero'
import Homeprojects from './Homeprojects'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Homehero />
      <Homeprojects />
    </div>
  )
}

export default Home