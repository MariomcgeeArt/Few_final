// src/POPOSDetails.js

import React from 'react'

import data from './paradise-data.json'

function PARADISEDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc, ave_temp, features, geo } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ ave_temp }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
      </div>

    </div>
  )
}

export default PARADISEDetails