import React from 'react'
import Aanchalabout from './Data/About.json'

function About() {
  return (
    <>
      <div className="about flex justify-center items-center mt-10">
        <div className="row ">
            {Aanchalabout.map((data) => {
              return(
              <>
              <div key={data.id} className='px-10'
              data-aos= "flip-right"
              data-aos-duration="1000"
              >
                <div className='card w-72 h-80 md:w-80 md:h-96 bg-black rounded-md mt-20'>
                  <div className="img w-78  h-40 ">
                  <img src={`/assets/${data.imgsrc}`} alt="" className='overflow-hidden h-40 w-80 rounded-md'/>
                  </div>
                  <div className='card-body h-48 mt-5'>
                    <h5 className='card-title text-xl font-bold text-yellow-300'>{data.heading}</h5>
                    <p className='card-text'>{data.des}</p>
                  </div>
                </div>

              </div>
              </>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default About
