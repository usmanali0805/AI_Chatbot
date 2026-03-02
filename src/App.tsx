
import React from 'react'
import Dashborad from './Dashborad'
import { Route, Routes } from 'react-router'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashborad/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    {/* <Dashborad/> */}
    </>
  )
}

export default App
