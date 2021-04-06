import React, { useCallback, useContext, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useParams, Link } from 'react-router-dom'

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
    resetProductPreview,
    getLocalStorageData,
    orderProductsPreview,
    products
  } = useContext(ProductContext)

  const { type, prop } = useParams<IRouteProps>()

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
    Object.keys(productsCount).forEach(key => {
      const p = products.find(product => {
        return key === product.uuid
      })
      if (p) {
        addPreviewToLocalStorage({
          id: uuidv4(),
          //@ts-ignore
          price: [p.price] * productsCount[p.uuid],
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
  }, [addPreviewToLocalStorage, productsCount, products])

  function addToCartTriggers() {
    if (orderProductsPreview.length > 0) {
      type === 'pizzas' ? addPizzaToCart() : addOtherThanToCart()
      resetProductPreview()
      getLocalStorageData()
    }
  }

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
          <strong> Total: {priceFormatter(pizzaPrice)}</strong>
        ) : (
          <strong> Total: {priceFormatter(otherThanPizzaPrice)}</strong>
        )}
        <Link to="/">
          <Button
            onClick={() => {
              addToCartTriggers()
            }}
          >
            <h2>ADICIONAR AO CARRINHO</h2>
          </Button>
        </Link>
      </FooterWrapper>
    </Footer>
  )
}

export default OrderPageFooter
