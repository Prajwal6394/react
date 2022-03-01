import React from 'react'

const EventHandler = () => {
    function clickHandler(){
        console.log("button has  been clicled");
    }
  return (
    <div>
        <button onClick = {clickHandler}>Click Here</button>
    </div>
  )
}

export default EventHandler