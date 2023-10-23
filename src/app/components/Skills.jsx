import React from 'react'

const Skills = () => {
  const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
  ] 
  return (
    <div className='mb-28 max-w-[53rem] scroll-mt-28 justify-center items-center text-center sm:mb-40'>
        <h2 className='text-white justify-center text-bold text-4xl text-center  font-bold'>My Skills</h2>
 <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800  items-center mt-5'>
  {skillsData.map((skill,index)=>(
    <li key={index} className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 '>{skill} </li>
  ))}
 </ul>
 
    </div>
  )
}

export default Skills