import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='Favoritos' subtitle='Las fotos de Petgram que te encantan'>
      <ListOfFavs />
    </Layout>
  )
}
