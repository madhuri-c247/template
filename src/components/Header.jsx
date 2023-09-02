import React from 'react'
import Nav from './Nav'
import logo from '../assests/logo big.png'
import '../styles/header.css'

function Header() {
  return (
    
    <div className='header-main'>
      <img src={logo} alt="logo" />
    <Nav className='nav'/>
    </div>
    
  )
}

export default Header