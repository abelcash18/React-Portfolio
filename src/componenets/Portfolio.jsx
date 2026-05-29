import React from 'react'
import Button from './Button'
import FolioCard from '../componenets/FolioCard'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Fastcart from '../assets/fastcart.png'
import Zeezat from '../assets/zeezat.png'


const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' }
  }
}
const Portfolio = () => {

  const navigate = useNavigate()
  const goToProject= () =>{
    navigate('/project')
  }

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
    <div className='w-full homePortfolio flex flex-col gap-6'>
      <div className='flex items-start gap-4 flex-col md:flex-row justify-between md:items-center z-3'>
          <h1 className='text-2xl md:text-4xl  md:w-md z-3 font-bold text-[#344054]'>Lets have a look at my <span className='text-[#FD853A]'>Portfolio</span> </h1>
          <Button BtnText='See All' style={{padding: '10px 30px'}} onClick={goToProject} />
          
        </div>
        <div style={{margin: '20px 0'}} className='w-full grid md:gap-[1em] md:grid-cols-[1fr_1fr]'>
          <FolioCard 
            category='Desktop Application' 
            title='Zeezat Inventory & POS' 
            details='This is an inventory & pos system for Zeezat Foods to track and manage their product and sales, also for automated calculations of their sales and product count.' 
            anchor='https://github.com/Holuwaconquer/Zeezat-Foods'
            techStack= 'Tailwind, Reactjs, Redux, React-Toastify, Recharts, Express.js, MongoDB, Node.js, Tauri' 
            image={Zeezat}
            className='grid gap-[1em]'
          />
          <FolioCard 
            category='E-Commerce' 
            title='Fastcart' 
            details='This is a Ecommerce Web Application with PWA Support, that i built as my final project at SQI College of ICT, i stumbled upon the designed on Figma and replicated the desiged with the MERN stack framework, with other frontend library.' 
            anchor='https://fastcart-ecommerce-web-app.vercel.app'
            techStack= 'Tailwind, Reactjs, Redux, React-Toastify, Recharts, Express.js, MongoDB, Node.js, ' 
            image={Fastcart}
            className='grid gap-[1em]'
          />
        </div>
    </div>
    </motion.div>
  )
}

export default Portfolio