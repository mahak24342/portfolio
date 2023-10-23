import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import {BsLinkedin} from "react-icons/bs";
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';
const Email = () => {
  return (
   <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
<div id="#contact">
    <h5 className='text-xl font-bold text-white my-2 ' >
        Lets Connect
    </h5>
<p className='text-[#ADB7BE] mb-4 max-w-md'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur alias voluptatum magnam vitae perferendis at, error rerum adipisci illo est, nulla, dolore eius! Corrupti culpa quasi vero porro obcaecati et omnis corporis enim. Quas laboriosam officia porro unde possimus nemo commodi molestias, exercitationem mollitia sed, ipsam, saepe odit vero.
</p>

<div className='socials flex flex-row gap-2'>
<Link href="/">
<AiFillInstagram className='ki'/>
</Link>
<Link href="/">
<BsLinkedin className='ki'/>
</Link>
<Link href="/">
<BsFacebook className='ki'/>
</Link>
</div>
</div>
<div>
    <form className='flex flex-col '>
        <div className='mb-6'>

       
        <label htmlFor="email" type="email" className='text-white mb-2 block  text-sm '>Your Email</label>
<input type="email" id="email" required placeholder="porwalmahak784@gmail.com" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA3A] text-gray-100 text-sm rounded-lg  block w-full p-2.5'/>
</div>
<div className='mb-6 '>
<label htmlFor="subject" type="email" className='text-white block mb-2 text-sm '>Subject</label>
<input type="text" id="subject" required placeholder="Say Hii" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA3A] text-gray-100 text-sm rounded-lg  block w-full p-2.5'/>
</div>
<div>
    <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
        Message
    </label>
<textarea name="message" id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA3A] text-gray-100 text-sm rounded-lg  block w-full p-2.5' placeholder="Hi "/>
<button type="submit" className='bg-purple-500 hover:bg-purple-600 mt-5 text-white py-2.5 px-5  rounded-lg w-full font-medium '>Submit</button>
</div>
    </form>


</div>

   </section>
  )
}

export default Email