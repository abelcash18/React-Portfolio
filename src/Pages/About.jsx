// About page
import Button from '../componenets/Button'
import Human from '../assets/hireMe.png'
import { motion } from 'framer-motion'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' }
  }
}

const About = () => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
    <div className='py-[5%] px-[10%] About flex flex-col gap-4 items-center'>
      <h1 className='text-4xl font-bold text-center'>About <span className='text-[#0099FF]'>Me</span></h1>

      <div className='grid md:grid-cols-[1fr_1fr] items-center justify-center md:flex-row gap-4'>
        <div className='w-full flex text-center md:text-left flex-col gap-4'>
          <h1 className='text-3xl text-[#0099FF] font-bold'>Know who i am</h1>
          <h2 className='text-2xl'>My journey in few words</h2>
          <p>
            Hi, I am Joseph Abel Olayinka,  .
          </p>
          <Button className='px-5 py-2.5 rounded-[10px]' BtnText='Hire me' />
        </div>
        <div className='w-full self-end'>
          <img className='w-full rotate-5' src={Human} alt="Profile picture" />
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default About