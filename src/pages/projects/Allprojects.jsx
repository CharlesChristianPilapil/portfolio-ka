import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../../constants'

const projectData = projects.map(entry => entry)

const Allprojects = () => {
  return (
    <div className='all-projects'>
      <h1 className='all-projects-head'> My <span> Works </span> <motion.div className="project-head-overlay" 
        initial={{height: '100%'}}
        whileInView={{height: 0, transition: {delay: .2, duration: 1}}}
        viewport={{ once: true }}
      /> </h1>
      <div className="project-wrapper container">
              {projectData.map((entry, index) => {
                  return (
                      <div className="project-box" key={entry.id}>
                          <NavLink to={`${entry.id}`} className={index % 2 === 0 ? 'order2' : ''}> 
                              <motion.img src={entry.image} alt={entry.title} 
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1,
                                    transition: {
                                        delay: .2,
                                        duration: 1
                                    }
                                }}
                                whileHover={{scale: .95}}
                                viewport={{ once: true}}

                              />
                          </NavLink>
                        <div className='project-text x-padding'>
                            <div className='categories'>
                                <p> {entry.category.join(', ')} </p>
                                <div className="line" />
                            </div>

                            <div className="main">
                                <h1> {entry.title} </h1>
                                <p> {entry.description} </p>
                            </div>

                            <p> 
                              <NavLink to={`${entry.id}`}> View Project </NavLink>
                            </p>

                            <motion.div className="overlay" 
                                initial={{width: '100%'}}
                                whileInView={{width: 0, transition: {delay: .5, duration: .5}}}
                                viewport={{ once: true }}
                            />
                        </div>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default Allprojects