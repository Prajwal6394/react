import React from 'react'

const Hello = (props) => {
  const style = {
    color: 'black',
    fontSize: 100,
    textAlign: 'center'
  };
  return (
    <div>
        <h1 style={style} >Hello {props.name} {props.Greet}</h1>
    </div>
  )
}

export default Hello