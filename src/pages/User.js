import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Helmet } from 'react-helmet'

export default () => {
  const { removeAuth } = useContext(Context)

  return (
    <>
      <Helmet>
        <title>Petgram - Perfil</title>
        <meta
          name='description'
          content='Con tu perfil puedes darle like a las fotos de mascotas que más te gusten'
        />
      </Helmet>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
