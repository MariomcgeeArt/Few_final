import React from 'react'
import './PARADISESpace.css';





  function PARADISESpace(props) {
    const { name, image, location, ave_temp } = props
    return (
      <div>
        <img 
          src={`${process.env.PUBLIC_URL}images/${image}`} 
          width="300" 
          height="300" 
          alt="Hello" 
        />
        <h1>{name}</h1>
        <div>{location}</div>
        <div>{ave_temp}</div>
      </div>
    )
  }

export default PARADISESpace