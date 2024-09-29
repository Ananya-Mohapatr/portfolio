import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ReactJsImg from '../assets/reactJsImg.png'
import NodeJSImg from '../assets/nodeJsImg.png'
import AngularImg from '../assets/angularImg.png'
import HtmlImg from '../assets/htmlImg.png'
import CSSImg from '../assets/cssImg.png'
import JavascriptImg from '../assets/javascriptimg.png'
import tailwindImg from '../assets/tailwindImg.png'
import typescriptImg from '../assets/typescriptImg.png'
const Skills = () => {
  const skillList = [
    {
      id: 1,
      skill: 'React JS',
      icon: ReactJsImg
    },
    {
      id: 2,
      skill: 'Node JS',
      icon: NodeJSImg
    },
    {
      id: 3,
      skill: 'Angular TS',
      icon: AngularImg
    },
    {
      id: 4,
      skill: 'Javascript',
      icon: JavascriptImg
    },
    {
      id: 5,
      skill: 'Typescript',
      icon: typescriptImg
    },
    {
      id: 6,
      skill: 'Tailwind CSS',
      icon: tailwindImg
    },
    {
      id: 7,
      skill: 'HTML',
      icon: HtmlImg
    },
    {
      id: 8,
      skill: 'CSS',
      icon: CSSImg
    },

  ]
  return (
    <div className='absolute justify-center bg-customColor  rounded-lg backdrop-blur-sm opacity-120 text-white w-[80%] p-10 ml-[10%] mr-[5%] m-[20%] backdrop-filter    sm:object md:mt-[320%] sm:mt-[340%] lg:mt-[130%] 
         ////hover:my-rotate-y-180'
    >
      <h1 className='font-bold pl-10 text-3xl opacity-100 text-left'>SKILLS</h1>

      {/* <img src={photo} className='h-[10%] lg:w-[20%] rounded-lg sm:w-[50%] sm:grid sm:mx-auto'/> */}
      {/* <img src={photo}/> */}
      < div className='grid grid-cols-4'>
        {skillList.map((i) => {
          return (
            <div className='mix-blend-color-burn mt-10 flex'>
              <img src={i.icon} className='size-20' />
              <h3 className={i.skill == 'HTML' || i.skill == 'CSS'?'font-bold text-md opacity-100 pt-5  pl-5' : 'font-bold text-md opacity-100 pt-5 text-4' }>{i.skill}</h3>
            </div>)
        })}

      </div>

    </div>
  )
}

export default Skills