import { useState } from 'react'

import './App.css'
import CreacionReserva from './components/creacionReserva'
import LecturaReserva from './components/lecturaReserva'

function App() {
  

  return (
    <>
      <div>
        <h1>Reservas</h1>
        <h2>Crear Reservas</h2>
        <CreacionReserva/>
        <h2>Reservas existentes</h2>
        <LecturaReserva/>
      </div>
    </>
  )
}

export default App
