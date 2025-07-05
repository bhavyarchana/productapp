import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import User from './components/User'
import Admin from './Admin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/add' element={<Add/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/user' element={<User/>}/> 
      <Route path='/admin' element={<Admin/>}/>
      
    </Routes>
    
  
    </>
  )
}

export default App
