import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper container x-padding">
        <div className="logo">
          <h1> <NavLink to=''> [U-Name]. </NavLink> </h1>
        </div>

        <div className="nav-links">
          <NavLink to='about'> About </NavLink>
          <NavLink to='projects'> Projects </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar