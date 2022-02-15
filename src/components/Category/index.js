import React from 'react'
import { Link, Image, Span } from './styles'
import { Loader } from '../Loader'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '', loading }) => (
  <Link to={path}>
    {loading ? <Loader /> : <Image src={cover} />}
    <Span>{emoji}</Span>
  </Link>
)
