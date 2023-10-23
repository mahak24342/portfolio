"use client"
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import {CgWorkAlt} from "react-icons/cg";
import { LuGraduationCap } from 'react-icons/lu';
import {FaReact} from "react-icons/fa"

const Exp = () => {
    
 const experiencesData = [
    {
      title: "Graduated bootcamp",
      location: "Miami, FL",
      description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: React.createElement(LuGraduationCap),
      date: "2019",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
      date: "2019 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2021 - present",
    },
  ]   
  return (
   <section>
<h2 className='text-white justify-center text-bold text-4xl text-center  font-bold' >
    My Experience
</h2>
<VerticalTimeline className='flex gap-5 flex-wrap justify-center items-center'>
    {
        experiencesData.map((item,index)=>(
            <React.Fragment key={index}>
<VerticalTimelineElement contentStyle={
    {
        background:"#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
        height:"250px",
        width:"250px",
        justifyItems:"center",
        alignItems:"center",
      
    }}
    contentArrowStyle={
        {
            borderRight:"0.4rem solid #9ca3af",
        }
    } 
    data={item.date}
    icon={item.icon}iconStyle={{
        background:
         "rgba(255, 255, 255, 0.15)",
        fontSize: "1.5rem",
        color:"white"
      }}
>
<h3>{item.title}</h3>
<p>
    {item.location}
</p>
<p>{item.description}</p>
</VerticalTimelineElement>
</React.Fragment>
        ))
    }
</VerticalTimeline>

   </section>
  )
}

export default Exp