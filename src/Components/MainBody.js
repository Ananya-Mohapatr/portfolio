import React from 'react'
import img from '../assets/2c90a3402573bea4f3ba5b85c1008cc5.jpg'
import Header from './Header'
import About from './About'
import Introduction from './Introduction'
import WorkExperience from './WorkExperience'
import Skills from './Skills'

const MainBody = () => {
  return (
    < div >
    <img className='fixed w-screen h-screen ' src={img} alt='image'></img>
    <Header/>
    <About/>
    <br></br>
    <Introduction/>
    <WorkExperience/>
    <Skills/>
    <br/>
    
    </div>
  )
}

export default MainBody