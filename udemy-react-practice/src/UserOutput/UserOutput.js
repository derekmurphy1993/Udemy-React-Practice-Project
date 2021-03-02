import React from 'react'

import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p> Just Transition strategies were first forged by {props.userName}.
      </p>
      <p> The environmental justice movement grew out of a response to the
      system of environmental racism. </p>
    </div>
  )
}

export default userOutput
