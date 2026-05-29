import React from 'react'
import FrameImg from '../assets/frame.png'

const Frame = () => {
  return (
    <div style={{margin: '20px 0'}} className='wireframe bg-[#FD853A] rounded-tl-3xl rounded-br-3xl'>
      <img className='object-contain' src={FrameImg} alt="" />
    </div>
  )
}

export default Frame