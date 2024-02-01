import React from 'react'
import './footer.css'
import { motion } from 'framer-motion';
import { mediaIcons } from '../../constants';
import { NavLink } from 'react-router-dom';

const service = ['Graphic Design', 'Advertising', 'Branding', 'Writing'];

const Footer = () => {
  return (
    <div className='footer-main'>
      <motion.h1 className='container x-padding'
        initial={{opacity: 0, y: '-2rem'}}
        whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: 1, type: 'spring'}}}
        viewport={{once:true}}
      > Contact <span> Me </span></motion.h1>

      <div className="footer">
        <div className="footer-wrapper container x-padding">
            <motion.form action=""
              initial={{opacity: 0, y: '2rem'}}
              whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: 1, type: 'spring'}}}
              viewport={{once:true}}
            >
              <h4> Fill in the form or contact me at myemail@gmail.com to send me a message... </h4>
              <input type="text" name="" id="" placeholder='Name' required/>
              <input type="email" name="" id="" placeholder='youremail@gmail.com' required/>
              <input type="tel" placeholder='0000-000-0000' required/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Message' required></textarea>

              <button> Send Message </button>
            </motion.form>

            <div className="contacts">

              <motion.div className='contact'
                initial={{opacity: 0, y: '2rem'}}
                whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: 1, type: 'spring'}}}
                viewport={{once:true}}
              >
                <h4> myemail@gmail.com </h4>
                <h4> 0000-000-0000 </h4>
              </motion.div>

              <motion.div className='service'
                initial={{opacity: 0, y: '2rem'}}
                whileInView={{opacity: 1, y: 0, transition: {delay: .3, duration: 1, type: 'spring'}}}
                viewport={{once:true}}
              >
                {
                  service.reverse().map((entry, index) => {
                    return(
                      <motion.h4 key={index}
                        whileHover={{scale: 1.1, originX: 0}}
                      > {entry} </motion.h4> 
                    )
                  })
                }
              </motion.div>
              
              <motion.div className="icons"
                initial={{opacity: 0, y: '2rem'}}
                whileInView={{opacity: 1, y: 0, transition: {delay: .4, duration: 1, type: 'spring'}}}
                viewport={{once:true}}
              >

                <h4> Caloocan, Philippines </h4>
                <div>
                  {
                    mediaIcons.map(entry => {
                      return (
                        <NavLink to='https://ccp-portfolio.netlify.app/' target='_blank' key={entry.id}> 
                          <motion.img src={entry.image} alt={entry.name}
                            whileHover={{ scale: 1.2 }}
                        /> </NavLink> 
                      )
                    })
                  }
                </div>
              </motion.div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer