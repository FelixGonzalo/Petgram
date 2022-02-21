import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

export const DetailPet = () => {
  const { id } = useParams()

  return (
    <Layout title={`Fotografía ${id}`}>
      <PhotoCardWithQuery id={id || ''} />
    </Layout>
  )
}
