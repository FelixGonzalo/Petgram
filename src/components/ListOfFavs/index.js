import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Grid, Photo } from './styles'
import { Link } from 'react-router-dom'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const ListOfFavs = () => {
  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network'
  })

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <Grid>
      {data?.favs?.map((photo) => (
        <Link key={photo.id} to={`/detail/${photo.id}`}>
          <Photo src={photo.src} />
        </Link>
      ))}
    </Grid>
  )
}
