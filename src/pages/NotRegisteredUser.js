import React from 'react'
import Context from '../Context'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar Sersión</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)
