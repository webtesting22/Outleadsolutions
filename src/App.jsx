import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import OutleadHome from './Components/OutleadHome/OutleadHome'
import OutleadHeroSection from './Components/OutleadHerosection/OutleadHeroSection'
function App() {

  return (
    <>
      <BrowserRouter>
        {/* <OutleadHome /> */}
        <Routes>

          <Route path='/' element={<OutleadHome />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
