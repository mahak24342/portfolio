import React from 'react'
import { NavL } from './NavL'
const Overlay = ({links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>{
        links.map((link,index)=>(
            <li key={index}>
<NavL href={link.path } title={link.title}/></li>
        ))
    }

    </ul>
  )
}

export default Overlay