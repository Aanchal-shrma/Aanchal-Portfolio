import React from 'react'
import AanchalSkills from './Data/Skills.json'

function Skills() {
  return (
    <>
      <div className="skills flex justify-center items-center mt-20">
        <div className="row ">
            {AanchalSkills.map((data) => {
              return(
              <>
              <div key={data.id} className=' px-10 mt-10'
              data-aos= "flip-right"
              data-aos-duration="1000"
              >
                 <div className="box w-80  h-40 bg-black flex items-center flex-col">
                  <div className="img ">
                  <img src={`/assets/${data.imageSrc}`} alt="" className='h-20 w-20 rounded-full mt-2'/>
                </div>
                <h3 className='mt-5 text-xl font-bold text-yellow-300'>{data.title}</h3>
                  </div>
                 
                </div>

              {/* </div> */}
              </>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Skills
