"use client"
import Image from 'next/image'
import React,{useState,useTransition} from 'react'
import Tab from './Tab';

const About = () => {
    const [tab,setTab]=useState("skills");
    const [isPending,startTransition]=useTransition();
    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);

        })
    }
  return (
   <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
<Image src="/2.png" width={500} height={500}/>
<div>
    <h2 className='text-4xl font-bold text-white mb-4'>
        About Me
    </h2>
<p className='text-base md:text-lg '>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus neque amet provident sint. Officiis reprehenderit aut cupiditate quae at error modi harum! Possimus saepe blanditiis unde sapiente, voluptate voluptatibus, dolores ipsam omnis repellendus earum harum minima nulla. Fugiat, eum laudantium. Ipsa repellendus voluptatum eius, impedit exercitationem commodi voluptate quo minus voluptatem est, ex doloribus repellat eaque, corrupti repudiandae nam placeat illo incidunt laudantium esse magni vel! Ipsa, facere non hic reiciendis cupiditate nobis dolore, accusamus recusandae reprehenderit quae impedit excepturi cumque dignissimos placeat porro? Nostrum animi ratione harum ad veritatis quis repellendus, in molestiae aliquam itaque excepturi maxime ut.
</p>
<div className='flex flex-row mt-8 gap-8'>
   <div className=' border-white border-2 rounded-lg  p-4 text-base'>
   <h3>
    Experience
   </h3>
<p>2+ Years <br/>
Frontend Development
 </p>
   </div>
   <div className='border-white border-2 rounded-lg  p-4 text-base'>
   <h3>
    Experience
   </h3>
<p>2+ Years <br/>
Frontend Development
 </p>
   </div>
    </div>
</div>
    </div>
   </section>
  )
}

export default About