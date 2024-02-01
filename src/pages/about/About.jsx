import React from 'react'
import './about.css'
import { motion } from 'framer-motion';

const image = 'https://i.pinimg.com/736x/c1/55/d0/c155d0bfb9aad10a111560738cc0a31f.jpg';

const jobArray = [
  {
    title: "Software Engineer",
    company: "TechCo",
    startDate: "2018",
    endDate: "2020",
  },
  {
    title: "Copywriter",
    company: "Creative Agency",
    startDate: "2020",
    endDate: "2022",
  },
  {
    title: "Graphic Designer",
    company: "Design Studio",
    startDate: "2022",
    endDate: "2023",
  },
  {
    title: "Data Analyst",
    company: "Data Solutions",
    startDate: "2023",
    endDate: "Current",
  },
];

const About = () => {
  return (
    <div className='about'>

      <div className='container x-padding'>
        <motion.h1
              initial={{opacity: 0, x: -20}} 
              whileInView={{opacity: 1, x: 0, transition: {delay: .2, duration: 1}}} viewport={{once: true}}
        > About <span> Me </span> </motion.h1>
      </div>

      <div className="about-wrapper container x-padding">
        <div className="img">
          <motion.img src={image} alt='Karl Adrian' 
              initial={{opacity: 0, y: -20}} 
              whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: 1}}} viewport={{once: true}}
          />
        </div>

        <div className="info">
          <motion.h1
              initial={{opacity: 0, x: -20}} 
              whileInView={{opacity: 1, x: 0, transition: {delay: .2, duration: 1}}} viewport={{once: true}}
          > Hi! I'm Miyamoto Musashi </motion.h1>
          <div className='detail'>
            <motion.p
              initial={{opacity: 0, x: -20}} 
              whileInView={{opacity: 1, x: 0, transition: {delay: .2, duration: .5}}} viewport={{once: true}}
            > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto laboriosam, veniam suscipit quos molestias possimus dicta praesentium vero! Cum nisi a obcaecati, veniam nihil nesciunt nam dolores magnam eius fuga temporibus ullam, doloribus, neque commodi nemo rem similique aut id distinctio soluta explicabo! Dolor modi autem non odio enim? </motion.p>

            <motion.p
              initial={{opacity: 0, x: -20}} 
              whileInView={{opacity: 1, x: 0, transition: {delay: .7, duration: .5}}} viewport={{once: true}}
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam minus non rem! Minus incidunt voluptatem a dignissimos magnam cum? </motion.p>

            <motion.p
              initial={{opacity: 0, x: -20}} 
              whileInView={{opacity: 1, x: 0, transition: {delay: 1.2, duration: .5}}} viewport={{once: true}}
            > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus rem assumenda minima nisi illum possimus quod quam eum alias, sequi enim excepturi veniam ducimus fuga consequuntur. Dolores suscipit provident doloremque. </motion.p>

            <motion.table className='job-table'
              initial={{opacity: 0}}
              whileInView={{opacity: 1, transition:{delay: .2, duration: 1}}}
              viewport={{once: true}}
            >
              <thead>
                <motion.tr initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 1 }} viewport={{once: true}}>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Start</th>
                  <th>End</th>
                </motion.tr>
              </thead>
              <tbody>
                {[...jobArray].reverse().map((job, index) => {
                  let delay = (index + 1) / 10;

                  return (
                    <motion.tr key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: delay, duration: 1 }} viewport={{once: true}}>
                      <td>{job.title}</td>
                      <td>{job.company}</td>
                      <td>{job.startDate}</td>
                      <td>{job.endDate}</td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </motion.table>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About