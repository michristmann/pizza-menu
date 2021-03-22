import React from 'react'

import ProductProvider from './products'
import MenuItemProvider from './menuItem'

const DataProvider: React.FC = ({ children }) => (
  <MenuItemProvider>
    <ProductProvider>{children}</ProductProvider>
  </MenuItemProvider>
)

export default DataProvider
