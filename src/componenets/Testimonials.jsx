import React, { useEffect } from 'react'
import TestiCard from './TestiCard'
import ProfileImage from '../assets/profileImg.png'
import Star from '../assets/star.png'
import { motion } from 'framer-motion'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  }
}
const Testimonials = () => {

  return (
    <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          <div className='testimoniesSection'>
            <div className='flex flex-col gap-[4em] justify-center items-center text-white'>
              <div className='text-center flex flex-col gap-4 justify-center items-center'>
                <h1 className='text-4xl md:w-2/4'>Testimonials That Speak to <span className='text-[#FD853A]'>My Results</span></h1>
                <p className='text-[#F9FAFB] md:w-2/4 text-[15px]'>Every project is a partnership, and these testimonials reflect the passion, trust, and dedication that go into everything I create.
                </p>
              </div>
              <div className='testimonyCard grid w-full gap-[1em] flex-nowrap md:grid-cols-[40vw_40vw_40vw_40vw]'>
                <TestiCard 
                  testiAuthor='Emmanuel Ayobami' 
                  testiCompany='Funaabites' 
                  testiWord='Working with Okikiola was an absolute pleasure. He understood our needs perfectly and delivered a product that exceeded expectations. Highly recommended!'
                  testtiImg={ProfileImage}
                  testiStar={Star}
                />
                <TestiCard 
                  testiAuthor='Mr Akeem' 
                  testiCompany='Partner' 
                  testiWord='His creative vision is unmatched. Okikiola brought a fresh perspective to our brand and executed everything with precision and style.'
                  testtiImg={ProfileImage}
                  testiStar={Star}
                />
                <TestiCard 
                  testiAuthor='Mr. Abiola' 
                  testiCompany='SCICIT' 
                  testiWord='From the initial consultation to the final launch, Okikiola was professional, responsive, and technically brilliant. He built a web application that’s both functional and beautiful.”'
                  testtiImg={ProfileImage}
                  testiStar={Star}
                />
                <TestiCard 
                  testiAuthor='John Doe' 
                  testiCompany='Partner' 
                  testiWord='Clear communication, fast turnaround, and high-quality results. We always knew where we stood and felt supported every step of the way.'
                  testtiImg={ProfileImage}
                  testiStar={Star}
                />
              </div>
            </div>
          </div>
        </motion.div>
  )
}

export default Testimonials