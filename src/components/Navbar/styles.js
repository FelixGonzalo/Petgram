import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  height: 50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
`
export const NavLink = styled(LinkRouter)`
  height: 100%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #888;
  &[aria-current] {
    color: red;
    &:after {
      ${fadeIn({ time: '0.4s' })};
      content: '•';
      position: absolute;
      bottom: 0;
      font-size: 18px;
      line-height: 20px;
    }
  }
`
