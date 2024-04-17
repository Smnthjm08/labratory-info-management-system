import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home/>} />
            {/* <Route path='/about' element= {<About/>} /> */}
            <Route path='/login' element= {<Login />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App