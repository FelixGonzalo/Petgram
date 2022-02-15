import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { DetailPet } from './pages/DetailPet'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      </BrowserRouter>
    </>
  )
}
