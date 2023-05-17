import Image from 'next/image'
import React from 'react'
import programming from "../assets/programming.jpg";

const About = () => {
  return (
    <div>
      <div>
        <Image className='rounded-3xl' src={programming} alt='programming' width={'500'}/>
      </div>

      <div>
        
      </div>

    </div>
  )
}

export default About