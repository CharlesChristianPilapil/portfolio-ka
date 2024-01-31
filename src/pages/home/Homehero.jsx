import React from 'react'
import { delay, motion } from 'framer-motion'


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
                <ul>
                    <motion.li
                        initial={{opacity: 0, y: '-100%'}}
                        whileInView={{opacity: 1, y: 0, transition: {delay: 1, duration: 1}}} viewport={{once:true}}
                    > Game Enthusiast </motion.li>
                    <motion.li
                        initial={{opacity: 0, y: '-100%'}}
                        whileInView={{opacity: 1, y: 0, transition: {delay: 1, duration: 1}}} viewport={{once:true}}
                    > Graphic Designer </motion.li>
                    <motion.li
                        initial={{opacity: 0, y: '-100%'}}
                        whileInView={{opacity: 1, y: 0, transition: {delay: 1, duration: 1}}} viewport={{once:true}}
                    > Faker 2.0 </motion.li>
                </ul>

                <motion.div className="hero-icons"
                    initial={{y: '-50%', opacity: 0}}
                    whileInView={{y: 0, opacity: 1,
                        transition: {
                            delay: 2,
                            duration: 1,
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