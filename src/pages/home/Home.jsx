import React from 'react'
import Homehero from './Homehero'
import Homeprojects from './Homeprojects'
import './home.css'
import Services from './Services'

const Home = () => {
  return (
    <div className='home'>
      <Homehero />
      <Homeprojects />
      <Services />
    </div>
  )
}

export default Home