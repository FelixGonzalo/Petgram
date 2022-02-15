import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { useParams } from 'react-router-dom'

export const Home = () => {
  const { id } = useParams()

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id || ''} />
    </>
  )
}
