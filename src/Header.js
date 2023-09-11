import React from 'react'
import './Header.css';
import logo from "./images/logo.png"

function Header() {
  return (
    <div className="Header">
        <img src={logo} alt="Logo"/>
    </div>
  )
}

export default Header