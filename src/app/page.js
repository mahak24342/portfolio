import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import About from './components/About'
import Project from './components/Project'
import Email from './components/Email'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Exp from './components/Exp'

const page = () => {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] '>
  <Nav/>
  <div className='mx-auto px-12 py-9'>
   <Hero/>
   <About/>
   <Skills/>
   <Exp/>
   <Project/>
   <Email/>
   <Footer/>
   </div>
    </main>
  )
}

export default page