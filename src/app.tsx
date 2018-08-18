import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Container } from './container'

export const App: React.SFC<null> = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
