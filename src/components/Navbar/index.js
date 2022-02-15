import React from 'react'
import { Nav, NavLink } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '30px'
export const Navbar = () => {
  return (
    <Nav>
      <NavLink to='/'>
        <MdHome size={SIZE} />
      </NavLink>
      <NavLink to='/favs'>
        <MdFavoriteBorder size={SIZE} />
      </NavLink>
      <NavLink to='/user'>
        <MdPersonOutline size={SIZE} />
      </NavLink>
    </Nav>
  )
}
