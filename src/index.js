import React from 'react'
import ReactDom from 'react-dom'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import Context from './Context'

import { App } from './app'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-felixcastro.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token
        ? `Bearer ${token}`
        : ''
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((err, index) => {
      console.log(`[GraphQL error] ${index}:`, err)
      switch (err.extensions.code) {
        case 'INTERNAL_SERVER_ERROR':
          if (window.sessionStorage.getItem('token')) {
            window.sessionStorage.removeItem('token')
            window.location.href = '/favs'
          }
          break
      }
    })
  }
  if (networkError) console.log('[Network Error]', networkError)
})

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache()
})

ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
