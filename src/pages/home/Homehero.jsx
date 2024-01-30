import React from 'react'
import { motion } from 'framer-motion'


const overlayVariant = {
    hidden: { height: '100%'},
    show: { height: 0,
        transition: {
            delay: .2,
            duration: .8,
        }
    }
}

const openLink = (num) => {
    num === 1 ? window.open('https://www.instagram.com/', '_blank') : window.open('https://www.linkedin.com/', '_blank');
  };


const Homehero = () => {
  return (
    <div className='hero'>
        <div className="hero-wrapper">
            <div className='hero-wrapper-box'>
                <h1> 
                    K-Adrian 
                <motion.div className="overlay" 
                    variants={overlayVariant}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                />
                </h1>
                <motion.ul
                    initial={{ y: '100%', opacity: 0}}
                    whileInView={{ y: 0, opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 1,
                            type: 'spring'
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <li> Game Enthusiast </li>
                    <li> Graphic Designer </li>
                    <li> Faker 2.0 </li>
                </motion.ul>

                <motion.div className="hero-icons"
                    initial={{x: '-100%', opacity: 0}}
                    whileInView={{x: 0, opacity: 1,
                        transition: {
                            delay: 2,
                            duration: 1.5,
                            type: 'spring'
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <div onClick={() => openLink(1)}>
                        <h1>ig</h1>
                        <p> instagram </p>
                    </div>

                    <div onClick={() => openLink(0)}>
                        <h1>ln</h1>
                        <p> linkedin </p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Homehero