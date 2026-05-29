import React from 'react'
import Hero from '../componenets/Hero'
import Myservices from '../componenets/Myservices'
import Work from '../componenets/Work'
import HireMe from '../componenets/HireMe'
import Portfolio from '../componenets/Portfolio'
import Testimonials from '../componenets/Testimonials'

const Home = () => {
  return (
    <>
        <Hero />
        <Myservices />
        <Work />
        <HireMe />
        <Portfolio />
        <Testimonials />
    </>
  )
}

export default Home