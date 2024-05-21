import React from 'react'

const Header = () => {
  return (
    <div className='absolute w-full h-15 overflow-hidden bg-gradient-to-r from-neutral-800 to-sky-700 bg-opacity-95 text-white flex justify-evenly mb-10'>
          <h1 className='font-bold text-3xl p-4 m-4'>PortFolio of Ananya Mohapatra</h1>
          <div className='flex  p-4 m-4'>
            <h3 className='font-bold text-xl pl-2.5 '>About</h3>
            <h3 className='font-bold text-xl pl-2.5 '> Resume</h3>
            <h3 className='font-bold text-xl pl-2.5 '>Portfolio</h3>
            <h3 className='font-bold text-xl pl-2.5 '>Contact</h3>
          </div>
     </div>
  )
}

export default Header