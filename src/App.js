import React, { useContext, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Context } from './Context'

const Home = React.lazy(() => import('./pages/Home'))
const DetailPet = React.lazy(() => import('./pages/DetailPet'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
