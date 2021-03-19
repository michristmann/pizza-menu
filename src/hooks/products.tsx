import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

import { IProduct } from '../interfaces/index'

interface IProductsData {
  products: IProduct[]
}

export const ProductContext = createContext<IProductsData>({} as IProductsData)

const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get<IProduct[]>(
        'http://localhost:3000/products.json'
      )
      setProducts(response.data)
    }

    loadData()
  }, [])

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
