import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: block;
  border-radius: 4px;
  overflow: hidden;
`
export const Img = styled.img`
  ${fadeIn()}
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
`

export const ContainerOptions = styled.div`
  display: flex;
  justify-content: left;
  margin-top: -10px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 6px;
  margin-left: 8px;
  color: #ff9300;
  border-radius: 10px;
  background: white;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.1);
  & svg {
    margin-right: 4px;
  }
`
