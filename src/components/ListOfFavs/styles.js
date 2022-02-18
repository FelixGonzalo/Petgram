import styled from 'styled-components'

export const Grid = styled.div`
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, 100px);
  gap: 8px;
  padding: 16px;
`
export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`
