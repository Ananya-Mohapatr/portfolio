import React from 'react'

const Education = () => {
  const educationList = [
    {
      id:1,
      type:'Bachelor of Technology',
      school:'Veer Surendra Sai University of Technology, Burla ',
      year:'2017 - 2021',
      specs:'Graduated in Mechanical Engineering'
    },
    {
      id:2,
      type:'Higher Secondary School',
      school:'DAV Public School',
      year:'2015 - 2017',
      specs:'Completed High school with PCMC as major'
    },
    {
      id:3,
      type:'Senior Secondary School',
      school:'DAV Public School ',
      year:'2013 - 2015',
      specs:''
    }
  ]
    return (
        <div className='absolute justify-center bg-customColor backdrop-filter rounded-lg backdrop-blur-sm opacity-120 text-white w-[80%] p-10 ml-[10%] mr-[5%] m-[20%] backdrop-filter    sm:object md:mt-[275%] sm:mt-[340%] lg:mt-[110%] 
         ////hover:my-rotate-y-180'
        >
          <h1 className='font-bold pl-10 text-3xl opacity-100 text-left'>Education</h1>

          {/* <img src={photo} className='h-[10%] lg:w-[20%] rounded-lg sm:w-[50%] sm:grid sm:mx-auto'/> */}
          {/* <img src={photo}/> */}
          <div className = 'flex lg:gap-20 md:gap-10 sm:gap-10'>
            {educationList.map((i)=>{
              return(
              <div className='pb-10 pt-3'>
              <h3 className='font-bold text-md opacity-100 text-left'>{i.type}</h3>
              <p className=''>{i.school}</p>
              <p className=''>{i.year}</p>
              <p className=''>{i.specs}</p>
              </div>)
            })}
            
            </div> 
    
            
          
          </div>
          )
}

export default Education