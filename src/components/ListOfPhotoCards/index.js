import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Item } from './styles'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map(id => (
          <Item key={id}><PhotoCard id={id} /></Item>
        ))
      }
    </ul>
  )
}
