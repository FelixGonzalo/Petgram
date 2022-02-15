import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { DetailPet } from './pages/DetailPet'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:id' element={<DetailPet />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  )
}
