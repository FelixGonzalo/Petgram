import React from 'react'
import ReactDom from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Context from './Context'

import { App } from './app'

const client = new ApolloClient({
  uri: 'https://petgram-server-felixcastro.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDom.render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
