import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ProductContext } from '../../hooks/products'
import { IProduct } from '../../interfaces'

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
}

const PizzaItemCards: React.FC<IOrderContentProps> = ({
  collection,
  category
}) => {
  const context = useContext(ProductContext)

  const { prop } = useParams<{ prop: string }>()

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  useEffect(() => {
    setFilteredProducts(
      context.products.filter(
        product =>
          product.category === category && product.collection === collection
      )
    )
  }, [context.products, collection, category])

  const [isActive, setIsActive] = useState(false)

  const handleIsActive = useCallback(() => {
    setIsActive(true)
  }, [])

  return (
    <Container>
      <h1>{category}</h1>
      {filteredProducts.map((product, index) => {
        const price = product.prices?.find(price => price.variant === prop)
        return (
          <Item isActive={isActive}>
            <Info>
              <Header>
                <strong> {index + 1} </strong>
                <h2> {product.name} </h2>
                <PromoTag>
                  <p>Promoção</p>
                </PromoTag>
              </Header>
              <Description>
                <p> {`${product.ingredients?.join(', ')}`} </p>
                <strong>R${price?.price}0</strong>
              </Description>
            </Info>
            <Button onClick={handleIsActive}>
              <p>+</p>
            </Button>
          </Item>
        )
      })}
    </Container>
  )
}

export default PizzaItemCards
