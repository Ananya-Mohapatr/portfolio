import React from 'react'
import linkedin from '../assets/icons8-linkedin-50.png'
import github from '../assets/icons8-github-64.png'
import instagram from '../assets/icons8-instagram-64.png'
import gmailImg from '../assets/icons8-gmail-50.png'

const contactDetails = () => {
    return (
        <div className="absolute justify-center bg-gradient-to-r from-neutral-800 to-sky-700 bg-opacity-95 rounded-lg  text-white w-[100%] p-10   sm:object md:mt-[370%] sm:mt-[340%] lg:mt-[158%] "
         ////hover:my-rotate-y-180'
        >
          <h1 className='font-bold pl-10 text-3xl opacity-100 text-left bg-opacity-25'>Want to connect ? Sure You can do !</h1>

          {/* <img src={photo} className='h-[10%] lg:w-[20%] rounded-lg sm:w-[50%] sm:grid sm:mx-auto'/> */}
          {/* <img src={photo}/> */}
          <ul className='flex gap-8 justify-center mt-55'>
  
    <a href='https://www.linkedin.com/in/ananya-mohapatra-ab93471b3/' className='size-11 hover:scale-125 transition-all duration-500 cursor-pointer'><img src={linkedin} alt='linkedin'/></a>
    <a href='https://www.instagram.com/2710ananya_/' className='size-12 ml-2 hover:scale-125 transition-all duration-500 cursor-pointer '><img src={instagram}/></a>
    <a href='https://github.com/Ananya-Mohapatr' className='-mt-2 size-13 hover:scale-125 transition-all duration-500 cursor-pointer'><img src={github} alt='linkedin'/></a>
    <a href='mailto:ananyamohapatra27@gmail.com' className='-mt-1 size-13 hover:scale-125 transition-all duration-500 cursor-pointer'><img src={gmailImg} alt='gmail'/></a>
    
</ul>
    
            
          
          </div>
          )
}

export default contactDetails