import React from 'react'
import resume from '../resume/Anchal.resume.pdf'
import image from './Data/hero.json'

function Home() {
  return (
    <>
    <div className="home mt-10 flex justify-between items-center md:mt-32 md:mb-42 p-10"
      data-aos="zoom-in"
    data-aos-duration= "1000"
    >
    <div className="left w-4/5 p-10 rounded-md md:w-2/5"
   
    >
    <h1 className='text-3xl font-bold mb-8'>Frontend developer</h1>
    <a href={resume} download="resume.pdf" className='text-yellow-300 border pt-2 pb-2 pl-3 pr-3 hover:text-xl rounded-md'>Download resume</a>  
    </div>  
    <div className="right hidden md:flex"
     
    >
     
     <img src={`/assets/${image.imgSrc}`} alt="hero" />
      </div>
    </div>
   </>
  )
}

export default Home
