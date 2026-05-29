import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' }
  }
}
const Contact = () => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
    <div style={{padding: '5% 7%'}} className='About flex flex-col gap-4 items-center'>
      <h1 className='text-4xl font-bold text-center'>Contact <span className='text-[#FD853A]'>Me</span></h1>
      <div style={{marginTop: '40px'}} className='grid md:grid-cols-[1fr_1fr] items-start justify-center md:flex-row md:gap-[5em] gap-4'>
        <div className='w-full flex text-center md:text-left flex-col gap-[3em]'>
          <h1 className='text-3xl text-[#FD853A] font-bold'>Let's work together</h1>
          <p className='leading-[30px]'>
            Feel free to reach out — whether you have a project, <br /> a question, or just want to connect. I’m open to freelance <br />
             opportunities, team collaborations, or sharing insights and ideas.
          </p>
          <div className='socialLink flex gap-3'>
            <a href="https://www.facebook.com/OkikiolaFakorede01" className='text-3xl text-[#FD853A] transition-all hover:text-[#583c2a]'><FaFacebookSquare /></a>
            <a href="" className='text-3xl text-[#FD853A] transition-all hover:text-[#583c2a]'><FaLinkedin /></a>
            <a href="https://x.com/conquer_create" className='text-3xl text-[#FD853A] transition-all hover:text-[#583c2a]'><FaSquareXTwitter /></a>
            <a href="https://github.com/Holuwaconquer" className='text-3xl text-[#FD853A] transition-all hover:text-[#583c2a]'><FaGithubSquare /></a>
          </div>
        </div>
        <div className='w-full'>
          <form className='w-full flex flex-col gap-4' action="">
            <input type="text" placeholder='Name' style={{padding: '20px'}} className='bg-[#e6e6e6] focus:outline-1 focus:border-[#FD853A] w-full border-0 text-black'/>
            <input type="text" placeholder='Email' style={{padding: '20px'}} className='bg-[#e6e6e6] w-full border-0 text-black'/>
            <textarea name="" rows='7' style={{padding: '20px', resize: 'none'}} placeholder='Type your message here' className='bg-[#e6e6e6] w-full border-0 text-black' id=""></textarea>
            <button style={{padding: '20px'}} className='bg-[#FD853A] block cursor-pointer' type='button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default Contact