import React from 'react'
import Pages from './components/pages/Pages'
import './style/main.scss'
import { Provider } from "react-redux"

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  )
}

export default App
