import React, { useCallback, useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../Button'
import { ProductContext } from '../../hooks/products'
import { priceFormatter } from '../../utils/formatter'

import { Footer, FooterWrapper } from './styles'

interface IRouteProps {
  type: string
  prop: string
}

const OrderPageFooter: React.FC = () => {
  const {
    addPreviewToLocalStorage,
    orderProductsPreview,
    products
  } = useContext(ProductContext)

  const { type, prop } = useParams<IRouteProps>()

  ///////// ---------- Provisório ----------------///////

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

  const notPizzaPrice = orderProductsPreview.map(product => product.price || 0)

  const totalNotPizzaPrice = notPizzaPrice.reduce(
    (accumulate, current) => accumulate + current,
    0
  )

  const displayTotalNotPizzaPrice = totalNotPizzaPrice

  ///////////// ---------------------------------- //////////

  const productsCount = useMemo(() => {
    const map = {}
    orderProductsPreview.forEach(product => {
      //@ts-ignore
      if (map[product.uuid]) {
        //@ts-ignore
        map[product.uuid]++
      } else {
        //@ts-ignore
        map[product.uuid] = 1
      }
    })
    return map
  }, [orderProductsPreview])

  const addToCart = useCallback(() => {
    Object.keys(productsCount).forEach(key => {
      const p = products.find(product => {
        return key === product.uuid
      })
      if (p) {
        addPreviewToLocalStorage({
          id: new Date().toDateString(),
          //@ts-ignore
          price: displayTotalNotPizzaPrice,
          orderDetail: [
            {
              product: [p],
              //@ts-ignore
              quantity: productsCount[p.uuid]
            }
          ]
        })
      }
    })
  }, [
    addPreviewToLocalStorage,
    displayTotalNotPizzaPrice,
    productsCount,
    products
  ])

  return (
    <Footer>
      <FooterWrapper>
        {type === 'pizzas' ? <h1>Sabor</h1> : <h1>Selecionado</h1>}

        {Object.keys(productsCount).map(key => {
          const selectedProduct = products.find(product => key === product.uuid)
          //@ts-ignore
          if (selectedProduct) {
            return (
              <>
                <li>
                  {/* @ts-ignore */}
                  <span>{productsCount[key]}</span> - {selectedProduct.uuid}
                </li>
              </>
            )
          } else {
            return ''
          }
        })}
        {type === 'pizzas' ? (
          <strong> Total: {priceFormatter(displayTotalPizzaPrice)}</strong>
        ) : (
          <strong> Total: {priceFormatter(displayTotalNotPizzaPrice)}</strong>
        )}
        <Button
          onClick={() => {
            addToCart()
          }}
        >
          <h2>ADICIONAR AO CARRINHO</h2>
        </Button>
      </FooterWrapper>
    </Footer>
  )
}

export default OrderPageFooter
