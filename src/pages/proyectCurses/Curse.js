import React from 'react'
import curses from '../../recursos/img/curses.JPG'

function Curse() {
  return (
    <div>
      <div>
        <img src={curses} alt="curses"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '10px'
        }}/>
      </div>
      <div>
      <h1>Clima</h1>
      <p>descripcion web clima</p>
      </div>
      <button>PROBAR</button>
    </div>
  )
}

export default Curse