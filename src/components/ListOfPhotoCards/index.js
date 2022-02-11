import React from 'react'
import { useQuery } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'
import { Item } from './styles'
import { whitPhotos } from '../../hoc/withPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(whitPhotos, {
    variables: { categoryId }
  })

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      {
        data.photos.map(photo => (
          <Item key={photo.id}><PhotoCard {...photo} /></Item>
        ))
      }
    </ul>
  )
}
