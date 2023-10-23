import React from 'react'
import Prjts from './Prjts';
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/0.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/9.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/9.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/8.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Project = () => {
return (
<>
<h2 className='text-center text-4xl font-bold text-white mt-4 '>
My Projects
</h2>
<div className='text-white flex flex-row  justify-center items-center gap-2 py-6'>
<button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer '>
    All
</button>
<button className='rounded-full border-2 border-slate-500 px-6 py-3 text-xl cursor-pointer hover:border-white '>Web</button>
</div>
<div className='grid md:grid-cols-3 gap-8 md:gap-12'>
    {
        projectsData.map((project)=>(
<Prjts key={project.id}
title={project.title}
description={project.description}
imgUrl={project.image}
tags={project}
gitUrl={project.gitUrl}
previewUrl={project.previewUrl}
/>
        ))
    }

</div>
</>
    
) 


}
export default Project