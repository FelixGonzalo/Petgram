import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 150px;
`

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
  transform: translateY(-10px)
`
