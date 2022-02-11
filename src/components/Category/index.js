import React from 'react'
import { Anchor, Image, Span } from './styles'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    <Span>{emoji}</Span>
  </Anchor>
)
