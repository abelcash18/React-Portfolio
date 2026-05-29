import { BsArrowUpRightSquareFill } from "react-icons/bs";

const FolioCard = ({ category, title, details, anchor, techStack, image, className }) => {
  return (
    <div className='border-b border-black pb-2.5'>
      <div className={className}>
        <div className='w-[90%] md:h-[280px] shadow-md rounded-[20px] object-fit-cover'>
          <img src={image} className='w-full h-full rounded-[20px] object-fit-cover' alt="project-image" />
        </div>
        <div className='w-full flex md:gap-[1em] md:items-center'>
          <div>
            <small>{category}</small>
            <h1 className='font-bold text-3xl text-[#FD853A] mb-2.5'>{title}</h1>
            <p className='text-justify'>
              {details}
            </p>
            <h1 className='' style={{marginTop: '20px'}}>Tech Stack: <br /> <span className='text-[#FD853A]'>{techStack}</span></h1>
          </div>
          <div>
            <a target='_blank' rel='noopener noreferrer' href={anchor}><BsArrowUpRightSquareFill className='text-4xl hover:text-[#3b281d] text-[#FD853A]' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FolioCard