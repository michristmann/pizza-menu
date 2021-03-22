import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ProductContext } from '../../hooks/products'
import { IProduct } from '../../interfaces'
import Formatter from '../Formatter'

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

  const handleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <Container>
      <h1>{category}</h1>
      {filteredProducts.map((product, index) => {
        const price = product.prices?.find(price => price.variant === prop)
        return (
          <Item onClick={handleIsActive} isActive={isActive}>
            <Info>
              <Header>
                <strong> {index + 1} </strong>
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
                  <Formatter>{price?.discount}</Formatter>
                ) : (
                  <Formatter>{price?.price}</Formatter>
                )}
              </Description>
            </Info>
            <Button>
              <p>+</p>
            </Button>
          </Item>
        )
      })}
    </Container>
  )
}

export default PizzaItemCards
