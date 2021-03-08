import React from 'react'
import './PARADISESpace.css';
import { Link } from 'react-router-dom'





  function PARADISESpace(props) {
    const { name, image, location, ave_temp, id } = props
    return (
      <div className='PARADISESPACE'>
        <img 
          src={`${process.env.PUBLIC_URL}images/${image}`} 
          width="300" 
          height="300" 
          alt="Hello" 
        />
        <h1>
          <Link to={`/details/${id}`}>
            {name}
          </Link>
        </h1>
        <div>{location}</div>
        <div>{ave_temp}</div>

        <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
        </Link>
      </div>
    )
  }

export default PARADISESpace