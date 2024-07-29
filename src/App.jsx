import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import OutleadHome from './Components/OutleadHome/OutleadHome'
import OutleadHeroSection from './Components/OutleadHerosection/OutleadHeroSection'
import OutleadAbout from './Components/OutleadAbout/OutleadAbout'
import OutleadServices from './Components/OutleadServices/OutleadServices'
import OutleadContact from "./Components/OutleadContact/OutleadContact"
import OutleadClients from './Components/OutleadClients/OutleadClients'
import { ThemeProvider } from '../ThemeContext'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          {/* <OutleadHome /> */}
          <NavigationBar />
          <Routes>

            <Route path='/' element={<OutleadHome />} />
            <Route exact path="/OutleadAbout" element={<OutleadAbout />} />
            <Route exact path="/OutleadServices" element={<OutleadServices />} />
            <Route exact path="/OutleadClients" element={<OutleadClients />} />
            <Route exact path="/OutleadContact" element={<OutleadContact />} />
          </Routes>
        <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
