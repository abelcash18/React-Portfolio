import React from 'react'
import FolioCard from '../componenets/FolioCard'
import Webapp from '../assets/web-app.png'
import Ally from '../assets/AiAlly.png'
import Todo from '../assets/todo.png'
import Stopgap from '../assets/stopgap.png'
import Melody from '../assets/Melodies.png'
import Fastcart from '../assets/fastcart.png'
import Zeezat from '../assets/zeezat.png'


const Project = () => {
  return (
    <div style={{padding: '5% 7%'}} className='About flex flex-col gap-4 items-center'>
      <h1 className='text-4xl font-bold text-center'>My <span className='text-[#FD853A]'>Project</span></h1>

      <div className='w-full grid gap-2 md:gap-5'>
        <FolioCard 
          category='Desktop Application' 
          title='Zeezat Inventory & POS' 
          details='This is an inventory & pos system for Zeezat Foods to track and manage their product and sales, also for automated calculations of their sales and product count.' 
          anchor='https://github.com/Holuwaconquer/Zeezat-Foods'
          techStack= 'Tailwind, Reactjs, Redux, React-Toastify, Recharts, Express.js, MongoDB, Node.js, Tauri' 
          image={Zeezat}
          className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[1em] md:gap-[3em]'
        />
        <FolioCard 
          category='E-Commerce' 
          title='Fastcart' 
          details='This is a Ecommerce Web Application with PWA Support, that i built as my final project at SQI College of ICT, i stumbled upon the designed on Figma and replicated the desiged with the MERN stack framework, with other frontend library.' 
          anchor='https://fastcart-ecommerce-web-app.vercel.app'
          techStack= 'Tailwind, Reactjs, Redux, React-Toastify, Recharts, Express.js, MongoDB, Node.js, ' 
          image={Fastcart}
          className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[1em] md:gap-[3em]'
        />
        <FolioCard 
          category='Music Web App' 
          title='Melodies' 
          details='Melodies is Music Application, that uses the Audis API to fetch it music, the features of the application includes fetching music data from the API and giving the user to listen to the music in our application and also get information about the music, artist and the artist information, you can play music, view trending music, trending artist, etc.' 
          anchor='https://mymelodies.vercel.app'
          techStack= 'Tailwind, Reactjs, Redux, React-Toastify, Audius API' 
          image={Melody}
          className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[1em] md:gap-[3em]'
        />
        <FolioCard 
          category='Real Estate Marketplace' 
          title='Estatery' 
          details='This is a real estate community web app that focuses on connecting house owner or agent to buyers and vise versa, this web app is designed with vanila JavaScript and firebase.' 
          anchor='https://livest-real-estate.web.app'
          techStack= 'Javascript, Bootstrap, Firebase, Introjs, Emailjs' 
          image={Webapp}
          className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[1em] md:gap-[3em]'
        />
        <FolioCard 
          category='Web App' 
          title='Stopgap Mail' 
          details=".Gap Mail (Stop Gap Mail) is a lightweight web application designed to let users instantly generate temporary, disposable email addresses for anonymous or short-term use. The platform enables users to receive and preview incoming messages without needing to sign up or provide personal information. It's ideal for avoiding spam, protecting privacy" 
          techStack= 'Javascript, Guerrilla  API, Bootstrap'
          anchor='https://stopgap-f65dc.web.app/' 
          image={Stopgap}
          className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[1em] md:gap-[3em]'
          />
        <FolioCard 
          category='Web App' 
          title='Todo List' 
          details='This is a todo list web app built with reactjs, user can add task title and details, delete and edit task, and also mark task as completed, the app also has a calendar features, where you can choose the target date of the task.' 
          anchor='https://conquertab.vercel.app/' 
          techStack= 'Reactjs, Localstorage'
          image={Todo}
          className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[1em] md:gap-[3em]'
          />
        <FolioCard 
          category='Landing Page (Static)' 
          title='Ai Ally' 
          details='This is a landing page for an AI Web platform, the website is built HTML, CSS (BOOTSTRAP)' 
          techStack= 'HTML, CSS, BootStrap'
          anchor='https://all-ally-website.vercel.app/' 
          className='grid md:grid-cols-[1fr_1fr] items-center justify-center gap-[1em] md:gap-[3em]'
          image={Ally}
        />
      </div>
      
    </div>
  )
}

export default Project