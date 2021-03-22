import React from 'react'
import GlobalStyles from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import DataProvider from './hooks/index'

const App: React.FC = () => {
  return (
    <Router>
      <DataProvider>
        <Routes />
      </DataProvider>

      <GlobalStyles />
    </Router>
  )
}

export default App
