import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useSignupUser } from '../hooks/useSignupUser'
import { useLoginUser } from '../hooks/useLoginUser'
import { LinkButton } from '../components/LinkButton'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  const { signupMutation, data: dataSignup, loading: loadingSignup, error: errorSignup } = useSignupUser()
  const { loginMutation, data: dataLogin, loading: loadingLogin, error: errorLogin } = useLoginUser()

  const [showSignup, setShowSignup] = useState(false)

  const handleOnSubmitSignup = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    signupMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const handleOnSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorMsgSignup =
    errorSignup && 'El  usuario ya existe o hay algún problema.'
  const errorMsgLogin =
    errorLogin && 'El  usuario no existe o hay algún problema.'

  if (showSignup) {
    return (
      <>
        <UserForm
          loading={loadingSignup}
          error={errorMsgSignup}
          onSubmit={handleOnSubmitSignup}
          title='Registrarse'
        />
        <LinkButton
          onClick={() => setShowSignup(false)}
          title='Iniciar sesión'
        />
      </>
    )
  }

  return (
    <>
      <UserForm
        loading={loadingLogin}
        error={errorMsgLogin}
        onSubmit={handleOnSubmitLogin}
        title='Iniciar sesión'
      />
      <LinkButton
        onClick={() => setShowSignup(true)}
        title='Registrarse'
      />
    </>
  )
}
