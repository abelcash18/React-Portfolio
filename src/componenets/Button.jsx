import React from 'react'

const Button = ({ BtnText, style, onClick }) => {
  return (
    <>
      <span>
        <button onClick={onClick} style={style} className='rounded-[60px] cursor-pointer hover:border-1 hover:bg-[transparent] hover:text-[#FD853A] hover:border-[#FD853A] bg-[#FD853A] border-1 text-white'>{BtnText}</button>
      </span>
    </>
  )
}

export default Button