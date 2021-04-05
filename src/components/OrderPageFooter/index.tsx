import React, { useCallback, useContext, useMemo } from 'react'
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid'
=======
>>>>>>> 5feb7a38aa9d4cfa6c37b7dd3b5070e4b717cb2e
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

<<<<<<< HEAD
  const pizzaPrice = useMemo(() => {
    const price = orderProductsPreview.map(product => {
      const priceBySize = product.prices?.find(price => price.variant === prop)
      return priceBySize?.discount
        ? priceBySize.price - priceBySize.discount
        : priceBySize?.price || 0
    })

    const totalPizzaPrice = price.reduce(
      (accumulate, current) => accumulate + current,
      0
    )

    const displayTotalPizzaPrice =
      totalPizzaPrice / orderProductsPreview.length || 0

    return displayTotalPizzaPrice
  }, [prop, orderProductsPreview])

  const otherThanPizzaPrice = useMemo(() => {
    const price = orderProductsPreview.map(product => product.price || 0)

    const totalNotPizzaPrice = price.reduce(
      (accumulate, current) => accumulate + current,
      0
    )
    const displayTotalNotPizzaPrice = totalNotPizzaPrice

    return displayTotalNotPizzaPrice
  }, [orderProductsPreview])
=======
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
>>>>>>> 5feb7a38aa9d4cfa6c37b7dd3b5070e4b717cb2e

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

<<<<<<< HEAD
  const addPizzaToCart = useCallback(() => {
    addPreviewToLocalStorage({
      id: uuidv4(),
      price: pizzaPrice,
      orderDetail: [
        {
          product: orderProductsPreview,
          quantity: 1
        }
      ]
    })
  }, [addPreviewToLocalStorage, orderProductsPreview, pizzaPrice])

  const addOtherThanToCart = useCallback(() => {
=======
  const addToCart = useCallback(() => {
>>>>>>> 5feb7a38aa9d4cfa6c37b7dd3b5070e4b717cb2e
    Object.keys(productsCount).forEach(key => {
      const p = products.find(product => {
        return key === product.uuid
      })
      if (p) {
        addPreviewToLocalStorage({
<<<<<<< HEAD
          id: uuidv4(),
          //@ts-ignore
          price: [p.price] * productsCount[p.uuid],
=======
          id: new Date().toDateString(),
          //@ts-ignore
          price: displayTotalNotPizzaPrice,
>>>>>>> 5feb7a38aa9d4cfa6c37b7dd3b5070e4b717cb2e
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
<<<<<<< HEAD
  }, [addPreviewToLocalStorage, productsCount, products])
=======
  }, [
    addPreviewToLocalStorage,
    displayTotalNotPizzaPrice,
    productsCount,
    products
  ])
>>>>>>> 5feb7a38aa9d4cfa6c37b7dd3b5070e4b717cb2e

  return (
    <Footer>
      <FooterWrapper>
        {type === 'pizzas' ? <h1>Sabor</h1> : <h1>Selecionado</h1>}
<<<<<<< HEAD
=======

>>>>>>> 5feb7a38aa9d4cfa6c37b7dd3b5070e4b717cb2e
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
<<<<<<< HEAD
          <strong> Total: {priceFormatter(pizzaPrice)}</strong>
        ) : (
          <strong> Total: {priceFormatter(otherThanPizzaPrice)}</strong>
        )}
        <Button
          onClick={() => {
            type === 'pizzas' ? addPizzaToCart() : addOtherThanToCart()
=======
          <strong> Total: {priceFormatter(displayTotalPizzaPrice)}</strong>
        ) : (
          <strong> Total: {priceFormatter(displayTotalNotPizzaPrice)}</strong>
        )}
        <Button
          onClick={() => {
            addToCart()
>>>>>>> 5feb7a38aa9d4cfa6c37b7dd3b5070e4b717cb2e
          }}
        >
          <h2>ADICIONAR AO CARRINHO</h2>
        </Button>
      </FooterWrapper>
    </Footer>
  )
}

export default OrderPageFooter
