import './HeroAll.css'
import React from 'react'

function HeroAll(props) {
  return (
    <div className="imghead h-[450]  flex justify-center items-center">
      <div className="container m-auto">
        <div className="text-center" >
              <p className='text-[65px] font-[500] text-[#d07635] mb-3'>{props.name}</p>
              <p className='text-[20px] font-bold text-[#d07635]'>Enjoy homemade and rustic food in a Ramadan atmosphere</p>
      </div>
      </div>  
    </div>
  )
}

export default HeroAll