import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  width: 100%;
  display: flex;
  overflow: scroll;
  margin-top: -10px;
  margin-bottom: 10px;
  ${(props) =>
    props.fixed &&
    css`
      ${fadeIn({ time: '0.5s' })};
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      left: 0;
      right: 0;
      top: -20px;
      transform: scale(0.5);
      z-index: 1;
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
