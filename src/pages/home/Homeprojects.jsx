import React from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { projects } from '../../constants'


const projectData = projects.map(proj => proj);

const Homeprojects = () => {
    return (
      <div>
          <div className="project-wrapper container">
              {projectData.slice(0, 4).map((entry, index) => {
                  return (
                      <div className="project-box" key={entry.id}>
                          <NavLink to={`projects/${entry.id}`} className={index % 2 === 0 ? 'order2' : ''}> 
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
                                <NavLink to={`projects/${entry.id}`}> View Project </NavLink>
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

export default Homeprojects