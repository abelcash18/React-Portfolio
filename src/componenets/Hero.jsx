import React, { useEffect, useState } from 'react'
import Vector from '../assets/Vector.png'
import Circle from '../assets/circle.png'
import Human from '../assets/human.png'
import Quote from '../assets/quote-up.png'
import Star from '../assets/star.png'
import Vector2 from '../assets/Vector2.png'
import Arrow from '../assets/upright.png'
import Typewritter from './Typewritter'

const Hero = () => {

  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div className='flex flex-col heroSection justify-center items-center bg-white text-black'>
      <div className='w-full flex justify-center items-center relative'>
        <div className='flex flex-col justify-center items-center gap-4 relative'>
          {/* for hello text */}
          <div className='relative'>
            <h2 className='helloText border-1 border-black text-black rounded-[38px]'>Hello!</h2>
            <img className='absolute right-[-25px] top-[-25px]' src={Vector} alt={Vector} />
          </div>
          {/* hero content */}
          <div className='relative'>
            <h1 className='text-center text-[3em] md:text-[75px] leading-[1em]'>I'm 
              <span className='text-[#FD853A]'> <Typewritter delay={0.1} pauseTime={1000} words={['Joseph', "Abel", "Olayinka"]}/></span>, <br /> Full Stack Developer</h1>
            <img className='absolute w-[50px] md:w-auto bottom-[-40%] left-[-50px]' src={Vector2} alt="" />
          </div>
          {/* hero description */}
          <div className='w-full grid gap-[20px] items-center md:grid-cols-[20%_60%_20%] heroImg justify-between md:items-start md:gap-0'>
            <div className='w-full text-center relative md:static md:text-left'>
              <img className='absolute top-[-10px] md:relative' src={Quote} alt="" />
              <p style={{marginTop: '20px'}} className='text-[20px] leading-[30px]'>
                AbelTech is a leading web development company specializing in creating stunning,
                high-performance websites that drive results. With a team of skilled developers and designers,
                we craft custom web solutions tailored to your business needs. From responsive design to seamless user experience.
                </p>
            </div>
            {/* for profile pic */}
            <div className='w-full row-start-3 md:row-start-auto relative profilePic'>
              <img className='w-full' src={Circle} alt='svg' />
              <img className='absolute w-full bottom-0' src={Human} alt='svg' />
              <div className='absolute left-[15%] md:left-[35%] bottom-2 border-1 rounded-[60px] bg-[#ffffff33] backdrop-blur-[5px] border-[#ffffff] cta'>
                <div className='flex gap-2 actionBtn'>
                  <button
                    onMouseEnter={() => setHoveredBtn('portfolio')}
                    onMouseLeave={() => setHoveredBtn(null)}
                    className={`flex items-center gap-2 bg-[#FD853A] rounded-[60px] cursor-pointer text-white ${hoveredBtn === 'portfolio' ? 'bg-[#ffffff00]' : ''}`}>
                    <span>Portfolio</span>
                    <img width={'17px'} src={Arrow} alt="" />
                  </button>

                  <a target='_blank' href="https://wa.me/2349056424816">
                    <button
                      onMouseEnter={() => setHoveredBtn('hire')}
                      onMouseLeave={() => setHoveredBtn(null)}
                      style={{transition: '0.2s ease-in-out'}}
                      className={`flex items-center gap-2 rounded-[60px] text-white cursor-pointer ${hoveredBtn === 'hire' ? 'bg-[#FD853A]' : ''}`}>
                      <span>Hire</span>
                      <img width={'17px'} src={`${hoveredBtn === 'hire' ? Arrow : ''}`} alt={`${hoveredBtn === 'hire' ? Arrow : ''}`} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* for star rating */}
            <div className='w-full flex flex-col items-center justify-center md:items-end gap-2'>
              <img src={Star} alt="" />
              <h1 className='text-5xl'>3 Years</h1>
              <small>Experience</small>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero