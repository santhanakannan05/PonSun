import React from 'react'
import image from '../assets/architecture-1868667_640.jpg'

function Header() {
  return (
    <header>
        <img src={image} alt="image" className='img1' />
        <h1>For Registration</h1>
        <div className="row">
            <button className='btn' style={{cursor:"pointer"}}>
                Sign Up
            </button>
            <button className='btn' style={{cursor:"pointer"}}>
                Login
            </button>
            
        </div>
        <div className="headerbg"></div>
    </header>
  )
}

export default Header