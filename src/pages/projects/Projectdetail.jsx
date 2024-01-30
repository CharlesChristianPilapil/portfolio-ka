import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../constants';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';



const projectDetailVariant = (delay) => {
   return {hidden: {
    y: '100%', opacity: 0
  },
  show: {
    y: 0, opacity: 1,
    transition: {
      type: 'spring',
      delay: delay,
      duration: 1
    }
  }}
}



const Projectdetail = () => {
  const { id } = useParams();
  const projectData = projects.filter(entry => entry.id !== id);
  const displayID = projects.filter(entry => entry.id === id)[0];
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the id parameter changes
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className='project-detail'> 

      <div className='display-id container x-padding'>
        <motion.h1
          variants={projectDetailVariant(.2)}
          initial='hidden'
          whileInView='show'
        > {displayID.title} </motion.h1>

        <motion.p
          variants={projectDetailVariant(.3)}
          initial='hidden'
          whileInView='show'
        > {displayID.category.join(', ')} </motion.p>

        <motion.h4
          variants={projectDetailVariant(.4)}
          initial='hidden'
          whileInView='show'
        > {displayID.softwareUsed.join(', ')} </motion.h4>

        <motion.div className='display-img'>

          <motion.img src={displayID.image} alt={displayID.title} 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1, transition: {delay: .5, duration: .5}}}
          />

        </motion.div>

        <motion.h4
          variants={projectDetailVariant(.6)}
          initial='hidden'
          whileInView='show'
        > {displayID.date} </motion.h4>

        <motion.p
          variants={projectDetailVariant(.7)}
          initial='hidden'
          whileInView='show'
        > {displayID.description} </motion.p>

      </div>

      <div className='container other-projects'>
        <motion.h1 className='x-padding'
          initial={{x: '-100%'}}
          whileInView={{x: 0, transition: {delay: .2, duration: 1, type: 'spring'}}}
          viewport={{ once: true }}
        > Other <span> Projects </span> </motion.h1>
      </div>


      <div className="project-wrapper container">
              {projectData.map((entry, index) => {
                  return (
                      <div className="project-box" key={entry.id}>
                          <NavLink to={`/projects/${entry.id}`} className={index % 2 === 0 ? 'order2' : ''}> 
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
                              <NavLink to={`/projects/${entry.id}`}> View Project </NavLink>
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

export default Projectdetail