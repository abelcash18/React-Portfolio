import React, { useEffect } from 'react'
import Center from '../assets/centerPatter.png'
import { motion } from 'framer-motion'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  }
}
const Work = () => {

  return (
    <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='w-full workExperience'>
            <div className='w-full'>
              <h1 className='text-4xl font-bold text-center'>My <span className='text-[#FD853A]'>Work Experience</span></h1>
              <div style={{margin: '3em 0'}} className='workEx flex flex-col gap-5 w-full relative'>
                {/* first */}
                <div className='w-full grid md:grid-cols-[1fr_1fr]'>
                  <div className='w-full'>
                    <h1 className='text-2xl font-bold text-[#344054]'>SQI College of ICT, Abeokuta</h1>
                    <p className='text-[#98A2B3]'>May 2025 - till Date</p>
                  </div>
                  <div style={{justifySelf: 'flex-end'}} className='md:w-3/4'>
                    <h1 className='text-[1.2rem] md:text-2xl font-bold text-[#344054]'>Software Developement Internship</h1>
                    <p className='text-[#98A2B3] text-sm'>I contributed to multiple projects including Estatery ( real estate web application) Stopgap mail (a temporary email generator with message features). I focused on front-end development using React, building RESTful APIs with Node.js using Expressjs, or debugging and testing.
                    </p>
                  </div>
                </div>

                {/* second */}
                <div className='w-full grid md:grid-cols-[1fr_1fr] justify-between'>
                  <div>
                    <h1 className='text-2xl font-bold text-[#344054]'>S4E Agency, Abeokuta</h1>
                    <p className='text-[#98A2B3]'>May 2025 - till Date</p>
                  </div>
                  <div style={{justifySelf: 'flex-end'}} className='md:w-3/4'>
                    <h1 className='text-[1.2rem] md:text-2xl font-bold text-[#344054]'>Web Designer</h1>
                    <p className='text-[#98A2B3] text-sm'>As a Web Designer at S4E Agency, I design and develop responsive, user-friendly websites for clients across various industries. My responsibilities include translating client requirements into visually compelling layouts, creating wireframes and prototypes, and implementing designs using HTML, CSS, JavaScript, and modern front-end frameworks. I collaborate closely with developers and content teams to ensure seamless functionality and consistent branding across all platforms.
                    </p>
                  </div>
                </div>
                {/* second */}

                {/* third */}
                <div className='w-full grid md:grid-cols-[1fr_1fr] justify-between'>
                  <div>
                    <h1 className='text-2xl font-bold text-[#344054]'>Emmanuel TechHub, Ota, Ogun State</h1>
                    <p className='text-[#98A2B3]'>Jan 2023 - December, 2024</p>
                  </div>
                  <div style={{justifySelf: 'flex-end'}} className='md:w-3/4'>
                    <h1 className='text-[1.2rem] md:text-2xl font-bold text-[#344054]'>Data Analysis with Excel</h1>
                    <p className='text-[#98A2B3] text-sm'>At Emmanuel TechHub, I completed an intensive training and hands-on program focused on data analysis using Microsoft Excel. The experience equipped me with the ability to collect, clean, organize, and interpret datasets to support data-driven decision-making.
                    </p>
                  </div>
                </div>
                {/* third */}

                <div className='absolute top-[10%] md:top-[10%] left-[-19%] md:left-[45%] centerImg'>
                  <img src={Center} className='relative h-[700px] w-[55px] md:h-[400px] md:w-[50px]' alt="" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
  )
}

export default Work