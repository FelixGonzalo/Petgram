import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, disabled, onClick }) => (
  <Button disabled={disabled} onClick={onClick}>
    {children}
  </Button>
)
