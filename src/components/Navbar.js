import React from 'react';
import '../App.css';
import logo from '../images/logo192.png'

export default function Navbar(props) {
  return (
    <nav className={props.darkMode && "dark"}>
      <img src={logo} alt="" className='nav-logo'/>
      <h2>ReactFacts</h2>
      <div className="toggler">
        <p className='toggler-light'>Light</p>
        <div className="toggler-slider" onClick={props.toggleDarkMode}>
          <div className="toggle-circle"></div>
        </div>
        <p className='toggler-dark'>Dark</p>
      </div>
    </nav>
  )
}
