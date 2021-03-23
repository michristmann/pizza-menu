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

  const totalPizzaPrice = pizzaPrice.reduce(
    (accumulate, current) => accumulate + current,
    0
  )

  const displayTotalPizzaPrice =
    totalPizzaPrice / orderProductsPreview.length || 0

  return (
    <Footer>
      {orderProductsPreview.map((product, index) => {
        return <li>{product.name}</li>
      })}
      <strong> Total: {priceFormatter(displayTotalPizzaPrice)}</strong>
      <Button onClick={() => {}}>
        <h2>ADICIONAR AO CARRINHO</h2>
      </Button>
    </Footer>
  )
}

export default OrderPageFooter
