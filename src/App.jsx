import React from 'react'
import padData from './pad.js'
import Pad from './Pad.jsx'

import './App.css'

function App() {
  const [pads, setPads] = React.useState(padData)

  const buttonElements = pads.map(pad =>(
    <Pad key={pad.id} color = {pad.color} on={pad.on}/>
  ))

  return (
    <>
      <main>
        <div className="pad-container">
          {buttonElements}
        </div>
      </main>
    </>
  )
}

export default App
