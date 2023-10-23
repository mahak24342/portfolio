import React from 'react'
import Project from '../components/Project'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='bg-black '>
<Nav/>

        <Project/>
        <Footer />
    </div>
  )
}

export default page