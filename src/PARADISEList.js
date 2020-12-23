

import React from 'react';
import PARADISESpace from './PARADISESpace.js';

function PARADISEList() {
  return (
    <div className="PARADISEList">
      <PARADISESpace
        name="PARIS"
        location="FRANCE"
        image="paris.jpg"
      />
      <PARADISESpace
        name="Bora Bora"
        location="French Polynesia"
        image="borabora.jpg"
      />
      <PARADISESpace
        name="Milan"
        location="Italy"
        image="milan.jpg"
      />
      <PARADISESpace
        name="New York"
        location="USA"
        image="newyork.jpg"
      />
      <PARADISESpace
        name="tokyo"
        address="Japan"
        image="tokyo.jpg"
      />
     
    </div>
  )
}

export default PARADISEList