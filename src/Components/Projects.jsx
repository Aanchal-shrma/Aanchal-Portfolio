import React from 'react'
import projects from './Data/Projects.json'

function Project() {

  return (
    <>
      <div className="project w-96 md:w-full flex md:justify-center md:items-center mt-20">
      {projects.map((data) =>{
        return(
          <>
          <div key={data.id} className='items pl-10 pr-10'
              data-aos="zoom-in"
    data-aos-duration= "1000"
          >
            <div className='projectleft'>
               <img src={`/assets/${data.image}`} alt=""  className='Projectimg hidden md:flex'/>
            </div>
            <div className="Projects-right">
              <h2 className="head text-xl font-bold">{data.name}</h2>
              <h4 className='mb-5'>technology: {data.Skills}</h4>
              <a href='https://github.com/Aanchal-shrma' target='_blank'
                           className="border pt-1 pb-1 pl-5 pr-5 rounded-md font-bold text-black bg-yellow-300">{data.data}</a>
            </div>
           
          </div>
          
          </>
        )
      })
      }
       
      </div>
    </>
  )
}

export default Project

