import { useState } from 'react'
import Services from '../assets/services.png'
import ServicesCard from './ServicesCard'
import Dashboard from '../assets/dashboard.png'
import Fastcart from '../assets/fastcart.png'

const Myservices = () => {

  const [hovered, setHovered] = useState(null)

  return (
    <div className='w-full servicesSection text-white bg-black md:rounded-[50px]'>
      <div className='w-full'>
        <div className='flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center z-3'>
          <h1 className='text-4xl z-3 font-bold'>My <span className='text-[#FD853A] '>Services</span> </h1>
          <p>Here are some of the services I offer: <br /> Software Development,Computer Engineer, Web Design, Web Application</p>
        </div>
        <div className='w-full grid gap-[3em] lg:grid-rows-1 lg:grid-cols-[1fr_1fr_1fr] mt-[3em]'>
          <ServicesCard servicesImg={Dashboard} serviceTitle='Web Appliication' />
          <ServicesCard servicesImg={Services} serviceTitle='Business Website' />
          <ServicesCard servicesImg={Fastcart} serviceTitle='Ecommerce' />
        </div>
      </div>
    </div>
  )
}

export default Myservices