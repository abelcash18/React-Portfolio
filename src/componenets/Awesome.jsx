import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import Sms from '../assets/sms.png'
import oneStar from '../assets/1star.png'
import Award from '../assets/award.png'
import Shield from '../assets/shield-tick.png'

// Animation variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  }
}


const Awesome = () => {
  const [userMessage, setUserMessage] = useState('')

  const sendMail = () =>{
    if(userMessage){
      const phoneNumber = '2349056424816'; // Replace with your phone number
      const encodedMessage = encodeURIComponent(userMessage);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

      window.open(whatsappUrl, '_blank');
    }else{
      alert('no message to send')
    }
  }

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // 👈 Animate every time in view
      style={{ padding: '5% 7%' }}
      className='awesome flex flex-col items-center justify-center'
    >
      <h1 className='text-3xl md:text-4xl font-bold text-center md:w-2/4'>
        Have an Awsome Project Idea? <span className='text-[#0099FF]'>Let's Discuss</span>
      </h1>

      <div style={{ padding: '10px', marginTop: '20px' }} className='border-1 rounded-[60px] border-[#E4E7EC] md:w-2/4'>
        <div className='w-full flex items-center'>
          <div className='w-[64px] h-[58px] bg-[#FFEAD5] rounded-[50px] flex flex-col items-center justify-center'>
            <img src={Sms} alt="email icon" />
          </div>
          <input
            style={{ padding: '10px 20px' }}
            className='border-0 w-[80%] focus:outline-0'
            type="text"
            placeholder='Enter Email Address'
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <Button onClick={sendMail} className='px-[35px] py-2.5' BtnText='Send' />
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:w-2/4 text-[14px] justify-between items-center mt-2.5'>
        <span className='flex items-center gap-1'><img src={oneStar} alt="rating" /> <span>4.9/5 Average Ratings</span></span>
        <span className='flex items-center gap-1'><img src={Award} alt="award" /> <span>25+ Winning Awards</span></span>
        <span className='flex items-center gap-1'><img src={Shield} alt="shield" /> <span>Certified Software Developer</span></span>
      </div>
    </motion.div>
  )
}

export default Awesome
