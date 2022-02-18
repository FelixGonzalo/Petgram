import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { DetailPet } from './pages/DetailPet'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:id' element={<DetailPet />} />
          <Route path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
          <Route path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
          <Route path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  )
}
