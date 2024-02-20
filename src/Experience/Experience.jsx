import React from 'react'
import html from "../../public/html.png"
import css from "../../public/raw_css.png"
import javascript from "../../public/javascript.png"
import react from "../../public/react.png"
import tailwind from "../../public/tailwind.png"
import node from "../../public/node_js2.png"
import github from "../../public/github.png"

const Experience = () => {
const teck = [
  {
    id: 1, 
    src: html,
    title: "HTMl",
    style : "shadow-orange-500"
  },
  {
    id: 2, 
    src: css,
    title: "CSS",
    style : "shadow-blue-500"
  },
  {
    id: 3, 
    src: javascript,
    title: "JavaScript",
    style : "shadow-yellow-500"
  },
  {
    id: 4, 
    src: react,
    title: "React Js",
    style : "shadow-blue-600"
  },
  {
    id: 5, 
    src: tailwind,
    title: "Tawlwind",
    style : "shadow-sky-500"
  },
  {
    id: 5, 
    src: github,
    title: "Github",
    style : "shadow-gray-400"
  },
  {
    id: 6, 
    src: node,
    title: "Node Js",
    style : "shadow-green-400"
  },

]

  return (
    <div id='experience' className="bg-white w-full h-full mt-24">
<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div>
  <p className='text-4xl font-bold border-b-4 p-2 inline '>
    Experience
  </p>
  <p className='py-6'> There are some technologies I've worked with</p>
</div>
<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
  {
    teck.map(({id, src, title, style}) => {
      return (
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

        <img className='w-20 mx-auto' src={src} alt="" />
    <p className='mt-4'> {title}</p>
      </div>
      )
    })
  }


</div>
</div>
    </div>
  )
}

export default Experience