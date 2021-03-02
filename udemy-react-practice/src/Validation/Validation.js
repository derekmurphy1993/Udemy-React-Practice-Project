import React from 'react'

const validation = (props) => {

  // if text props.legnth < 5  text to short or > 20
let validMessage = "text long enough"

if (props.inputLength <= 5) {
  validMessage = 'text too short'
}

  return (
    <div>
      <p>{validMessage}</p>
    </div>
  )
}

export default validation
