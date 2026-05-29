import React from 'react'
import circle from './assets/circle.png'
import Navbar from './componenets/Navbar'
import Awesome from './componenets/Awesome'
import Frame from './componenets/Frame'
import Footer from './componenets/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Project from './Pages/Project'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/home' element={<Navigate to='/' />}></Route>
      </Routes>
      <Awesome />
      <Frame />
      <Footer />
    </div>
  )
}

export default App