import React from 'react'
import padData from './pad.js'
import Pad from './Pad.jsx'

import './App.css'

function App() {
  const [pads, setPads] = React.useState(padData)

  function toggle(id){
    console.log(id);
    setPads(prevState => prevState.map(item =>
      item.id === id ? {...item, on: !item.on} : item
    ))
    
  }

  const buttonElements = pads.map(pad =>(
    <Pad 
    id = {pad.id}
    key={pad.id} 
    color = {pad.color} 
    on={pad.on}
    toggle={toggle} 
      />
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
