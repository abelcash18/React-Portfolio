import React, { useEffect } from 'react'
import Hireme from '../assets/hireMe.png'
import { motion } from 'framer-motion'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  }
}

const HireMe = () => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
    <div className='hireMe bg-[#F2F4F7] rounded-[50px]'>
      <div className='grid gap-4 text-center md:text-left justify-center md:grid-cols-[1fr_1fr] items-center'>
        <div className='md:h-[500px] object-fit-cover'>
          <img className='h-full' src={Hireme} alt="" />
        </div>
        <div className='flex flex-col gap-6 md:w-3/4'>
          <h1 className='text-4xl font-bold text-[#1D2939]'>Why<span className='text-[#FD853A]'> Hire me</span>?</h1>
          <p className='text-[#98A2B3]'>I don’t just complete projects—I craft experiences. Let’s turn your vision into something impactful and unforgettable.</p>
          <div className='flex w-full justify-center gap-5 md:justify-between items-center'>
            <span>
              <h1 className='font-bold text-3xl text-[#1D2939]'>5+</h1>
              <p className='text-[#98A2B3]'>project Completed</p>
            </span>
            <span>
              <h1 className='font-bold text-3xl text-[#1D2939]'>4+</h1>
              <p className='text-[#98A2B3]'>Client Satisfied</p>
            </span>
          </div>
          <span>
            <a target='_blank' href="https://wa.me/2349056424816">
              <button style={{padding: '15px 30px'}} className='border-1 cursor-pointer hover:bg-[#151515] transition-all hover:text-white border-[#151515] rounded-[20px]'>Hire me</button>
            </a>
          </span>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default HireMe