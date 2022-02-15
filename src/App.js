import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { DetailPet } from './pages/DetailPet'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

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
        <UserLogged>
          {
            ({ isAuth }) =>
              isAuth
                ? <Routes>
                  <Route path='/favs' element={<Favs />} />
                  <Route path='/user' element={<User />} />
                  </Routes>
                : <Routes>
                  <Route path='/favs' element={<NotRegisteredUser />} />
                  <Route path='/user' element={<NotRegisteredUser />} />
                  </Routes>
          }
        </UserLogged>
        <Navbar />
      </BrowserRouter>
    </>
  )
}
