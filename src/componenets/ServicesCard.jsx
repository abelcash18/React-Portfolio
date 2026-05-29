import React, { useEffect } from 'react'
import Arrow from '../assets/upright.png'
import { motion } from 'framer-motion'


const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  }
}
const ServicesCard = ({ serviceTitle, servicesImg }) => {
  
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
    <div className='bg-[#ffffff2a] border-1 hover:translate-y-2 overflow-hidden rounded-[35px] flex flex-col justify-between h-100 gap-[2em]' style={{backdropFilter: 'blur(5px)', transition: '0.3s ease-in-out', padding: '20px 0 0'}}>
      <div className='flex items-center border-b justify-between' style={{padding: '15px 20px'}}>
        <h1 className='text-2xl'>{serviceTitle}</h1>
        <div className="group relative flex justify-center items-center text-white font-bold">
          <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[100%] -translate-y-[100%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
            <div className="shadow-md bg-[#FD853A] absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1" />
            <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
              <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1" /></div>
            </div>
            <div style={{padding: '10px'}} className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br bg-[#FD853A] p-3 rounded-full cursor-pointer duration-300">
              <img width={'20px'} src={Arrow} alt="" />
              <span className="text-[0px] group-hover:text-sm duration-300">Quote</span>
            </div>
          </div>
        </div>
        <div className='w-full h-[300px] flex flex-col relative justify-end beforeBg'>
          <div style={{justifyContent: 'space-between'}} className='w-full h-[90%] object-fit-cover'>
            <img className='w-full h-[100%]' src={servicesImg} alt="" />
          </div>
        </div>
    </div>
    </motion.div>
  )
}

export default ServicesCard