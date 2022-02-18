import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ loading, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit} disabled={loading}>
        <Input placeholder='Email' {...email} disabled={loading} />
        <Input
          type='password'
          placeholder='password'
          {...password}
          disabled={loading}
        />
        <SubmitButton disabled={loading}>{title}</SubmitButton>
      </Form>
      {error && <Error> {error} </Error>}
    </>
  )
}
