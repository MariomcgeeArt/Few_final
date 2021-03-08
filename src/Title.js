// src/Title.js

import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <header>

      <h1>Paradise</h1>
            <div className="Title-Subtitle">Awaits!</div>


            <div>

            <NavLink
  className="nav-link"
  activeClassName="nav-link-active"
  exact
  to="/">List</NavLink>

<NavLink
  className="nav-link"
  activeClassName="nav-link-active"
  to="/about">About</NavLink>



       
        </div>


    </header>




    </div>


  )
}

export default Title