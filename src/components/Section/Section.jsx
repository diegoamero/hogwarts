import React from 'react'
import './Section.css'
import {Link} from 'react-router-dom'

function Section({title, image}) {
  return (
      <Link to={`/${title}`} className='section'>
          <h3 className='section--title'>{title}</h3>
          <img src={image} className='section--logo' alt="Harry Potter Object"/>
      </Link>
    
  )
}

export default Section