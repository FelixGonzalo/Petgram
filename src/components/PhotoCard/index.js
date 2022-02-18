import React from 'react'
import { Link } from 'react-router-dom'
import { Article, ImgWrapper, Img, ContainerOptions } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLikePhoto } from '../../hooks/useLikePhoto'
import { FavButton } from '../FavButton'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  const likePhoto = useLikePhoto({ id })

  const handleFavClick = () => {
    likePhoto()
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='' />
            </ImgWrapper>
          </Link>
          <ContainerOptions>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </ContainerOptions>
        </>
      )}
    </Article>
  )
}
