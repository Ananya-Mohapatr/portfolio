import React from 'react'

const WorkExperience = () => {
  return (
    <div className='absolute justify-center bg-customColor backdrop-filter rounded-lg backdrop-blur-sm opacity-120 text-white  p-10 ml-[10%] mr-[10%] m-[20%] backdrop-filter  lg:flex md:flex  sm:object md:mt-[210%] sm:mt-[265%] lg:mt-[82%] 
     ////hover:my-rotate-y-180'
    >
      {/* <img src={photo} className='h-[10%] lg:w-[20%] rounded-lg sm:w-[50%] sm:grid sm:mx-auto'/> */}
      {/* <img src={photo}/> */}
      <div className=''>
        <h1 className='font-bold pl-10 text-3xl opacity-100 text-left'>Work Experience</h1>
        <div className='flex justify-between'><h3 className='font-bold pl-10 text-md opacity-100 text-left'>SOFTWARE ENGINEER at Trisys IT Services</h3> <h3 className='font-bold pl-5 text-md opacity-100 text-right'>09/2021 - Present</h3></div>
        <div className='pl-5 mt-10 mr-[90px]'>
          {/* <p className="text-left text-lg"><br/> */}
          <ul  style={{listStyleType: 'square'}} className="text-left text-lg">
            <li>Developed web application with 100% reusable components for future use using ReactJS to provide a seamless communication interface for users.</li>
            <li>Collaborated with product owners to finalize project plans using functional requirements.</li>
            <li>Collaborated with product owners to finalize project plans using functional requirements.</li>
            <li>Worked with UI/UX team for creating user interactive designs .</li>
            <li>Created non-technical and technical documents of operations and workflow to enable non-coding team to function with minimal interruption.</li>
          </ul>

        </div>
      </div>
      </div>
      )
}

      export default WorkExperience