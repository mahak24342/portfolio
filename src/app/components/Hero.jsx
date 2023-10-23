"use client"
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 mt-10'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
  <h1 className='text-white mb-4 lg:text-6xl font-extrabold sm:text-5xl text-4xl  '>
<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
Hello, I am {""}
</span>
<br/>

<TypeAnimation
              sequence={[
                "Judy",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /> 
            </h1>
<p className='text-[#ADB7BE] mb-6 lg:text-xl text-base sm:text-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolor! </p>
  <div>
    <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
      Hire Me
    </button>
    <button className='px-1 py-1 inline-block rounded-full  w-full  sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500  hover:bg-slate-800 text-white mt-3 '>
   <span className='block bg-[121212] hover:bg-slate-800 border border-white rounded-full px-5 py-2'> Download CV</span>  
    </button>
  </div>
  
    </div>
    <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
      <div className='rounded-2xl bg-[#181818] w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] relative'>
<Image src="/p0.jpg" width={250} height={250} className=' rounded-2xl absolute tranform  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '/>
</div>
    </div>
    </div>
  )
}

export default Hero