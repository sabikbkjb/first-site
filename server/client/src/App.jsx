import { useState } from 'react'

import './App.css'
import Home from './Component/Home'
import { Route, Routes } from 'react-router-dom'
import Error from './Component/Templates/Error'
import Simple from './Component/Templates/Simple'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<Simple />} />
        <Route path='/error' element={<Error />} />
      </Routes>


    </>
  )
}

export default App
