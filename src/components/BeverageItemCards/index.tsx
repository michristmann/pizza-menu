import React, { useState, useContext, useEffect } from 'react'

import { ProductContext } from '../../hooks/products'
import { IProduct } from '../../interfaces'
import { displayFormatter, priceFormatter } from '../../utils/formatter'

import {
  Container,
  Item,
  Info,
  Header,
  Description,
  ButtonWrapper,
  Button
} from './styles'

interface IOrderItemProps {
  collection: string
  category: string
  setActiveProductId: (uuid: string) => void
  activeProductId: string
}

const OrderItemCards: React.FC<IOrderItemProps> = ({
  collection,
  category,
  setActiveProductId,
  activeProductId
}) => {
  const {
    products,
    addProductPreview,
    removeProductPreview,
    orderProductsPreview
  } = useContext(ProductContext)

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        product =>
          product.category === category && product.collection === collection
      )
    )
  }, [products, collection, category])

  // const uuidVerifier = orderProductsPreview.map(product => product.uuid)

  // avaliar como fazer para comparar item no array com uuid do produto

  return (
    <Container>
      <h1>{category}</h1>
      {filteredProducts.map((product, index) => {
        return (
          <Item
            onClick={() => {
              setActiveProductId(product.uuid)
            }}
            isActive={activeProductId === product.uuid}
          >
            <Info>
              <Header>
                <strong> {displayFormatter(index + 1)} </strong>
                <h2>
                  {product.name} - {product.variant}
                </h2>
              </Header>
              <Description>
                <strong>{priceFormatter(product.price || 0)}</strong>
              </Description>
            </Info>
            <ButtonWrapper isActive={activeProductId === product.uuid}>
              <Button
                id="remove"
                isDisabled={orderProductsPreview.length === 0}
                onClick={() => {
                  removeProductPreview(product)
                }}
              >
                <div>-</div>
              </Button>
              <Button
                id="add"
                isDisabled={false}
                onClick={() => {
                  addProductPreview(product)
                }}
              >
                <div>+</div>
              </Button>
            </ButtonWrapper>
          </Item>
        )
      })}
    </Container>
  )
}

export default OrderItemCards
