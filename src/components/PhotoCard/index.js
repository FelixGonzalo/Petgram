import React from 'react'
import { ImgWrapper, Img, Button, ContainerOptions } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='' />
        </ImgWrapper>
      </a>
      <ContainerOptions>
        <Button>
          <MdFavoriteBorder size='25px' />
          {likes} likes
        </Button>
      </ContainerOptions>
    </article>
  )
}
