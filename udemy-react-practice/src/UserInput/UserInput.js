import React from 'react';

const userInput = (props) => {
  const style = {
    border: '4px solid #e2e',
    marginTop: '30px'
  }

 return <input type="text"
                onChange={props.changed}
                value={props.currentName}
                style={style}/>
}

export default userInput
