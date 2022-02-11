import React, { useEffect, useState, useRef } from 'react'
import { Article, ImgWrapper, Img, Button, ContainerOptions } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (error) {
      console.error(error)
    }
  })

  console.log(liked)
  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(isIntersecting)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='' />
            </ImgWrapper>
          </a>
          <ContainerOptions>
            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size='25px' />
              {likes} likes
            </Button>
          </ContainerOptions>
        </>
      )}
    </Article>
  )
}
