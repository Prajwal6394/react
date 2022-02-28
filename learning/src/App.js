
import React from 'react'
import { useState } from 'react'
import Hello from './components/Hello';

const App = () => {
  const [set, setcount] = useState(0);
  return (
    <div>
      <h1>Hello Rect
      </h1>
      <p>Click Value has been change {set} times</p>
      <button onClick={() => setcount(set+1)}>Click</button>
      <Hello name = "Prajwal"power = "Developer" />
      <Hello name = "Rishab" power = "Player"/>
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  )
}

export default App