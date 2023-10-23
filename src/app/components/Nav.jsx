"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { NavL } from './NavL'
import {AiFillCloseCircle} from "react-icons/ai"
import { GiHamburgerMenu} from "react-icons/gi"
import Overlay from './Overlay'
const Navo=[
    {
        title:"About",
        path:"/About",
    },{
        title:"Projects",
        path:"Projects",
       
        
    }
    ,{
        title:"Contact",
        path:"Contact",
    }
]
const Nav = () => {
    const [navbarOpen,setNavbarOpen]=useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex container flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>Mahak</Link>
<div className='block md:hidden mobile-menu'>
    {
        !navbarOpen ?(
            <button  onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded hover:text-white hover:border-white border-slate-200 text-slate-200 '>
                <GiHamburgerMenu className='h-5 w-5 '/>

            </button>)
        :( <button  onClick={()=>setNavbarOpen(false)}  className='flex items-center px-3 py-2 border rounded hover:text-white hover:border-white border-slate-200 text-slate-200 '>
        <AiFillCloseCircle className='h-7 w-7 '/>

    </button>
            )

    }
    </div>          
          
          
            <div className='menu hidden md:block md:w-auto'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-xl '>
                {Navo.map((link, index) => (
              <li key={index}>
                <NavL href={link.path} title={link.title} />
              </li>
            ))}
        
                
                </ul>
            </div>
        </div>
      {
        navbarOpen ? <Overlay links={Navo}/>: null
      }
      
        
    </nav>
  )
}

export default Nav