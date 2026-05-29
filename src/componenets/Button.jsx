const Button = ({ BtnText, style, onClick }) => {
  return (
    <>
      <span>
        <button onClick={onClick} style={style} className='rounded-[60px] cursor-pointer hover:border-1 hover:bg-[transparent] hover:text-[#0099FF] hover:border-[#0099FF] bg-[#0099FF] border-1 text-white'>{BtnText}</button>
      </span>
    </>
  )
}

export default Button