
import { useEffect, useState } from 'react'
import Dashborad from './Dashborad'
import { Route, Routes } from 'react-router'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'

function App() {
  const [Token, setToken] = useState(false)
  function GetToken() {
    const Token = localStorage.getItem("Token")
    console.log(Token, 'nhi hy')
  }
  useEffect(() => {
    GetToken()
  }, [])
  return (
    <>
      <Routes>
        {
          Token ?
            <Route path='/login' element={<Login />} />
            :
            <Route path='/' element={<Dashborad />} />
        }
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
