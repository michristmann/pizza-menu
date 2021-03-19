import React from 'react'
import GlobalStyles from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import ProductProvider from './hooks/products'
import MenuItemProvider from './hooks/menuItem'

const App: React.FC = () => {
  return (
    <ProductProvider>
      <MenuItemProvider>
        <Router>
          <Routes />

          <GlobalStyles />
        </Router>
      </MenuItemProvider>
    </ProductProvider>
  )
}

export default App
