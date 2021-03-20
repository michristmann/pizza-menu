import React, { useContext, useEffect, useState } from 'react'

import { ProductContext } from '../../hooks/products'
import { IProduct } from '../../interfaces'

interface IDynamicPriceProps {
  collection: string
  prop: string
}

const MainMenuDynamicPrice: React.FC<IDynamicPriceProps> = ({
  collection,
  prop
}) => {
  // const productContext = useContext(ProductContext)

  // const [productLowestPrice, setProductLowestPrice] = useState<IProduct[]>()

  // useEffect(() => {
  //   const filteredProducts = productContext.products.filter(
  //     product => product.collection === collection
  //   )

  //   if (prop) {
  //     const productsSizePrices = filteredProducts.find(values => values.prices)

  //     // setProductLowestPrice(Math.min(...productsSizePrices?.price || NaN)))
  //   }
  // }, [productContext.products, collection, prop])

  return <h2>soluçãoplz</h2>
}

export default MainMenuDynamicPrice
