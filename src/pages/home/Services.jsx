import React from 'react'
import {services} from '../../constants'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const Services = () => {
  return (
    <div className='services'>
        <div className="service-wrapper container x-padding">
            <motion.h1
                initial={{opacity: 0}}
                whileInView={{opacity: 1, transition: {delay: 0.3, duration: 1, type: 'spring'}}}
                viewport={{once: true}}
            > Services </motion.h1>
            <div className="service-boxes">
                {
                    services.map((entry, index) => {

                        const delayVal = index / 10;

                        return (
                            <motion.div key={entry.id}
                                initial={{opacity: 0, x: '-50%'}}
                                whileInView={{opacity: 1, x: 0, transition: { delay: delayVal, duration: 1, type: 'spring' }}}
                                viewport={{ once: true }}
                            >
                                <div className="service-tabs">
                                    <div className="service-img">
                
                                        <img src={entry.image} alt={entry.title} />
                                    </div>
                
                                    <h4> {entry.title} </h4>
                
                                    <p> {entry.description} </p>
                                </div>
                            </motion.div>    
                        )
                    })
                }
            </div>
        </div>


        <div className="marquee">
            <Marquee speed={125}>
                <h1> FIGMA </h1>
                <h1> PHOTOSHOP </h1>
                <h1> ILLUSTRATOR </h1>
                <h1> CANVA </h1>
            </Marquee>
        </div>

    </div>
  )
}

export default Services