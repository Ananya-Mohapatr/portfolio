import React from 'react'
import samplePDF1 from './Ananya Mohapatra - Frontend Dev.pdf'

const Header = () => {
  return (
    <div className='fixed  z-50 w-full h-15 overflow-hidden bg-gradient-to-r from-neutral-800 to-sky-700 bg-opacity-95 text-white flex justify-evenly mb-10'>
          <h1 className='font-bold text-3xl p-4 m-4'>PortFolio of Ananya Mohapatra</h1>
          <div className='flex  p-4 m-4'>
            <h3 className='font-bold text-xl pl-2.5 '>Download Resume</h3>
            <a href={samplePDF1} target="_blank"
                    rel="noreferrer"> 
                 <img width="50" height="50" className='pl-2 hover:scale-125 transition-all duration-500' src="https://img.icons8.com/bubbles/50/downloading-updates.png" alt="downloading-updates"/>
                </a> 
           
                   </div>
     </div>
  )
}

export default Header