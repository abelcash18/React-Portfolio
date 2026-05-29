import React from 'react'
import QuoteDown from '../assets/quote-down.png'



const TestiCard = ({ testiAuthor, testiCompany, testtiImg, testiWord, testiStar }) => {
  return (
    <div style={{padding: '20px', backdropFilter: 'blur(10px)'}} className='flex flex-col gap-5 justify-between rounded-[20px] bg-[rgba(255,255,255,0.14)] text-white'>
      <div className='flex w-full items-center justify-center'>
        <div className='flex w-full flex-col gap-2'>
          <div className='flex gap-2 items-center'>
            <img src={testtiImg} alt={testtiImg} />
            <div>
              <h1>{testiAuthor}</h1>
              <p>{testiCompany}</p>
            </div>
          </div>
          <div>
            <img src={testiStar} alt={testiStar} />
          </div>
        </div>
        <div>
          <img className='opacity-25' src={QuoteDown} alt={QuoteDown} />
        </div>
      </div>
      <div>
        <p className='text-[#F9FAFB]'>
          {testiWord}
        </p>
      </div>
    </div>
  )
}

export default TestiCard