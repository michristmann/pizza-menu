import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ProductContext } from '../../hooks/products'
import { IProduct } from '../../interfaces'
import { displayFormatter, priceFormatter } from '../../utils/formatter'

import {
  Container,
  Item,
  Info,
  Header,
  PromoTag,
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

const PizzaItemCards: React.FC<IOrderItemProps> = ({
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

  const { prop } = useParams<{ prop: string }>()

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        product =>
          product.category === category && product.collection === collection
      )
    )
  }, [products, collection, category])

  return (
    <Container>
      <h1>{category}</h1>
      {filteredProducts.map((product, index) => {
        const price = product.prices?.find(price => price.variant === prop)
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
                <h2> {product.name} </h2>
                {!!price?.discount === true ? (
                  <PromoTag>
                    <p>Promoção</p>
                  </PromoTag>
                ) : (
                  <div />
                )}
              </Header>
              <Description>
                <p> {`${product.ingredients?.join(', ')}`} </p>
                {!!price?.discount === true ? (
                  <>
                    <strong id="oldPrice">
                      {priceFormatter(price?.price || 0)}
                    </strong>
                    {'   '}
                    <strong>
                      {priceFormatter(
                        (price?.price || 0) - (price?.discount || 0) || 0
                      )}
                    </strong>
                  </>
                ) : (
                  <strong>{priceFormatter(price?.price || 0)}</strong>
                )}
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
                isDisabled={
                  (prop === 'p' &&
                    orderProductsPreview.length >= 1 &&
                    activeProductId === product.uuid) ||
                  (prop === 'g' &&
                    orderProductsPreview.length >= 2 &&
                    activeProductId === product.uuid) ||
                  (prop === 'gg' &&
                    orderProductsPreview.length >= 3 &&
                    activeProductId === product.uuid)
                }
                onClick={() => {
                  if (prop === 'p' && orderProductsPreview.length < 1) {
                    addProductPreview(product)
                  } else if (prop === 'g' && orderProductsPreview.length < 2) {
                    addProductPreview(product)
                  } else if (prop === 'gg' && orderProductsPreview.length < 3) {
                    addProductPreview(product)
                  }
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

export default PizzaItemCards
