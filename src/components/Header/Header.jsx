import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
function Header() {
  return (
    <header className='header'>
        <img alt="logo-hogwarts" className='header--logo' src='https://i.postimg.cc/6Q7qTq8G/if-14-harry-potter-colour-hogwarts-shield-2730327-88145.png'/>
         <h1 className='header--title'>HOGWARTS</h1>
        <Navbar/>
    </header>
  )
}

export default Header