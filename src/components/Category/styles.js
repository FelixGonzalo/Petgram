import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  width: 75px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  text-decoration: none;
`

export const Image = styled.img`
  height: auto;
  height: 75px;
  width: 75px;
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  object-fit:cover;
`

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
`
