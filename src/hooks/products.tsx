import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

import { IProduct } from '../interfaces/index'

interface IProductsData {
  products: IProduct[]
}

export const ProductContext = createContext<IProductsData>({} as IProductsData)

// export const useAdd = () => {
//   const [orderProductsPreview, setOrderProductsPreview] = useState<IProduct[]>(
//     []
//   )

//   return [
//     orderProductsPreview,
//     event => {
//       setOrderProductsPreview({
//         ...orderProductsPreview,
//         [event.target.product]: event.target.product
//       })
//     }
//   ]
// }

const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([])

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

  // adicionar produto em um array (cujo tamanho é determinado pelo max/min dentro do card)
  // adicionar array de produtos vindos do orderPreview para o localstorage
  // remover item selecionado do local storege baseado no botão "remover" do footer tela inicial
  // enviar produtos do local storage para msg do whatsApp
  // limpar lista de items do local storage após a msg ser enviada

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
