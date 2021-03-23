import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../Button'
import { ProductContext } from '../../hooks/products'
import { priceFormatter } from '../../utils/formatter'

import { Footer } from './styles'

const OrderPageFooter: React.FC = () => {
  const { adddPreviewToLocalStorage, orderProductsPreview } = useContext(
    ProductContext
  )

  const { prop } = useParams<{ prop: string }>()

  const pizzaPrice = orderProductsPreview.map(product => {
    const priceBySize = product.prices?.find(price => price.variant === prop)
    return priceBySize?.discount
      ? priceBySize.price - priceBySize.discount
      : priceBySize?.price || 0
  })

  console.log(pizzaPrice)

  const totalPizzaPrice = pizzaPrice.reduce((accum, curr) => accum + curr)

  console.log(totalPizzaPrice / orderProductsPreview.length)

  return (
    <Footer>
      {orderProductsPreview.map((product, index) => {
        return (
          <>
            <li>{product.name}</li>
          </>
        )
      })}
      <strong> Total: {priceFormatter(50)}</strong>
      <Button onClick={() => {}}>
        <h2>ADICIONAR AO CARRINHO</h2>
      </Button>
    </Footer>
  )
}

export default OrderPageFooter
