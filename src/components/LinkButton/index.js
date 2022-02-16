import React from 'react'
import { Button } from './styles'

export const LinkButton = ({ onClick, title }) => (
  <Button onClick={onClick}>{title}</Button>
)
