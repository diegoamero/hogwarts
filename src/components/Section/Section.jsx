import React from 'react'
import './Section.css'

function Section({title, image}) {
  return (
      <div className='section'>
          <h3 className='section--title'>{title}</h3>
          <img src={image} className='section--logo'/>
      </div>
    
  )
}

export default Section