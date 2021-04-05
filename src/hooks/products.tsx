import React, { createContext, useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { IProduct } from '../interfaces/index'

interface IProductsData {
  products: IProduct[]
  orderProductsPreview: IProduct[]
  localStorageData: ILocalStorageItem[]
  addProductPreview: (product: IProduct) => IProduct[]
  removeProductPreview: (product: IProduct) => void
  resetProductPreview(): void
  addPreviewToLocalStorage: (newProduct: ILocalStorageItem) => void
  removeLocalStorageData(): void
}

interface ILocalStorageItem {
  id: string
  price: number
  orderDetail: Array<{ product: IProduct[]; quantity: number }>
}

export const ProductContext = createContext<IProductsData>({} as IProductsData)

const localStorageKey = '@Pizza-menu:NewProductPreview'

const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [orderProductsPreview, setOrderProductsPreview] = useState<IProduct[]>(
    []
  )
  const [localStorageData, setLocalStorageData] = useState<ILocalStorageItem[]>(
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

  const addProductPreview = useCallback(
    (product: IProduct) => {
      const updatedProductsPreview = [...orderProductsPreview, product]

      setOrderProductsPreview(updatedProductsPreview)

      return updatedProductsPreview
    },
    [setOrderProductsPreview, orderProductsPreview]
  )

  const removeProductPreview = useCallback(
    (product: IProduct) => {
      const productIndex = orderProductsPreview.indexOf(product)
      const clonedorderProductsPreview = [...orderProductsPreview]

      if (productIndex > -1) {
        clonedorderProductsPreview.splice(productIndex, 1)

        setOrderProductsPreview(clonedorderProductsPreview)

        return clonedorderProductsPreview
      }
    },
    [setOrderProductsPreview, orderProductsPreview]
  )

  const resetProductPreview = useCallback(() => {
    setOrderProductsPreview([])
  }, [setOrderProductsPreview])

  const addPreviewToLocalStorage = useCallback(
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
    const storagedItem: ILocalStorageItem[] = JSON.parse(
      localStorage.getItem(localStorageKey) || '[]'
    )

    setLocalStorageData(storagedItem)
  }, [])

  // remover item selecionado do local storage baseado no botão "remover" do footer tela inicial
  // enviar localStorageData para msg do whatsApp

  const removeLocalStorageData = useCallback(() => {
    localStorage.removeItem(localStorageKey)
  }, [])

  console.log(localStorageData, 'data')

  return (
    <ProductContext.Provider
      value={{
        products,
        orderProductsPreview,
        localStorageData,
        addProductPreview,
        removeProductPreview,
        resetProductPreview,
        addPreviewToLocalStorage,
        removeLocalStorageData
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
