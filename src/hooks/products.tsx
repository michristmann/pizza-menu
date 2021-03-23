import React, { createContext, useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { IProduct } from '../interfaces/index'

interface IProductsData {
  products: IProduct[]
  orderProductsPreview: IProduct[]
  addProductPreview: (product: IProduct) => IProduct[]
  adddPreviewToLocalStorage: (newProduct: ILocalStorageItem) => void
}

interface ILocalStorageItem {
  id: string
  quantity: number
  price: number
  products: IProduct[]
}

// baseado no id faz filtro para remoção dos items

export const ProductContext = createContext<IProductsData>({} as IProductsData)

const localStorageKey = '@Pizza-menu: NewProductPreview'

const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [orderProductsPreview, setOrderProductsPreview] = useState<IProduct[]>(
    []
  )

  const addProductPreview = useCallback(
    (product: IProduct) => {
      const updatedProductsPreview = [...orderProductsPreview, product]

      setOrderProductsPreview(updatedProductsPreview)

      return updatedProductsPreview
    },
    [setOrderProductsPreview, orderProductsPreview]
  )

  const adddPreviewToLocalStorage = useCallback(
    (newProduct: ILocalStorageItem) => {
      const savedItems: ILocalStorageItem[] = JSON.parse(
        localStorage.getItem(localStorageKey) || '[]'
      )
      localStorage.setItem(
        localStorageKey,
        JSON.stringify([...savedItems, newProduct])
      )
    },
    []
  )

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get<IProduct[]>(
        'http://localhost:3000/products.json'
      )
      setProducts(response.data)
    }

    // filtrar opções
    // passar opções com o filtro

    loadData()
  }, [])

  // remover item selecionado do local storage baseado no botão "remover" do footer tela inicial
  // enviar produtos do local storage para msg do whatsApp
  // limpar lista de items do local storage após a msg ser enviada

  return (
    <ProductContext.Provider
      value={{
        products,
        orderProductsPreview,
        addProductPreview,
        adddPreviewToLocalStorage
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
