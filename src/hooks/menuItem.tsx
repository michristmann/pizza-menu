import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

import { IMenuItem } from '../interfaces/index'

interface IMenuItemData {
  items: IMenuItem[]
}

export const MenuItemContext = createContext<IMenuItemData>({} as IMenuItemData)

const MenuItemProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IMenuItem[]>([])

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get<IMenuItem[]>(
        'http://localhost:3000/menuItems.json'
      )
      setItems(response.data)
    }

    loadData()
  }, [])

  return (
    <MenuItemContext.Provider value={{ items }}>
      {children}
    </MenuItemContext.Provider>
  )
}

export default MenuItemProvider
