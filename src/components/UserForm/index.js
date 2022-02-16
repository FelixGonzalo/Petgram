import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

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
        <Button disabled={loading}>{title}</Button>
      </Form>
      {error && <Error> {error} </Error>}
    </>
  )
}
