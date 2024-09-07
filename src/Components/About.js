import React from 'react'
import linkedin from '../assets/icons8-linkedin-50.png'
import github from '../assets/icons8-github-64.png'
import instagram from '../assets/icons8-instagram-64.png'
import x from '../assets/icons8-x-50.png'
import twitter from '../assets/icons8-twitter-64.png'

const About = () => {
  return (
    <div className='absolute bg-customColor backdrop-filter backdrop-blur-sm opacity-120 text-white  p-10 m-[10%] ml-[10%] backdrop-filter rounded-lg mt-40   ////hover:my-rotate-y-180'
    >
         <h1 className='font-bold text-3xl opacity-100 text-center '>Hi! This is Ananya Mohapatra 👋</h1>
        <div  className='pt-5'><p className="text-center text-lg">I am a Software Developer, specializing in Frontend Development.<br/>
            With a passion for crafting intuitive user experiences and a keen eye for design, I thrive on translating complex financial systems into seamless interfaces. From wireframes to pixel-perfect implementations, I bring a blend of creativity and technical skill to every project. Let's collaborate to build user-centric solutions that redefine user experience for the digital age.

</p><br/>
<p className="text-center text-lg pb-5">In my available time,I like to learn new skills ,cooking, gardening.</p></div>
<ul className='flex justify-center mt-55'>
  
    <a href='https://www.linkedin.com/in/ananya-mohapatra-ab93471b3/' className='size-11 hover:scale-125 transition-all duration-500 cursor-pointer'><img src={linkedin} alt='linkedin'/></a>
    <a href='https://www.instagram.com/2710ananya_/' className='size-12 ml-2 hover:scale-125 transition-all duration-500 cursor-pointer '><img src={instagram}/></a>
    <a href='https://github.com/Ananya-Mohapatr' className='-mt-2 size-13 hover:scale-125 transition-all duration-500 cursor-pointer'><img src={github} alt='linkedin'/></a>
    
</ul>
    </div>
  )
}

export default About