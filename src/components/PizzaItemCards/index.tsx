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
  Button
} from './styles'

interface IOrderContentProps {
  collection: string
  category: string
  setActiveProductId: (uuid: string) => void
  activeProductId: string
}

const PizzaItemCards: React.FC<IOrderContentProps> = ({
  collection,
  category,
  setActiveProductId,
  activeProductId
}) => {
  const { products, addProductPreview } = useContext(ProductContext)

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
            <Button
              onClick={() => {
                addProductPreview(product)
              }}
            >
              <div>+</div>
            </Button>
          </Item>
        )
      })}
    </Container>
  )
}

export default PizzaItemCards
