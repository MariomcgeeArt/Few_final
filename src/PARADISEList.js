

import React from 'react';
import PARADISESpace from './PARADISESpace.js';
import './PARADISEList.css';
import data from './paradise-data.json'

function PARADISEList() {

  const spaces = data.map(( { title, location, images, ave_temp } ) => {
    return (
      <PARADISESpace
        key={title}
        name={title}
        location={location}
        image={images[0]}
        ave_temp={ave_temp}
      />
    )
  })

  return (
    <div className="PARADISEList">
      { spaces }
    </div>
  )
}
export default PARADISEList