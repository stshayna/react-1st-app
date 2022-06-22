import React from 'react';
import '../App.css';
import logo from '../images/logo192.png'

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" className='nav-logo'/>
      <h2>ReactFacts</h2>
      <h4>My First React App</h4>
    </nav>
  )
}
