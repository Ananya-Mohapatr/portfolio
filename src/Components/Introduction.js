import React from 'react'
import photo from '../assets/profilePhoto.jpg'

const Introduction = () => {
  return (
        <div className='absolute justify-center bg-customColor backdrop-filter rounded-lg backdrop-blur-sm opacity-120 text-white  p-10 ml-[10%] mr-[10%] m-[10%] backdrop-filter  lg:flex md:flex  sm:object md:mt-[80%] sm:mt-[90%] lg:mt-[37%] 
         ////hover:my-rotate-y-180'
        >
            <img src={photo} className='h-[10%] lg:w-[20%] rounded-lg md:w-[50%] md:grid md:mx-auto sm:w-[50%] sm:grid sm:mx-auto'/>
            {/* <img src={photo}/> */}
           <div className=''>
             <h1 className='font-bold pl-10 text-3xl opacity-100 text-left'>About Me</h1>
            <div  className='pl-5'><p className="text-left text-lg"><br/>
             Welcome to my frontend developer portfolio! I am a highly skilled and experienced React JS developer with almost 3 years of experience in creating user-friendly and engaging web applications.I have hands-on knowledge on languages like Node JS,Angular TS ,Next JS,Javascript,Typescript. My passion for coding and my attention to detail has helped me to excel in the field of web development.
    
    </p><br/>
    <p className="text-left text-lg pb-5">Throughout my career, I have worked on a wide variety of projects ranging from small-scale web applications to large-scale enterprise systems. I have mostly dealt with clients and worked on FinTech Projects. My expertise lies in developing responsive and dynamic user interfaces, implementing complex business logic, and integrating with backend APIs to create seamless user experiences. I am well-versed in using a range of tools and technologies such as Redux, React Router, and builders like webpack,Parcel to build scalable and maintainable React applications. I also have hands-on knowledge in using testing frameworks such as Jest  to ensure the quality of my code. In this portfolio, you will find a selection of my work which showcases my skills and expertise as a React JS developer.</p><br/>
    <p className="text-left text-lg pb-5">I hope that you will find my projects to be engaging and informative, and I look forward to the opportunity to discuss how I can contribute to your team.</p></div>
        </div>
        </div>
      )
}

export default Introduction