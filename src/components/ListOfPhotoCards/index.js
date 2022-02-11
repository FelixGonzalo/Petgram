import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Item } from './styles'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4].map(id => (
          <Item key={id}><PhotoCard /></Item>
        ))
      }
    </ul>
  )
}
