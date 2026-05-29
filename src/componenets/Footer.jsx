// Footer component
import Arrow from '../assets/upright.png'
import Logo from '../assets/newLogo.png'
import Filled from '../assets/filled.png'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import MyLogo from '../assets/favicon-32x32.png'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' }
  }
}

const Footer = () => {

  // const date = new Date().
  

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      style={{ padding: '4% 7% 1%' }}
      className='bg-[#272727] rounded-t-3xl'
    >
      <div className='flex w-full flex-col gap-[1em]'>

        {/* Top section */}
        <div className='w-full flex gap-4 md:gap-0 flex-col md:flex-row md:items-center justify-between border-[#475467] border-b pb-10'>
          <h1 className='text-4xl font-bold text-white'>Let's Connect there</h1>
          <span>
            <a target='_blank' rel='noopener noreferrer' href="https://wa.me/2349056424816">
              <button
                className='flex items-center gap-2 bg-[#FD853A] hover:bg-transparent border border-[#FD853A] rounded-[60px] cursor-pointer text-white px-6 py-2.5 transition-all'
                >
                <span>Hire Me</span>
                <img width={'17px'} src={Arrow} alt="arrow" />
              </button>
            </a>
          </span>
        </div>

        {/* Middle Grid */}
        <div style={{ marginTop: '40px' }} className='grid text-white gap-4 md:grid-cols-[3fr_1fr_1fr_2fr] w-full'>
          <div className='flex flex-col gap-5'>
            <div className='logo flex items-center gap-2'>
              <img src={MyLogo} alt='logo' />
              <h1 className='text-3xl'>AbelTech Solutions</h1>
            </div>
            <p>
              Feel free to reach out via email or connect with me on social platforms. I’m always open to 
              exciting opportunities, freelance work, or even just sharing ideas over coffee (virtual or real ☕).
            </p>
            <div className='socialLink flex gap-3'>
            <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/OkikiolaFakorede01" className='text-3xl text-[#FD853A] transition-all hover:text-[#583c2a]'><FaFacebookSquare /></a>
            <a target='_blank' rel='noopener noreferrer' href="" className='text-3xl text-[#FD853A] transition-all hover:text-[#583c2a]'><FaLinkedin /></a>
            <a target='_blank' rel='noopener noreferrer' href="https://x.com/conquer_create" className='text-3xl text-[#FD853A] transition-all hover:text-[#583c2a]'><FaSquareXTwitter /></a>
            <a target='_blank' rel='noopener noreferrer' href="https://github.com/Holuwaconquer" className='text-3xl text-[#FD853A] transition-all hover:text-[#583c2a]'><FaGithubSquare /></a>
            </div>
          </div>

          <div className='navigate'>
            <h1 className='font-bold text-2xl text-[#FD853A]'>Navigation</h1>
            <ul style={{ marginTop: '10px' }}>
              <li><NavLink to='/' className='hover:text-[#FD853A]'>Home</NavLink></li>
              <li><NavLink to='about' className='hover:text-[#FD853A]'>About Us</NavLink></li>
              <li><NavLink to='services' className='hover:text-[#FD853A]'>Service</NavLink></li>
              <li><NavLink to='resume' className='hover:text-[#FD853A]'>Resume</NavLink></li>
              <li><NavLink to='project' className='hover:text-[#FD853A]'>Project</NavLink></li>
            </ul>
          </div>

          <div className='navigate'>
            <h1 className='font-bold text-2xl text-[#FD853A]'>Contact</h1>
            <div style={{ marginTop: '10px' }}>
              <h1>+2349056424816</h1>
              <h1>josephabel540@gmail.com</h1>
              <h1><a className='hover:text-[#FD853A]' target='_blank' rel='noopener noreferrer' href="https://github.com/abelcash18">Github Profile</a></h1>
            </div>
          </div>

          <div>
            <h1 className='text-[#FD853A]'>Get the latest information</h1>
            <div style={{ marginTop: '20px' }} className='w-full flex items-center'>
              <input
                type="text"
                placeholder='Enter Email Address'
                className='bg-white text-black focus:outline-0 rounded-bl-[10px] rounded-tl-[10px]'
                style={{ padding: '10px' }}
              />
              <button style={{ padding: '10px' }} className='bg-[#FD853A] hover:bg-[hsl(17,98%,61%)] cursor-pointer rounded-br-[10px] rounded-tr-[10px]'>
                <img src={Filled} alt="decorative element" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ padding: '30px 0 10px 0' }} className='flex flex-col md:flex-row md:items-center border-[#475467] border-t text-white w-full justify-between'>
          <p>©{new Date().getFullYear()} AbelTech Solutions. All Rights Reserved.</p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
